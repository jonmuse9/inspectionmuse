import { NextResponse } from 'next/server'

export async function GET() {
  const html = `
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
          background: white;
        }
        a { color: #10b981; }
        a:hover { text-decoration: underline; }
      </style>
    </head>
    <body>
      <div>
        <script src="https://www.nachi.org/webseals/legacy/education?nachiid=NACHI25081506&include_universal=1"></script>
        <br />
        <small>Certifications acquired through <a href="https://www.nachi.org/education.htm">home inspector training</a> from InterNACHI®</small>
      </div>
    </body>
    </html>
  `
  
  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html',
    },
  })
}