import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { UserPlus, Search, Filter, Mail, Phone, Building, Award, FolderTree } from "lucide-react"

export default function PersonnelPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <h1 className="text-xl font-bold">Personnel Management</h1>
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
              <h2 className="text-2xl font-bold tracking-tight">Staff Directory</h2>
              <p className="text-muted-foreground">Manage all TRUSTED-ALLY personnel</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search personnel..." className="w-full sm:w-[300px] pl-8" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
              <Button variant="outline" asChild>
                <a href="/data-center/structure">
                  <FolderTree className="mr-2 h-4 w-4" />
                  View Structure
                </a>
              </Button>
              <Button>
                <UserPlus className="mr-2 h-4 w-4" />
                Add Personnel
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Staff</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">248</div>
                <p className="text-xs text-muted-foreground">Across all departments</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Active Staff</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">235</div>
                <p className="text-xs text-muted-foreground">Currently employed</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">New Hires</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18</div>
                <p className="text-xs text-muted-foreground">In the last 30 days</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Open Positions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">Currently recruiting</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="all">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All Staff</TabsTrigger>
              <TabsTrigger value="departments">By Department</TabsTrigger>
              <TabsTrigger value="projects">By Project</TabsTrigger>
              <TabsTrigger value="recruitment">Recruitment</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Ahmed Rahman",
                    position: "Web Development Lead",
                    department: "Web Development",
                    email: "ahmed@trustedally.org",
                    phone: "+880 1712 345678",
                    joined: "March 2022",
                    status: "active",
                  },
                  {
                    name: "Fatima Khan",
                    position: "Education Director",
                    department: "Education",
                    email: "fatima@trustedally.org",
                    phone: "+880 1812 345678",
                    joined: "January 2021",
                    status: "active",
                  },
                  {
                    name: "Mohammad Ali",
                    position: "Travel Services Manager",
                    department: "Travel Services",
                    email: "mohammad@trustedally.org",
                    phone: "+880 1912 345678",
                    joined: "June 2022",
                    status: "active",
                  },
                  {
                    name: "Aisha Begum",
                    position: "Islamic Resources Specialist",
                    department: "Islamic Resources",
                    email: "aisha@trustedally.org",
                    phone: "+880 1612 345678",
                    joined: "August 2023",
                    status: "active",
                  },
                  {
                    name: "Kamal Hossain",
                    position: "Finance Manager",
                    department: "Finance",
                    email: "kamal@trustedally.org",
                    phone: "+880 1512 345678",
                    joined: "April 2022",
                    status: "active",
                  },
                  {
                    name: "Nadia Islam",
                    position: "HR Specialist",
                    department: "Human Resources",
                    email: "nadia@trustedally.org",
                    phone: "+880 1312 345678",
                    joined: "October 2023",
                    status: "active",
                  },
                ].map((person) => (
                  <Card key={person.name}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle>{person.name}</CardTitle>
                        <Badge variant={person.status === "active" ? "default" : "secondary"}>
                          {person.status === "active" ? "Active" : "Inactive"}
                        </Badge>
                      </div>
                      <CardDescription>{person.position}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{person.department}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{person.email}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{person.phone}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Joined {person.joined}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View Profile
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="departments" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Staff by Department</CardTitle>
                  <CardDescription>View personnel organized by department</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <p className="text-gray-500">Department view will be displayed here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="projects" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Staff by Project</CardTitle>
                  <CardDescription>View personnel organized by project assignment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <p className="text-gray-500">Project assignment view will be displayed here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="recruitment" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recruitment</CardTitle>
                  <CardDescription>Manage hiring processes and open positions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <p className="text-gray-500">Recruitment dashboard will be displayed here</p>
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

