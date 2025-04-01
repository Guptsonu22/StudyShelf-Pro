export default function ReactJSNotes() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">React.js Notes</h1>
      <div className="space-y-4">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Fundamentals</h2>
          <ul className="list-disc list-inside">
            <li>Components and JSX</li>
            <li>Props and State</li>
            <li>Lifecycle methods</li>
            <li>Hooks (useState, useEffect, useContext, etc.)</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Advanced Concepts</h2>
          <ul className="list-disc list-inside">
            <li>Context API</li>
            <li>Higher-Order Components (HOCs)</li>
            <li>Render Props</li>
            <li>Error Boundaries</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Ecosystem</h2>
          <ul className="list-disc list-inside">
            <li>State Management (Redux, MobX)</li>
            <li>Routing (React Router)</li>
            <li>Form Handling (Formik, React Hook Form)</li>
            <li>Testing (Jest, React Testing Library)</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

