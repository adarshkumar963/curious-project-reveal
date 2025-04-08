
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, Briefcase, Users, Building, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import "./Home.css";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-blue-700 leading-tight">
                Find Your Perfect <span className="text-blue-600">Labour Match</span>
              </h1>
              <p className="text-xl text-blue-600">
                Connect job seekers with employers quickly and efficiently. 
                Find skilled workers or discover opportunities that match your skills.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/register">Get Started</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-700 hover:bg-blue-100">
                  <Link to="/login">Sign In</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/placeholder.svg" 
                alt="Labour Connect" 
                className="rounded-lg shadow-xl max-w-full h-auto"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">
            How Labour Connect Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="feature-card">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Search className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2 text-center">Search</h3>
                <p className="text-blue-600 text-center">
                  Search for jobs or workers based on skills, location, and availability.
                </p>
              </CardContent>
            </Card>
            
            <Card className="feature-card">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2 text-center">Connect</h3>
                <p className="text-blue-600 text-center">
                  Connect directly with employers or workers without intermediaries.
                </p>
              </CardContent>
            </Card>
            
            <Card className="feature-card">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <CheckCircle className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2 text-center">Hire</h3>
                <p className="text-blue-600 text-center">
                  Complete the hiring process securely through our platform.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">
            Popular Categories
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building, name: "Construction" },
              { icon: Briefcase, name: "Factory Work" },
              { icon: Users, name: "Hospitality" },
              { icon: Building, name: "Warehousing" }
            ].map((category, index) => (
              <Button 
                key={index}
                variant="outline" 
                className="category-button"
              >
                <category.icon className="h-6 w-6 text-blue-600" />
                <span className="text-blue-700 font-medium">{category.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Find Your Perfect Match?
          </h2>
          <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of employers and job seekers who have found success with Labour Connect.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link to="/register">I'm Looking to Hire</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
              <Link to="/register">I'm Looking for Work</Link>
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
