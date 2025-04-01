export default function DSANotes() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Data Structures and Algorithms Notes</h1>
      <div className="space-y-4">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Data Structures</h2>
          <ul className="list-disc list-inside">
            <li>Arrays and Linked Lists</li>
            <li>Stacks and Queues</li>
            <li>Trees and Graphs</li>
            <li>Hash Tables</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Algorithms</h2>
          <ul className="list-disc list-inside">
            <li>Sorting: Bubble, Insertion, Merge, Quick</li>
            <li>Searching: Linear, Binary</li>
            <li>Graph algorithms: BFS, DFS, Dijkstra's</li>
            <li>Dynamic Programming</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Algorithm Analysis</h2>
          <ul className="list-disc list-inside">
            <li>Time complexity</li>
            <li>Space complexity</li>
            <li>Big O notation</li>
            <li>Best, average, and worst-case scenarios</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

