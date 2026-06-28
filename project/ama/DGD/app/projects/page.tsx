import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { PlusCircle, Calendar, Users, CheckCircle2, PauseCircle, PlayCircle, FolderTree } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <h1 className="text-xl font-bold">Projects Management</h1>
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
              <h2 className="text-2xl font-bold tracking-tight">Project Portfolio</h2>
              <p className="text-muted-foreground">Manage all TRUSTED-ALLY projects</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" asChild>
                <a href="/data-center/structure">
                  <FolderTree className="mr-2 h-4 w-4" />
                  View Structure
                </a>
              </Button>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                New Project
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">25</div>
                <p className="text-xs text-muted-foreground">Across all departments</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">Currently in progress</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Completed Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">Successfully delivered</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Pending Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-muted-foreground">Awaiting approval or resources</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="all">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "AlQuranJourney",
                    description: "Islamic Education and Resources Platform",
                    status: "active",
                    progress: 65,
                    department: "Education",
                    team: 12,
                    deadline: "June 30, 2025",
                  },
                  {
                    title: "T-Ally Umrah Sr.",
                    description: "Umrah Packages for Bangladeshi Pilgrims",
                    status: "active",
                    progress: 80,
                    department: "Travel Services",
                    team: 18,
                    deadline: "April 15, 2025",
                  },
                  {
                    title: "Discover Cox's Bazar",
                    description: "Comprehensive Travel Services",
                    status: "active",
                    progress: 45,
                    department: "Travel Services",
                    team: 15,
                    deadline: "August 20, 2025",
                  },
                  {
                    title: "E-commerce Solution",
                    description: "Online store setup and management",
                    status: "completed",
                    progress: 100,
                    department: "Web Development",
                    team: 8,
                    deadline: "January 10, 2025",
                  },
                  {
                    title: "SEO Optimization",
                    description: "Enhancing website visibility",
                    status: "completed",
                    progress: 100,
                    department: "Web Development",
                    team: 5,
                    deadline: "February 28, 2025",
                  },
                  {
                    title: "Payment Integration",
                    description: "Secure payment solutions",
                    status: "pending",
                    progress: 20,
                    department: "Web Development",
                    team: 6,
                    deadline: "September 15, 2025",
                  },
                ].map((project) => (
                  <Card key={project.title}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle>{project.title}</CardTitle>
                        <Badge
                          variant={
                            project.status === "active"
                              ? "default"
                              : project.status === "completed"
                                ? "success"
                                : "secondary"
                          }
                        >
                          {project.status === "active" && <PlayCircle className="h-3 w-3 mr-1" />}
                          {project.status === "completed" && <CheckCircle2 className="h-3 w-3 mr-1" />}
                          {project.status === "pending" && <PauseCircle className="h-3 w-3 mr-1" />}
                          {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                        </Badge>
                      </div>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm">Progress</span>
                            <span className="text-sm font-medium">{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} className="h-2" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{project.team} members</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{project.deadline}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                            {project.department}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="active" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Active projects would be filtered here */}
                <Card>
                  <CardHeader>
                    <CardTitle>Active Projects</CardTitle>
                    <CardDescription>Currently in progress</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <p className="text-gray-500">Active projects will be displayed here</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="completed" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Completed projects would be filtered here */}
                <Card>
                  <CardHeader>
                    <CardTitle>Completed Projects</CardTitle>
                    <CardDescription>Successfully delivered</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <p className="text-gray-500">Completed projects will be displayed here</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="pending" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Pending projects would be filtered here */}
                <Card>
                  <CardHeader>
                    <CardTitle>Pending Projects</CardTitle>
                    <CardDescription>Awaiting approval or resources</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <p className="text-gray-500">Pending projects will be displayed here</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

