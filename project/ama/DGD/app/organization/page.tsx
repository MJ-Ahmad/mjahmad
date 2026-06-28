import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, UserPlus, ChevronRight, FolderTree } from "lucide-react"

export default function OrganizationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <h1 className="text-xl font-bold">Organization Structure</h1>
          <div className="ml-auto flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                MJ
              </div>
              <span className="font-medium">MJ AHMAD</span>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="grid gap-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">TRUSTED-ALLY Organizational Structure</h2>
              <p className="text-muted-foreground">Pyramid structure with Director General at the top</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" asChild>
                <a href="/data-center/structure">
                  <FolderTree className="mr-2 h-4 w-4" />
                  Data Structure
                </a>
              </Button>
              <Button variant="outline">
                <Users className="mr-2 h-4 w-4" />
                View All Staff
              </Button>
              <Button>
                <UserPlus className="mr-2 h-4 w-4" />
                Add Personnel
              </Button>
            </div>
          </div>

          <Tabs defaultValue="hierarchy">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="hierarchy">Hierarchy</TabsTrigger>
              <TabsTrigger value="departments">Departments</TabsTrigger>
              <TabsTrigger value="projects">Project Teams</TabsTrigger>
            </TabsList>

            <TabsContent value="hierarchy" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Organizational Hierarchy</CardTitle>
                  <CardDescription>Pyramid structure of TRUSTED-ALLY</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center">
                    {/* Director General - Level 1 */}
                    <div className="mb-8">
                      <div className="bg-primary text-primary-foreground px-6 py-4 rounded-lg shadow-lg">
                        <h3 className="font-bold text-center">Director General</h3>
                        <p className="text-center text-sm">MJ AHMAD</p>
                      </div>
                    </div>

                    {/* Executive Directors - Level 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 w-full max-w-4xl">
                      {["Operations", "Programs", "Administration"].map((title) => (
                        <div
                          key={title}
                          className="bg-primary/90 text-primary-foreground px-4 py-3 rounded-lg shadow-md"
                        >
                          <h4 className="font-medium text-center">Executive Director</h4>
                          <p className="text-center text-sm">{title}</p>
                        </div>
                      ))}
                    </div>

                    {/* Department Heads - Level 3 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-8 w-full max-w-5xl">
                      {[
                        "Web Development",
                        "Education",
                        "Travel Services",
                        "Islamic Resources",
                        "Finance",
                        "HR",
                        "IT",
                        "Marketing",
                      ].map((title) => (
                        <div
                          key={title}
                          className="bg-primary/80 text-primary-foreground px-3 py-2 rounded-lg shadow-sm"
                        >
                          <h5 className="font-medium text-center text-sm">Department Head</h5>
                          <p className="text-center text-xs">{title}</p>
                        </div>
                      ))}
                    </div>

                    {/* Team Leaders - Level 4 */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mb-8 w-full max-w-6xl">
                      {Array.from({ length: 15 }).map((_, i) => (
                        <div key={i} className="bg-primary/70 text-primary-foreground px-2 py-2 rounded-lg shadow-sm">
                          <h6 className="font-medium text-center text-xs">Team Leader</h6>
                          <p className="text-center text-xs">Team {i + 1}</p>
                        </div>
                      ))}
                    </div>

                    {/* Staff - Level 5 */}
                    <div className="bg-primary/60 text-primary-foreground px-4 py-3 rounded-lg shadow-sm w-full max-w-6xl">
                      <h6 className="font-medium text-center">Staff Members</h6>
                      <p className="text-center text-sm">200+ Employees across all departments</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Reporting Structure</CardTitle>
                  <CardDescription>Reporting lines and accountability</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-md">
                      <h3 className="font-medium mb-2">Director General</h3>
                      <p className="text-sm text-gray-500 mb-2">
                        MJ AHMAD oversees all operations and is the final authority on strategic decisions.
                      </p>
                      <div className="flex items-center text-sm text-primary">
                        <span>Reports to Board of Trustees</span>
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </div>
                    </div>

                    <div className="p-4 border rounded-md">
                      <h3 className="font-medium mb-2">Executive Directors</h3>
                      <p className="text-sm text-gray-500 mb-2">
                        Lead major divisions and implement strategic initiatives.
                      </p>
                      <div className="flex items-center text-sm text-primary">
                        <span>Report to Director General</span>
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </div>
                    </div>

                    <div className="p-4 border rounded-md">
                      <h3 className="font-medium mb-2">Department Heads</h3>
                      <p className="text-sm text-gray-500 mb-2">
                        Manage specific functional areas and ensure operational excellence.
                      </p>
                      <div className="flex items-center text-sm text-primary">
                        <span>Report to Executive Directors</span>
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </div>
                    </div>

                    <div className="p-4 border rounded-md">
                      <h3 className="font-medium mb-2">Team Leaders</h3>
                      <p className="text-sm text-gray-500 mb-2">Supervise teams and ensure project delivery.</p>
                      <div className="flex items-center text-sm text-primary">
                        <span>Report to Department Heads</span>
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </div>
                    </div>

                    <div className="p-4 border rounded-md">
                      <h3 className="font-medium mb-2">Staff Members</h3>
                      <p className="text-sm text-gray-500 mb-2">Execute tasks and contribute to project success.</p>
                      <div className="flex items-center text-sm text-primary">
                        <span>Report to Team Leaders</span>
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="departments" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Web Development",
                    description: "Creating responsive websites and applications",
                    staff: 45,
                    projects: 12,
                  },
                  {
                    title: "Education",
                    description: "Managing educational initiatives and resources",
                    staff: 78,
                    projects: 8,
                  },
                  {
                    title: "Travel Services",
                    description: "Organizing travel packages and tours",
                    staff: 62,
                    projects: 5,
                  },
                  {
                    title: "Islamic Resources",
                    description: "Developing and managing Islamic educational content",
                    staff: 35,
                    projects: 4,
                  },
                  {
                    title: "Finance",
                    description: "Managing financial operations and reporting",
                    staff: 18,
                    projects: 3,
                  },
                  {
                    title: "Human Resources",
                    description: "Managing personnel and organizational development",
                    staff: 12,
                    projects: 2,
                  },
                ].map((dept) => (
                  <Card key={dept.title}>
                    <CardHeader>
                      <CardTitle>{dept.title}</CardTitle>
                      <CardDescription>{dept.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Staff Members:</span>
                          <span className="font-medium">{dept.staff}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Active Projects:</span>
                          <span className="font-medium">{dept.projects}</span>
                        </div>
                        <Button variant="outline" className="w-full mt-2">
                          View Department
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="projects" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Project Teams</CardTitle>
                  <CardDescription>Cross-functional teams working on specific projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <p className="text-gray-500">Project teams structure will appear here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

