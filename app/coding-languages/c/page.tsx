export default function CNotes() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">C Programming Notes</h1>
      <div className="space-y-4">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Basics</h2>
          <ul className="list-disc list-inside">
            <li>Variables and data types</li>
            <li>Control structures: if, for, while, switch</li>
            <li>Functions and pointers</li>
            <li>Arrays and strings</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Advanced Topics</h2>
          <ul className="list-disc list-inside">
            <li>Memory management</li>
            <li>Structures and unions</li>
            <li>File I/O</li>
            <li>Preprocessor directives</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Standard Library</h2>
          <ul className="list-disc list-inside">
            <li>stdio.h</li>
            <li>stdlib.h</li>
            <li>string.h</li>
            <li>math.h</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

