'use client'

import { useEffect, useRef } from 'react'

export default function InterNACHICertification() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scriptLoadedRef = useRef(false)

  useEffect(() => {
    if (!containerRef.current || scriptLoadedRef.current) return

    // Prevent duplicate script loading
    scriptLoadedRef.current = true

    // Create iframe that persists
    const iframe = document.createElement('iframe')
    iframe.style.width = '100%'
    iframe.style.border = 'none'
    iframe.style.height = '450px'
    iframe.style.display = 'block'
    iframe.setAttribute('scrolling', 'no')
    
    // Append iframe to container
    containerRef.current.appendChild(iframe)

    // Get iframe document
    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
    
    if (iframeDoc) {
      // Write content to iframe
      const content = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { 
              margin: 0; 
              padding: 20px; 
              font-family: system-ui, -apple-system, sans-serif;
              text-align: center;
              background: #e5e7eb;
            }
            a { color: #10b981; }
            a:hover { text-decoration: underline; }
          </style>
        </head>
        <body>
          <div>
            <script src="https://www.nachi.org/webseals/legacy/education?nachiid=NACHI25081506&include_universal=1"><\/script>
          </div>
        </body>
        </html>
      `
      
      iframeDoc.open()
      iframeDoc.write(content)
      iframeDoc.close()
      
      // Adjust height after content loads
      setTimeout(() => {
        if (iframeDoc.body) {
          const height = iframeDoc.body.scrollHeight
          if (height > 0) {
            iframe.style.height = (height + 40) + 'px'
          }
        }
      }, 2000)
    }

    // No cleanup - let the iframe persist
  }, [])

  return (
    <div className="text-center py-6">
      <div ref={containerRef} className="mb-4" />
      <small className="text-black block">
        Certifications acquired through{' '}
        <a 
          href="https://www.nachi.org/education.htm" 
          className="text-primary hover:underline" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          home inspector training
        </a>{' '}
        from InterNACHI®
      </small>
    </div>
  )
}