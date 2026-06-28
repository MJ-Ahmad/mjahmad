import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Database,
  Search,
  Filter,
  Download,
  Upload,
  BarChart2,
  PieChart,
  LineChart,
  FolderTree,
  Server,
  Shield,
} from "lucide-react"

export default function DataCenterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <h1 className="text-xl font-bold">TRUSTED-ALLY Data Center</h1>
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
              <h2 className="text-2xl font-bold tracking-tight">Data Management System</h2>
              <p className="text-muted-foreground">Centralized data repository for all TRUSTED-ALLY operations</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search data..." className="w-full sm:w-[300px] pl-8" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
                <span className="sr-only">Download</span>
              </Button>
              <Button size="icon">
                <Upload className="h-4 w-4" />
                <span className="sr-only">Upload</span>
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Data Points</CardTitle>
                <Database className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,248,392</div>
                <p className="text-xs text-muted-foreground">+12,483 from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
                <Server className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.2 TB</div>
                <p className="text-xs text-muted-foreground">42% of total capacity</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Active Data Sources</CardTitle>
                <FolderTree className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">28</div>
                <p className="text-xs text-muted-foreground">Across 6 departments</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Data Security</CardTitle>
                <Shield className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">98.7%</div>
                <p className="text-xs text-muted-foreground">Security compliance score</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Organization Explorer</CardTitle>
                <FolderTree className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">
                  <a href="/data-center/structure" className="text-primary hover:underline">
                    Main departments
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="structure">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="structure">Data Structure</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="management">Management</TabsTrigger>
              <TabsTrigger value="explorer" asChild>
                <a href="/data-center/structure">Explorer</a>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="structure" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>TrustedAllyDataCenter Structure</CardTitle>
                  <CardDescription>Hierarchical organization of all data</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="p-4 border rounded-md bg-gray-50 dark:bg-gray-900 overflow-auto max-h-[500px]">
                    <pre className="text-sm">
                      <code>
                        {`TrustedAllyDataCenter/
├── BusinessOperations/
│   ├── Production/
│   ├── Marketing/
│   ├── RiskManagement/
│   ├── MarketResearch/
│   ├── QualityControl/
│   └── Projects/
├── NonProfitActivities/
│   ├── SafeFood/
│   ├── EducationManagement/
│   ├── SafeHousing/
│   └── HumanRights/
├── EducationalInstitution/
│   ├── Students/
│   ├── Teachers/
│   ├── Research/
│   └── Classes/
├── DataCollection/
│   ├── DailyReports/
│   ├── MonthlyReports/
│   ├── AnnualReports/
│   └── Surveys/
├── DataAnalysis/
│   ├── LabTests/
│   ├── StatisticalAnalysis/
│   └── Reports/
└── Administration/
    ├── HR/
    ├── Finance/
    ├── IT/
    └── Legal/`}
                      </code>
                    </pre>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Data Categories</CardTitle>
                    <CardDescription>Main data categories and their sizes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Business Operations</p>
                          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div className="bg-primary h-full w-[65%]"></div>
                          </div>
                        </div>
                        <p className="text-sm font-medium">2.7 TB</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Non-Profit Activities</p>
                          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div className="bg-primary h-full w-[45%]"></div>
                          </div>
                        </div>
                        <p className="text-sm font-medium">0.8 TB</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Educational Institution</p>
                          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div className="bg-primary h-full w-[35%]"></div>
                          </div>
                        </div>
                        <p className="text-sm font-medium">0.5 TB</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Data Analysis</p>
                          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div className="bg-primary h-full w-[15%]"></div>
                          </div>
                        </div>
                        <p className="text-sm font-medium">0.2 TB</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Data Access</CardTitle>
                    <CardDescription>Most frequently accessed data categories</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px] flex items-center justify-center">
                      <BarChart2 className="h-16 w-16 text-gray-400" />
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-4 text-center text-sm">
                      <div>
                        <div className="font-medium">Business Operations</div>
                        <div className="text-gray-500">42% of queries</div>
                      </div>
                      <div>
                        <div className="font-medium">Educational Institution</div>
                        <div className="text-gray-500">28% of queries</div>
                      </div>
                      <div>
                        <div className="font-medium">Non-Profit Activities</div>
                        <div className="text-gray-500">18% of queries</div>
                      </div>
                      <div>
                        <div className="font-medium">Administration</div>
                        <div className="text-gray-500">12% of queries</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Data Growth Trends</CardTitle>
                    <CardDescription>Monthly data accumulation by category</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center">
                      <LineChart className="h-16 w-16 text-gray-400" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Data Distribution</CardTitle>
                    <CardDescription>Current data distribution by department</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center">
                      <PieChart className="h-16 w-16 text-gray-400" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Data Analytics Dashboard</CardTitle>
                  <CardDescription>Comprehensive data analysis tools</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <p className="text-gray-500">Advanced analytics dashboard will appear here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reports" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Generated Reports</CardTitle>
                  <CardDescription>Access all system-generated reports</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <p className="text-gray-500">Reports dashboard will appear here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="management" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Data Management Tools</CardTitle>
                  <CardDescription>Tools for managing the data center</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <p className="text-gray-500">Data management tools will appear here</p>
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

