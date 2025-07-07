// components/HaloBackground.tsx
"use client"

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface HaloBackgroundProps {
  haloCount?: number
  haloSize?: number
  animationSpeed?: number
  mouseEffect?: number
  blurIntensity?: number
}

const HaloBackground: React.FC<HaloBackgroundProps> = ({
  haloCount = 6,
  haloSize = 259,
  animationSpeed = 1.0,
  mouseEffect = 0.3,
  blurIntensity = 20
}) => {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    halos: any[]
    mouse: THREE.Vector2
    targetMouse: THREE.Vector2
    animationId: number | null
  } | null>(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    renderer.domElement.style.filter = `blur(${blurIntensity * 0.1}px)`
    mountRef.current.appendChild(renderer.domElement)
    
    // Mouse tracking
    const mouse = new THREE.Vector2()
    const targetMouse = new THREE.Vector2()
    
    // Your website's color palette
    const colorPalette = [
      { r: 0.545, g: 0.361, b: 0.965 }, // purple-500 #8b5cf6
      { r: 0.231, g: 0.510, b: 0.965 }, // blue-500 #3b82f6
      { r: 0.024, g: 0.714, b: 0.831 }, // cyan-500 #06b6d4
      { r: 0.388, g: 0.400, b: 0.945 }, // indigo-500 #6366f1
      { r: 0.064, g: 0.612, b: 0.506 }, // teal-500 #10b981
      { r: 0.659, g: 0.286, b: 0.855 }, // purple-600 (darker)
    ]
    
    // Shader materials for halo effect
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `
    
    const fragmentShader = `
      uniform vec3 color;
      uniform float opacity;
      uniform float time;
      uniform vec2 mouse;
      uniform float mouseEffect;
      varying vec2 vUv;
      
      void main() {
        vec2 center = vec2(0.5, 0.5);
        vec2 uv = vUv - center;
        
        // Mouse influence
        vec2 mouseInfluence = mouse * mouseEffect * 0.1;
        uv -= mouseInfluence;
        
        float dist = length(uv);
        
        // Create multiple ring patterns
        float ring1 = smoothstep(0.3, 0.2, dist);
        float ring2 = smoothstep(0.4, 0.35, dist) - smoothstep(0.2, 0.15, dist);
        float ring3 = smoothstep(0.5, 0.45, dist) - smoothstep(0.35, 0.3, dist);
        
        // Animate the rings
        float pulse = sin(time * 2.0 + dist * 10.0) * 0.5 + 0.5;
        float combined = (ring1 + ring2 * 0.7 + ring3 * 0.4) * pulse;
        
        // Radial gradient
        float radial = 1.0 - smoothstep(0.0, 0.5, dist);
        
        float alpha = combined * radial * opacity;
        gl_FragColor = vec4(color, alpha);
      }
    `
    
    // Create halos
    const halos: any[] = []
    
    for (let i = 0; i < haloCount; i++) {
      const geometry = new THREE.PlaneGeometry(haloSize, haloSize)
      
      const colorIndex = Math.floor(Math.random() * colorPalette.length)
      const color = colorPalette[colorIndex]
      
      const material = new THREE.ShaderMaterial({
        uniforms: {
          color: { value: new THREE.Vector3(color.r, color.g, color.b) },
          opacity: { value: 0.15 + Math.random() * 0.25 },
          time: { value: 0 },
          mouse: { value: new THREE.Vector2(0, 0) },
          mouseEffect: { value: mouseEffect }
        },
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })
      
      const halo = new THREE.Mesh(geometry, material)
      
      // Position halos in 3D space
      halo.position.set(
        (Math.random() - 0.5) * 800,
        (Math.random() - 0.5) * 600,
        (Math.random() - 0.5) * 400 - 200
      )
      
      // Random rotation
      halo.rotation.z = Math.random() * Math.PI * 2
      
      const haloData = {
        mesh: halo,
        material: material,
        geometry: geometry,
        originalPosition: halo.position.clone(),
        rotationSpeed: (Math.random() - 0.5) * 0.01,
        floatOffset: Math.random() * Math.PI * 2,
        floatSpeed: 0.5 + Math.random() * 1.5,
        scale: 0.7 + Math.random() * 0.6,
        pulseSpeed: 0.8 + Math.random() * 1.4
      }
      
      halo.scale.setScalar(haloData.scale)
      
      scene.add(halo)
      halos.push(haloData)
    }
    
    // Camera position
    camera.position.z = 300
    
    // Mouse event handlers
    const onMouseMove = (event: MouseEvent) => {
      targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1
      targetMouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    }
    
    // Window resize handler
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('resize', onWindowResize)
    
    // Animation loop
    const animate = () => {
      const time = Date.now() * 0.001
      
      // Smooth mouse following
      mouse.x += (targetMouse.x - mouse.x) * 0.05
      mouse.y += (targetMouse.y - mouse.y) * 0.05
      
      halos.forEach((haloData) => {
        const halo = haloData.mesh
        const material = haloData.material
        
        // Update shader uniforms
        material.uniforms.time.value = time * haloData.pulseSpeed * animationSpeed
        material.uniforms.mouse.value.set(mouse.x, mouse.y)
        
        // Rotation
        halo.rotation.z += haloData.rotationSpeed * animationSpeed
        
        // Floating motion
        halo.position.y = haloData.originalPosition.y + 
          Math.sin(time * haloData.floatSpeed + haloData.floatOffset) * 30
        
        // Mouse influence on position
        halo.position.x = haloData.originalPosition.x + mouse.x * mouseEffect * 50
        halo.position.z = haloData.originalPosition.z + mouse.y * mouseEffect * 30
        
        // Subtle scale pulsing
        const pulse = 1 + Math.sin(time * haloData.pulseSpeed * 0.5) * 0.05
        halo.scale.setScalar(haloData.scale * pulse)
      })
      
      // Camera gentle movement
      camera.position.x += (mouse.x * 10 - camera.position.x) * 0.02
      camera.position.y += (mouse.y * 10 - camera.position.y) * 0.02
      camera.lookAt(scene.position)
      
      renderer.render(scene, camera)
      
      sceneRef.current!.animationId = requestAnimationFrame(animate)
    }
    
    // Store scene data
    sceneRef.current = {
      scene,
      camera,
      renderer,
      halos,
      mouse,
      targetMouse,
      animationId: null
    }
    
    // Start animation
    animate()
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onWindowResize)
      
      if (sceneRef.current?.animationId) {
        cancelAnimationFrame(sceneRef.current.animationId)
      }
      
      // Dispose of Three.js objects
      halos.forEach(haloData => {
        scene.remove(haloData.mesh)
        haloData.material.dispose()
        haloData.geometry.dispose()
      })
      
      renderer.dispose()
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
    }
  }, [haloCount, haloSize, animationSpeed, mouseEffect, blurIntensity])

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 pointer-events-none z-0"
      style={{ zIndex: 0 }}
    />
  )
}

export default HaloBackground