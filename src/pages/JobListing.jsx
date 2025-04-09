
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Search,
  CalendarDays,
  ArrowUp,
  ArrowDown,
  FileText
} from "lucide-react";
import "./JobListing.css";

export default function JobListing() {
  const [sortOrder, setSortOrder] = useState("newest");
  const [filterCategory, setFilterCategory] = useState("all");

  // Dummy data for job listings
  const jobListings = [
    {
      id: 1,
      title: "Construction Worker",
      company: "BuildRight Construction",
      location: "Manchester",
      type: "Full-time",
      salary: "£16-£18 per hour",
      category: "Construction",
      posted: "2 days ago",
      urgentHiring: true,
      description: "Experienced construction worker needed for residential building projects."
    },
    {
      id: 2,
      title: "Warehouse Assistant",
      company: "LogiTech Solutions",
      location: "Liverpool",
      type: "Part-time",
      salary: "£12-£14 per hour",
      category: "Warehousing",
      posted: "1 week ago",
      urgentHiring: false,
      description: "Assist with inventory management and order fulfillment in our busy warehouse."
    },
    {
      id: 3,
      title: "Kitchen Porter",
      company: "The Grand Hotel",
      location: "Birmingham",
      type: "Full-time",
      salary: "£11-£13 per hour",
      category: "Hospitality",
      posted: "3 days ago",
      urgentHiring: true,
      description: "Kitchen porter needed for busy hotel restaurant. Experience preferred but not essential."
    },
    {
      id: 4,
      title: "Factory Operative",
      company: "ProManufacturing Ltd",
      location: "Leeds",
      type: "Temporary",
      salary: "£13-£15 per hour",
      category: "Factory Work",
      posted: "Just now",
      urgentHiring: true,
      description: "Join our production line team for an immediate start. Various shifts available."
    },
    {
      id: 5,
      title: "Bricklayer",
      company: "Premier Construction",
      location: "Sheffield",
      type: "Contract",
      salary: "£20-£25 per hour",
      category: "Construction",
      posted: "5 days ago",
      urgentHiring: false,
      description: "Skilled bricklayer required for commercial building project. Must have own tools."
    },
    {
      id: 6,
      title: "Hotel Cleaner",
      company: "Comfort Stays",
      location: "Newcastle",
      type: "Part-time",
      salary: "£10-£12 per hour",
      category: "Hospitality",
      posted: "1 day ago",
      urgentHiring: false,
      description: "Join our housekeeping team to maintain high standards in our hotel rooms."
    }
  ];

  // Filter jobs by category
  const filteredJobs = filterCategory === "all" 
    ? jobListings 
    : jobListings.filter(job => job.category === filterCategory);

  // Sort jobs by date
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (sortOrder === "newest") {
      // This is simplified - in reality, you'd compare actual dates
      return a.posted === "Just now" ? -1 : b.posted === "Just now" ? 1 : 0;
    } else {
      return a.posted === "Just now" ? 1 : b.posted === "Just now" ? -1 : 0;
    }
  });

  // Available job categories
  const categories = [
    { icon: Briefcase, name: "All", value: "all" },
    { icon: Briefcase, name: "Construction", value: "Construction" },
    { icon: Briefcase, name: "Factory Work", value: "Factory Work" },
    { icon: Briefcase, name: "Hospitality", value: "Hospitality" },
    { icon: Briefcase, name: "Warehousing", value: "Warehousing" }
  ];

  return (
    <div className="job-listing-page min-h-screen bg-gray-50">
      {/* Header with search */}
      <section className="job-search-header py-10 bg-blue-600">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Find Your Next Job</h1>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                type="text" 
                placeholder="Job title, keywords, or company" 
                className="pl-10 bg-white"
              />
            </div>
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                type="text" 
                placeholder="Location" 
                className="pl-10 bg-white"
              />
            </div>
            <Button className="bg-blue-700 hover:bg-blue-800">
              <Search className="mr-2" />
              Search Jobs
            </Button>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="job-listing-content py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar */}
            <aside className="md:w-64 space-y-6">
              {/* Categories */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-3 text-blue-700">Job Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button 
                      key={category.value}
                      variant={filterCategory === category.value ? "default" : "outline"}
                      className={`w-full justify-start ${filterCategory === category.value ? 'bg-blue-600' : ''}`}
                      onClick={() => setFilterCategory(category.value)}
                    >
                      <category.icon className="mr-2 h-4 w-4" />
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Job Type Filter */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-3 text-blue-700">Job Type</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="full-time" className="mr-2" />
                    <label htmlFor="full-time">Full-time</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="part-time" className="mr-2" />
                    <label htmlFor="part-time">Part-time</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="temporary" className="mr-2" />
                    <label htmlFor="temporary">Temporary</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="contract" className="mr-2" />
                    <label htmlFor="contract">Contract</label>
                  </div>
                </div>
              </div>
            </aside>

            {/* Job listings */}
            <div className="flex-1">
              {/* Sort controls */}
              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-600">Showing {sortedJobs.length} jobs</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setSortOrder(sortOrder === "newest" ? "oldest" : "newest")}
                  >
                    {sortOrder === "newest" ? "Newest" : "Oldest"}
                    {sortOrder === "newest" ? <ArrowDown className="ml-1 h-4 w-4" /> : <ArrowUp className="ml-1 h-4 w-4" />}
                  </Button>
                </div>
              </div>

              {/* Job cards */}
              <div className="space-y-4">
                {sortedJobs.map((job) => (
                  <Card key={job.id} className="job-card hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="text-xl font-semibold text-blue-700">
                              <Link to={`/jobs/${job.id}`} className="hover:underline">{job.title}</Link>
                            </h3>
                            {job.urgentHiring && (
                              <Badge className="bg-red-500">Urgent</Badge>
                            )}
                          </div>
                          <p className="text-gray-600 mt-1">{job.company}</p>
                          
                          <div className="flex flex-wrap gap-4 mt-3">
                            <div className="flex items-center text-gray-600">
                              <MapPin className="h-4 w-4 mr-1" />
                              {job.location}
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Clock className="h-4 w-4 mr-1" />
                              {job.type}
                            </div>
                            <div className="flex items-center text-gray-600">
                              <DollarSign className="h-4 w-4 mr-1" />
                              {job.salary}
                            </div>
                            <div className="flex items-center text-gray-600">
                              <CalendarDays className="h-4 w-4 mr-1" />
                              {job.posted}
                            </div>
                          </div>
                          
                          <p className="mt-3 text-gray-700">{job.description}</p>
                        </div>
                        
                        <div className="flex flex-col gap-2 w-full md:w-auto">
                          <Button className="bg-blue-600 hover:bg-blue-700">
                            Apply Now
                          </Button>
                          <Button variant="outline" className="flex gap-1">
                            <FileText className="h-4 w-4" />
                            Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <Pagination className="mt-8">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="job-cta-section bg-blue-600 text-white py-12 mt-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find The Right Job?</h2>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            Upload your CV and let employers find you for their latest opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link to="/upload-cv">Upload Your CV</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
              <Link to="/create-account">Create Job Alert</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Labour Connect</h3>
              <p className="mb-4">
                Connecting skilled workers with employers for a better future.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="footer-link">About Us</Link></li>
                <li><Link to="/jobs" className="footer-link">Browse Jobs</Link></li>
                <li><Link to="/workers" className="footer-link">Find Workers</Link></li>
                <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Contact</h4>
              <address className="not-italic">
                <p>Email: info@labourconnect.com</p>
                <p>Phone: (123) 456-7890</p>
              </address>
            </div>
          </div>
          <div className="border-t border-blue-700 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Labour Connect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
