"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Car, Bike, Users, Globe, Bell, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg" style={{ backgroundColor: "#3674b5" }}>
            <Car className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-slate-900">rentarenta.id</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#features"
            className="text-sm font-medium transition-colors"
            style={{ "--hover-color": "#3674b5" }}
            onMouseEnter={(e) => (e.target.style.color = "#3674b5")}
            onMouseLeave={(e) => (e.target.style.color = "")}
          >
            Features
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium transition-colors"
            style={{ "--hover-color": "#3674b5" }}
            onMouseEnter={(e) => (e.target.style.color = "#3674b5")}
            onMouseLeave={(e) => (e.target.style.color = "")}
          >
            About
          </Link>
          <Link
            href="#notify"
            className="text-sm font-medium transition-colors"
            style={{ "--hover-color": "#3674b5" }}
            onMouseEnter={(e) => (e.target.style.color = "#3674b5")}
            onMouseLeave={(e) => (e.target.style.color = "")}
          >
            Get Notified
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div
                className="inline-flex items-center rounded-full border px-4 py-2 text-sm border-blue-200"
                style={{ backgroundColor: "#3674b5", color: "white", opacity: 0.9 }}
              >
                <Bell className="w-4 h-4 mr-2" />
                Coming Soon
              </div>

              <div className="space-y-4 max-w-4xl">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-slate-900">
                  The Future of
                  <span style={{ color: "#3674b5" }}> Rental Business</span>
                  <br />
                  is Here
                </h1>
                <p className="mx-auto max-w-[700px] text-slate-600 md:text-xl lg:text-2xl">
                  rentarenta.id is the ultimate platform for car and motorcycle rental businesses to showcase their
                  fleet, manage bookings, and grow their customer base.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                <div className="flex-1">
                  <Input type="email" placeholder="Enter your email address" className="h-12 text-base" />
                </div>
                <Button
                  size="lg"
                  className="h-12 px-8 text-white transition-colors"
                  style={{ backgroundColor: "#3674b5" }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#2a5a94")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "#3674b5")}
                >
                  Get Early Access
                </Button>
              </div>

              <p className="text-sm text-slate-500">Join 500+ rental businesses already on our waitlist</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900 mb-4">
                Why Choose rentarenta.id?
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Everything you need to take your rental business online and reach more customers
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-lg mb-4"
                    style={{ backgroundColor: "#3674b5", opacity: 0.1 }}
                  >
                    <Car className="h-6 w-6" style={{ color: "#3674b5" }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Car Rentals</h3>
                  <p className="text-slate-600">
                    Showcase your car fleet with detailed specifications, pricing, and availability calendar.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-lg mb-4"
                    style={{ backgroundColor: "#3674b5", opacity: 0.1 }}
                  >
                    <Bike className="h-6 w-6" style={{ color: "#3674b5" }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Motorcycle Rentals</h3>
                  <p className="text-slate-600">
                    List your motorcycles and scooters with photos, features, and rental terms.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-lg mb-4"
                    style={{ backgroundColor: "#3674b5", opacity: 0.1 }}
                  >
                    <Users className="h-6 w-6" style={{ color: "#3674b5" }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Customer Management</h3>
                  <p className="text-slate-600">
                    Manage bookings, customer communications, and reviews all in one place.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-lg mb-4"
                    style={{ backgroundColor: "#3674b5", opacity: 0.1 }}
                  >
                    <Globe className="h-6 w-6" style={{ color: "#3674b5" }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Online Presence</h3>
                  <p className="text-slate-600">Get discovered by customers searching for rentals in your area.</p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-lg mb-4"
                    style={{ backgroundColor: "#3674b5", opacity: 0.1 }}
                  >
                    <CheckCircle className="h-6 w-6" style={{ color: "#3674b5" }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Easy Setup</h3>
                  <p className="text-slate-600">
                    Get your rental business online in minutes with our intuitive setup process.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-lg mb-4"
                    style={{ backgroundColor: "#3674b5", opacity: 0.1 }}
                  >
                    <Bell className="h-6 w-6" style={{ color: "#3674b5" }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Smart Notifications</h3>
                  <p className="text-slate-600">
                    Stay updated with booking alerts, payment notifications, and customer messages.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div
                  className="inline-flex items-center rounded-full border px-4 py-2 text-sm border-blue-200"
                  style={{ backgroundColor: "#f0f4ff", color: "#3674b5" }}
                >
                  About rentarenta.id
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                  Empowering Indonesian Rental Businesses
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  We understand the challenges faced by rental businesses in Indonesia. From managing inventory to
                  reaching customers, rentarenta.id is designed to solve these problems with a comprehensive platform
                  that's easy to use and affordable for businesses of all sizes.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5" style={{ color: "#3674b5" }} />
                    <span className="text-slate-700">Built specifically for Indonesian market</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5" style={{ color: "#3674b5" }} />
                    <span className="text-slate-700">Support for Bahasa Indonesia</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5" style={{ color: "#3674b5" }} />
                    <span className="text-slate-700">Local payment methods integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5" style={{ color: "#3674b5" }} />
                    <span className="text-slate-700">Mobile-first design for Indonesian users</span>
                  </div>
                </div>
              </div>
              <div className="lg:order-first">
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-2xl transform rotate-3"
                    style={{ background: "linear-gradient(to right, #5a8fd4, #3674b5)" }}
                  ></div>
                  <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold" style={{ color: "#3674b5" }}>
                          500+
                        </div>
                        <div className="text-sm text-slate-600">Businesses Waiting</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold" style={{ color: "#3674b5" }}>
                          25+
                        </div>
                        <div className="text-sm text-slate-600">Cities Ready</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold" style={{ color: "#3674b5" }}>
                          100%
                        </div>
                        <div className="text-sm text-slate-600">Mobile Optimized</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold" style={{ color: "#3674b5" }}>
                          24/7
                        </div>
                        <div className="text-sm text-slate-600">Support Ready</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="notify" className="w-full py-12 md:py-24 lg:py-32" style={{ backgroundColor: "#3674b5" }}>
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Be the First to Transform Your Rental Business
                </h2>
                <p className="text-blue-100 text-lg md:text-xl">
                  Join our exclusive early access program and get 3 months free when we launch. Limited spots available!
                </p>
              </div>

              <div className="w-full max-w-md space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Your business email"
                    className="flex-1 h-12 bg-white border-white text-slate-900 placeholder:text-slate-500"
                  />
                  <Button
                    size="lg"
                    variant="secondary"
                    className="h-12 px-8 bg-white hover:bg-slate-100 transition-colors"
                    style={{ color: "#3674b5" }}
                  >
                    Get Early Access
                  </Button>
                </div>
                <p className="text-blue-100 text-sm">{"No spam, just updates on our launch. Unsubscribe anytime."}</p>
              </div>

              <div className="flex items-center space-x-6 text-blue-100">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span className="text-sm">Free Setup</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span className="text-sm">3 Months Free</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span className="text-sm">Priority Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="container px-4 md:px-6 py-8 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-6 h-6 rounded" style={{ backgroundColor: "#3674b5" }}>
                <Car className="h-4 w-4 text-white" />
              </div>
              <span className="font-semibold text-slate-900">rentarenta.id</span>
            </div>
            <p className="text-sm text-slate-600">
              © 2025 rentarenta.id. All rights reserved. Coming soon to transform rental businesses across Indonesia.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-sm text-slate-600 transition-colors"
                onMouseEnter={(e) => (e.target.style.color = "#3674b5")}
                onMouseLeave={(e) => (e.target.style.color = "")}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-slate-600 transition-colors"
                onMouseEnter={(e) => (e.target.style.color = "#3674b5")}
                onMouseLeave={(e) => (e.target.style.color = "")}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
