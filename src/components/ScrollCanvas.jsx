import React, { useRef, useEffect, useState, useCallback } from 'react'

const TOTAL_FRAMES = 192

const ScrollCanvas = () => {
    const canvasRef = useRef(null)
    const imagesRef = useRef([])
    const currentFrameRef = useRef(0)
    const [loaded, setLoaded] = useState(false)
    const rafRef = useRef(null)

    // Preload all frames
    useEffect(() => {
        let loadedCount = 0
        const images = []

        for (let i = 1; i <= TOTAL_FRAMES; i++) {
            const img = new Image()
            const num = String(i).padStart(3, '0')
            img.src = `/video frames/ezgif-frame-${num}.webp`
            img.onload = () => {
                loadedCount++
                if (loadedCount === TOTAL_FRAMES) {
                    setLoaded(true)
                }
            }
            img.onerror = () => {
                loadedCount++
                if (loadedCount === TOTAL_FRAMES) {
                    setLoaded(true)
                }
            }
            images.push(img)
        }

        imagesRef.current = images
    }, [])

    const drawFrame = useCallback((frameIndex) => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        const idx = Math.max(0, Math.min(frameIndex, TOTAL_FRAMES - 1))
        const img = imagesRef.current[idx]
        if (!img || !img.complete || img.naturalWidth === 0) return

        const cw = canvas.width
        const ch = canvas.height
        const iw = img.naturalWidth
        const ih = img.naturalHeight

        // Cover fit
        const scale = Math.max(cw / iw, ch / ih)
        const w = iw * scale
        const h = ih * scale
        const x = (cw - w) / 2
        const y = (ch - h) / 2

        ctx.clearRect(0, 0, cw, ch)
        ctx.drawImage(img, x, y, w, h)
    }, [])

    // Resize canvas to viewport
    useEffect(() => {
        const resize = () => {
            const canvas = canvasRef.current
            if (!canvas) return
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            drawFrame(currentFrameRef.current)
        }

        resize()
        window.addEventListener('resize', resize)
        return () => window.removeEventListener('resize', resize)
    }, [drawFrame, loaded])

    // Draw initial frame
    useEffect(() => {
        if (loaded) {
            drawFrame(0)
        }
    }, [loaded, drawFrame])

    // Scroll-driven frame scrubbing
    useEffect(() => {
        if (!loaded) return

        const handleScroll = () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current)

            rafRef.current = requestAnimationFrame(() => {
                const scrollTop = window.scrollY
                const docHeight = document.documentElement.scrollHeight - window.innerHeight
                const scrollFraction = Math.min(scrollTop / docHeight, 1)
                const frameIndex = Math.floor(scrollFraction * (TOTAL_FRAMES - 1))

                if (frameIndex !== currentFrameRef.current) {
                    currentFrameRef.current = frameIndex
                    drawFrame(frameIndex)
                }
            })
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll)
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
        }
    }, [loaded, drawFrame])

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -2,
                display: loaded ? 'block' : 'none',
            }}
        />
    )
}

export default ScrollCanvas
