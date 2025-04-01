import { Button } from "@/components/ui/button"

export default function PythonNotes() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Python Notes</h1>
      <div className="space-y-4">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Basics</h2>
          <ul className="list-disc list-inside">
            <li>Variables and data types</li>
            <li>Control structures: if, for, while</li>
            <li>Functions and modules</li>
            <li>Lists, tuples, and dictionaries</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Advanced Topics</h2>
          <ul className="list-disc list-inside">
            <li>Object-Oriented Programming</li>
            <li>Exception handling</li>
            <li>File I/O</li>
            <li>Decorators and generators</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Libraries and Frameworks</h2>
          <ul className="list-disc list-inside">
            <li>NumPy and Pandas for data analysis</li>
            <li>Django and Flask for web development</li>
            <li>TensorFlow and PyTorch for machine learning</li>
            <li>Matplotlib and Seaborn for data visualization</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

