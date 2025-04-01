import { Button } from "@/components/ui/button"

export default function JavaScriptNotes() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">JavaScript Notes</h1>
      <div className="space-y-4">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Basics</h2>
          <ul className="list-disc list-inside">
            <li>Variables: var, let, const</li>
            <li>Data types: string, number, boolean, null, undefined, object, symbol</li>
            <li>Functions: declaration, expression, arrow functions</li>
            <li>Control flow: if...else, switch, for loops, while loops</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Advanced Topics</h2>
          <ul className="list-disc list-inside">
            <li>Closures and scope</li>
            <li>Promises and async/await</li>
            <li>ES6+ features: destructuring, spread operator, modules</li>
            <li>DOM manipulation</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Frameworks and Libraries</h2>
          <ul className="list-disc list-inside">
            <li>React</li>
            <li>Vue.js</li>
            <li>Angular</li>
            <li>Node.js</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

