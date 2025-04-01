export default function SQLNotes() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">SQL Notes</h1>
      <div className="space-y-4">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Basic SQL</h2>
          <ul className="list-disc list-inside">
            <li>SELECT, INSERT, UPDATE, DELETE statements</li>
            <li>WHERE clause and conditions</li>
            <li>JOIN operations</li>
            <li>GROUP BY and HAVING clauses</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Advanced SQL</h2>
          <ul className="list-disc list-inside">
            <li>Subqueries and nested queries</li>
            <li>Views and stored procedures</li>
            <li>Indexes and query optimization</li>
            <li>Transactions and ACID properties</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Database Design</h2>
          <ul className="list-disc list-inside">
            <li>Normalization and denormalization</li>
            <li>Entity-Relationship Diagrams (ERD)</li>
            <li>Primary and foreign keys</li>
            <li>Database security and user management</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

