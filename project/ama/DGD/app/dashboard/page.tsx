import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  LineChart,
  PieChart,
  Activity,
  Users,
  FileText,
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp,
  FolderTree,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <h1 className="text-xl font-bold">Director General Dashboard</h1>
          <div className="ml-auto flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                MJ
              </div>
              <span className="font-medium">Md Nazmul Hasan Farazi</span>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="grid gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Overview</h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Clock className="mr-2 h-4 w-4" />
                Last updated: Today, 3:31 PM
              </Button>
              <Button size="sm">
                <Activity className="mr-2 h-4 w-4" />
                Refresh Data
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                <TrendingUp className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+2 from last month</p>
                <Progress value={75} className="mt-3 h-1" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Personnel</CardTitle>
                <Users className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">248</div>
                <p className="text-xs text-muted-foreground">+18 from last month</p>
                <Progress value={65} className="mt-3 h-1" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Pending Reports</CardTitle>
                <FileText className="h-4 w-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <p className="text-xs text-muted-foreground">-3 from last week</p>
                <Progress value={30} className="mt-3 h-1" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Issues Requiring Attention</CardTitle>
                <AlertTriangle className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">+1 from yesterday</p>
                <Progress value={15} className="mt-3 h-1" />
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="personnel">Personnel</TabsTrigger>
              <TabsTrigger value="data">Data Center</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Status</CardTitle>
                    <CardDescription>Distribution of project statuses</CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <div className="h-[200px] flex items-center justify-center">
                      <PieChart className="h-16 w-16 text-gray-400" />
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-4 text-center text-sm">
                      <div>
                        <div className="font-medium">Active</div>
                        <div className="text-gray-500">12</div>
                      </div>
                      <div>
                        <div className="font-medium">Pending</div>
                        <div className="text-gray-500">5</div>
                      </div>
                      <div>
                        <div className="font-medium">Completed</div>
                        <div className="text-gray-500">8</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Personnel Distribution</CardTitle>
                    <CardDescription>Staff by department</CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <div className="h-[200px] flex items-center justify-center">
                      <BarChart className="h-16 w-16 text-gray-400" />
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-4 text-center text-sm">
                      <div>
                        <div className="font-medium">Education</div>
                        <div className="text-gray-500">78</div>
                      </div>
                      <div>
                        <div className="font-medium">Web Dev</div>
                        <div className="text-gray-500">45</div>
                      </div>
                      <div>
                        <div className="font-medium">Travel</div>
                        <div className="text-gray-500">62</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Progress</CardTitle>
                    <CardDescription>Project completion trends</CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <div className="h-[200px] flex items-center justify-center">
                      <LineChart className="h-16 w-16 text-gray-400" />
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-4 text-center text-sm">
                      <div>
                        <div className="font-medium">Jan</div>
                        <div className="text-gray-500">85%</div>
                      </div>
                      <div>
                        <div className="font-medium">Feb</div>
                        <div className="text-gray-500">92%</div>
                      </div>
                      <div>
                        <div className="font-medium">Mar</div>
                        <div className="text-gray-500">88%</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Organization Structure</CardTitle>
                    <CardDescription>Explore the Al-Mahmud Academy structure</CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <div className="h-[200px] flex items-center justify-center">
                      <FolderTree className="h-16 w-16 text-gray-400" />
                    </div>
                    <div className="mt-4 text-center">
                      <Button variant="outline" asChild>
                        <a href="/data-center/structure">Explore Structure</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activities</CardTitle>
                    <CardDescription>Latest actions across departments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className="rounded-full bg-primary/10 p-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm font-medium">Project milestone completed</p>
                            <p className="text-xs text-gray-500">Al-Mahmud Academy - Phase {i}</p>
                            <p className="text-xs text-gray-500">2 hours ago</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Urgent Matters</CardTitle>
                    <CardDescription>Issues requiring immediate attention</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-red-100 p-2">
                          <AlertTriangle className="h-4 w-4 text-red-500" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Server maintenance required</p>
                          <p className="text-xs text-gray-500">Web Development Department</p>
                          <p className="text-xs text-gray-500">High Priority</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-orange-100 p-2">
                          <AlertTriangle className="h-4 w-4 text-orange-500" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Budget approval pending</p>
                          <p className="text-xs text-gray-500">T-Ally Umrah Sr. Project</p>
                          <p className="text-xs text-gray-500">Medium Priority</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-orange-100 p-2">
                          <AlertTriangle className="h-4 w-4 text-orange-500" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Staff training schedule</p>
                          <p className="text-xs text-gray-500">Education Department</p>
                          <p className="text-xs text-gray-500">Medium Priority</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="projects" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Project Management</CardTitle>
                  <CardDescription>Manage all Al-Mahmud Academy projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <p className="text-gray-500">Project management dashboard content will appear here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="personnel" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personnel Management</CardTitle>
                  <CardDescription>Manage all Al-Mahmud Academy staff</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <p className="text-gray-500">Personnel management dashboard content will appear here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="data" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Data Center</CardTitle>
                  <CardDescription>Access the Al-Mahmud Academy Data Center</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <p className="text-gray-500">Data center dashboard content will appear here</p>
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

