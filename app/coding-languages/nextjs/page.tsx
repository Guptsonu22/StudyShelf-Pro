export default function NextJSNotes() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Next.js Notes</h1>
      <div className="space-y-4">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Basics</h2>
          <ul className="list-disc list-inside">
            <li>Pages and Routing</li>
            <li>Server-side Rendering (SSR)</li>
            <li>Static Site Generation (SSG)</li>
            <li>API Routes</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Advanced Features</h2>
          <ul className="list-disc list-inside">
            <li>Dynamic Imports</li>
            <li>Custom App and Document</li>
            <li>Middleware</li>
            <li>Internationalization</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Deployment and Optimization</h2>
          <ul className="list-disc list-inside">
            <li>Vercel deployment</li>
            <li>Image Optimization</li>
            <li>Performance optimization techniques</li>
            <li>SEO best practices</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

