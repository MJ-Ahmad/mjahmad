"use client"

import { useState } from "react"
import { ChevronRight, ChevronDown, Folder, FolderOpen, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

// Define the structure type
type StructureItem = {
  name: string
  children?: StructureItem[]
  type: "folder" | "file"
}

// Create the organizational structure data
const organizationStructure: StructureItem = {
  name: "Al-Mahmud Academy",
  type: "folder",
  children: [
    {
      name: "AlMahmudAcademyExpense",
      type: "folder",
      children: [
        { name: "Income", type: "folder" },
        { name: "Expenses", type: "folder" },
        { name: "Reports", type: "folder" },
        { name: "BudgetPlanning", type: "folder" },
      ],
    },
    {
      name: "AlMahmudAcademyNetwork",
      type: "folder",
      children: [
        { name: "Employees", type: "folder" },
        { name: "Associates", type: "folder" },
        { name: "Advisors", type: "folder" },
        { name: "Donors", type: "folder" },
        { name: "Investors", type: "folder" },
        { name: "Administration", type: "folder" },
      ],
    },
    {
      name: "Calligraphy",
      type: "folder",
      children: [
        { name: "Students", type: "folder" },
        { name: "Teachers", type: "folder" },
        { name: "Research", type: "folder" },
        { name: "Administration", type: "folder" },
      ],
    },
    {
      name: "Handwriting Improvement",
      type: "folder",
      children: [
        { name: "SafeFood", type: "folder" },
        { name: "Education", type: "folder" },
        { name: "SafeHousing", type: "folder" },
        { name: "HumanRights", type: "folder" },
        { name: "Administration", type: "folder" },
      ],
    },
    {
      name: "Computer Training",
      type: "folder",
      children: [
        { name: "TravelPackages", type: "folder" },
        { name: "ClientServices", type: "folder" },
        { name: "Marketing", type: "folder" },
        { name: "Administration", type: "folder" },
      ],
    },
    {
      name: "Write Your Future",
      type: "folder",
      children: [
        { name: "SoftwareDevelopment", type: "folder" },
        { name: "OnlineMarketing", type: "folder" },
        { name: "Administration", type: "folder" },
      ],
    },
    {
      name: "AlMahmudAcademy-Skills for Success",
      type: "folder",
      children: [
        { name: "Research", type: "folder" },
        { name: "Printing", type: "folder" },
        { name: "Distribution", type: "folder" },
        { name: "Administration", type: "folder" },
      ],
    },
    {
      name: "AlMahmudAcademyDataCenter",
      type: "folder",
      children: [
        { name: "BusinessOperations", type: "folder" },
        { name: "NonProfitActivities", type: "folder" },
        { name: "EducationalInstitution", type: "folder" },
        { name: "DataCollection", type: "folder" },
        { name: "DataAnalysis", type: "folder" },
        { name: "Administration", type: "folder" },
      ],
    },
  ],
}

// TreeNode component for rendering each item
const TreeNode = ({ item, level = 0 }: { item: StructureItem; level?: number }) => {
  const [isOpen, setIsOpen] = useState(level < 1)
  const hasChildren = item.children && item.children.length > 0

  const toggleOpen = () => {
    if (hasChildren) {
      setIsOpen(!isOpen)
    }
  }

  return (
    <div className="select-none">
      <div
        className={`flex items-center py-1 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer ${level === 0 ? "bg-primary/10" : ""}`}
        onClick={toggleOpen}
      >
        <div className="w-5 h-5 mr-1 flex-shrink-0">
          {hasChildren ? (
            isOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )
          ) : (
            <div className="w-4" />
          )}
        </div>
        <div className="mr-2 text-primary">
          {item.type === "folder" ? (
            isOpen ? (
              <FolderOpen className="h-4 w-4" />
            ) : (
              <Folder className="h-4 w-4" />
            )
          ) : (
            <FileText className="h-4 w-4" />
          )}
        </div>
        <span className={`${level === 0 ? "font-bold" : ""}`}>{item.name}</span>
      </div>

      {isOpen && hasChildren && (
        <div className="ml-6 border-l pl-2 border-gray-200 dark:border-gray-700">
          {item.children?.map((child, index) => (
            <TreeNode key={`${child.name}-${index}`} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function StructurePage() {
  const [activePath, setActivePath] = useState<string[]>(["Al-Mahmud Academy"])

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <h1 className="text-xl font-bold">Organizational Structure</h1>
          <div className="ml-auto flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                MN
              </div>
              <span className="font-medium">Md Nazmul Hasan Farazi</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-6">
        <div className="grid gap-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/data-center">Data Center</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/data-center/structure">Structure</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Al-Mahmud Academy Structure</h2>
              <p className="text-muted-foreground">Interactive organizational structure explorer</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Export Structure</Button>
              <Button>View Details</Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Organization Explorer</CardTitle>
                <CardDescription>Click on folders to expand or collapse</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-white dark:bg-gray-950 rounded-md p-4 border overflow-auto max-h-[600px]">
                  <TreeNode item={organizationStructure} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Structure Details</CardTitle>
                <CardDescription>Information about selected item</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">Current Selection</h3>
                    <p className="font-medium">{activePath.join(" > ")}</p>
                  </div>

                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">Description</h3>
                    <p className="text-sm">
                      This section contains information about the organizational structure of Al-Mahmud Academy, including
                      departments, teams, and their relationships.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">Actions</h3>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <Button variant="outline" size="sm" className="w-full">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        Generate Report
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Structure Overview</CardTitle>
              <CardDescription>Summary of Al-Mahmud Academy organizational units</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {[
                  { name: "Departments", count: 8 },
                  { name: "Sub-departments", count: 42 },
                  { name: "Teams", count: 86 },
                  { name: "Projects", count: 25 },
                ].map((item) => (
                  <div key={item.name} className="p-4 border rounded-md">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-2xl font-bold">{item.count}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

