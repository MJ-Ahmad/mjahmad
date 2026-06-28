import Link from "next/link"
import { ArrowRight, BarChart3, FileText, Users, Briefcase, MessageSquare, Database, FolderTree } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/placeholder.svg?height=40&width=40" alt="Al-Mahmud Academy Logo" className="h-10 w-10" />
            <span className="text-xl font-bold">Al-Mahmud Academy</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/dashboard" className="text-sm font-medium hover:underline">
              Dashboard
            </Link>
            <Link href="/projects" className="text-sm font-medium hover:underline">
              Projects
            </Link>
            <Link href="/personnel" className="text-sm font-medium hover:underline">
              Personnel
            </Link>
            <Link href="/data-center" className="text-sm font-medium hover:underline">
              Data Center
            </Link>
            <Link href="/reports" className="text-sm font-medium hover:underline">
              Reports
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Settings
            </Button>
            <Button size="sm">Director Portal</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Al-Mahmud Academy Management System
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Skills for Success
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button>
                  Access Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline">View Organization Structure</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Director General's Management Portal
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Comprehensive management tools for Md Nazmul Hasan Farazi to oversee all Al-Mahmud Academy operations
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card>
                <CardHeader>
                  <BarChart3 className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Performance Analytics</CardTitle>
                  <CardDescription>Monitor key performance indicators across all departments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-40 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">Analytics Dashboard</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Analytics
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <Briefcase className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Project Management</CardTitle>
                  <CardDescription>Track and manage all ongoing and planned projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-40 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">Project Dashboard</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Manage Projects
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Personnel Management</CardTitle>
                  <CardDescription>Oversee staff recruitment, training, and performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-40 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">Personnel Dashboard</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Manage Personnel
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <FileText className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Reports & Documentation</CardTitle>
                  <CardDescription>Access and review all organizational reports</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-40 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">Reports Dashboard</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Reports
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <MessageSquare className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Feedback Management</CardTitle>
                  <CardDescription>Monitor complaints, suggestions, and feedback</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-40 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">Feedback Dashboard</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Manage Feedback
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <Database className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Data Center</CardTitle>
                  <CardDescription>Access the integrated data management system</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-40 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">Data Center Dashboard</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Access Data Center
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <FolderTree className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Organization Structure</CardTitle>
                  <CardDescription>Explore the complete Al-Mahmud Academy structure</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-40 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">Structure Explorer</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/data-center/structure">Explore Structure</a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2025 Al-Mahmud Academy. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-gray-500 hover:underline dark:text-gray-400">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-gray-500 hover:underline dark:text-gray-400">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-sm text-gray-500 hover:underline dark:text-gray-400">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

