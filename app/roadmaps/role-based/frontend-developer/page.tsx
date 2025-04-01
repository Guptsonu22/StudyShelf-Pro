import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const roadmapSteps = [
  {
    title: "1. HTML, CSS, and JavaScript Basics",
    content: "Master the fundamentals of web development, including HTML5 semantics, CSS3 features, and core JavaScript concepts."
  },
  {
    title: "2. Responsive Web Design",
    content: "Learn to create websites that work well on various devices and screen sizes using CSS media queries and flexible layouts."
  },
  {
    title: "3. CSS Frameworks",
    content: "Familiarize yourself with popular CSS frameworks like Bootstrap or Tailwind CSS for rapid prototyping and consistent designs."
  },
  {
    title: "4. JavaScript Frameworks",
    content: "Choose and master a JavaScript framework such as React, Vue, or Angular for building complex user interfaces."
  },
  {
    title: "5. Version Control",
    content: "Learn Git for version control and collaboration with other developers."
  },
  {
    title: "6. Build Tools and Module Bundlers",
    content: "Understand and use tools like Webpack, Babel, and npm for managing dependencies and optimizing your code."
  },
  {
    title: "7. Web Performance Optimization",
    content: "Learn techniques for improving website speed and performance, including lazy loading and code splitting."
  },
  {
    title: "8. Web Accessibility",
    content: "Ensure your websites are accessible to all users, including those with disabilities."
  },
  {
    title: "9. Testing and Debugging",
    content: "Master browser developer tools and learn testing frameworks like Jest for ensuring code quality."
  },
]

export default function FrontendDeveloperRoadmap() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Frontend Developer Roadmap</h1>
      <p className="mb-6">Follow this roadmap to become a proficient Frontend Developer. Remember, learning is a continuous process, and technology evolves rapidly, so always stay updated with the latest trends and best practices.</p>
      <div className="space-y-4 mb-6">
        {roadmapSteps.map((step, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{step.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Link href="/roadmaps/role-based">
        <Button>Back to Role-based Roadmaps</Button>
      </Link>
    </div>
  )
}

