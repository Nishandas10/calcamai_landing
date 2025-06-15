"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Camera, BarChart3, Zap, Award, Star } from "lucide-react"
import { Menu, X, Smartphone } from "lucide-react"
import { useState } from "react"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <Smartphone className="h-5 w-5 text-black" />
              </div>
              <span className="text-xl font-bold">CalCam AI</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-green-500 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-300 hover:text-green-500 transition-colors">
                How It Works
              </a>
              <a href="#testimonials" className="text-gray-300 hover:text-green-500 transition-colors">
                Reviews
              </a>
              <Button
                className="bg-green-500 hover:bg-green-600 text-white"
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.Five_Point_AI_Labs.CalTrackAI",
                    "_blank",
                  )
                }
              >
                Download App
              </Button>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-zinc-800">
              <div className="flex flex-col space-y-4">
                <a
                  href="#features"
                  className="text-gray-300 hover:text-green-500 transition-colors px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  className="text-gray-300 hover:text-green-500 transition-colors px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-300 hover:text-green-500 transition-colors px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Reviews
                </a>
                <Button
                  className="bg-green-500 hover:bg-green-600 text-white w-full mt-4"
                  onClick={() =>
                    window.open(
                      "https://play.google.com/store/apps/details?id=com.Five_Point_AI_Labs.CalTrackAI",
                      "_blank",
                    )
                  }
                >
                  Download App
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col lg:flex-row items-center py-16 md:py-24">
            <div className="flex-1 space-y-6 lg:pr-12">
              <div className="inline-block rounded-lg bg-green-500/10 px-3 py-1 text-sm text-green-500">
                New: Food Recognition v2.0
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                The Smart <span className="text-green-500">AI Calorie Counter</span> App
              </h1>
              <p className="text-xl text-gray-400 md:w-[85%]">
                CalCam AI is the most advanced calorie counter app that uses AI to instantly identify food and count
                calories with just a photo. Transform your nutrition tracking experience today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 rounded-xl text-lg"
                  onClick={() =>
                    window.open(
                      "https://play.google.com/store/apps/details?id=com.Five_Point_AI_Labs.CalTrackAI",
                      "_blank",
                    )
                  }
                >
                  Download for Android
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400"></div>
            </div>
            <div className="flex-1 mt-10 lg:mt-0 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-green-500/20 border border-white/10">
                <img
                  src="/placeholder.svg?height=400&width=200"
                  alt="CalCam AI App Screenshot"
                  className="w-full max-w-[1000px] mx-auto"
                />
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-green-500/20 rounded-full blur-[100px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-zinc-950">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why CalCam AI is the Best <span className="text-green-500">Calorie Counter</span>
            </h2>
            <p className="text-gray-400 md:w-2/3 mx-auto">
              Our AI-powered calorie counter combines cutting-edge technology with intuitive design to make calorie
              counting effortless and accurate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Camera className="h-10 w-10 text-green-500" />}
              title="Instant Food Recognition"
              description="Take a photo of your meal and our AI calorie counter instantly identifies all food items and counts calories with 99% accuracy."
            />
            <FeatureCard
              icon={<BarChart3 className="h-10 w-10 text-green-500" />}
              title="Detailed Nutrition Insights"
              description="Get complete macro and micronutrient breakdowns with the most detailed calorie counter insights available."
            />
            <FeatureCard
              icon={<Zap className="h-10 w-10 text-green-500" />}
              title="Personalized Recommendations"
              description="Receive AI-powered suggestions from your personal calorie counter to optimize your diet based on your goals."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Our AI <span className="text-green-500">Calorie Counter</span> Works
            </h2>
            <p className="text-gray-400 md:w-2/3 mx-auto">
              Three simple steps to experience the future of calorie counting with CalCam AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              title="Snap a Photo"
              description="Take a quick picture of your food with the CalCam AI app."
            />
            <StepCard
              number="2"
              title="AI Analysis"
              description="Our advanced AI calorie counter identifies food items and calculates nutritional content instantly."
            />
            <StepCard
              number="3"
              title="Track Progress"
              description="Review calorie counter insights and track your nutrition journey over time with detailed analytics."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 md:py-24 bg-zinc-950">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Users Love Our <span className="text-green-500">Calorie Counter</span>
            </h2>
            <p className="text-gray-400 md:w-2/3 mx-auto">
              See what our users are saying about their CalCam AI experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="CalCam AI is the best calorie counter I've ever used! It's so easy and incredibly accurate for counting calories."
              author="Sarah K."
              role="Fitness Enthusiast"
              rating={5}
            />
            <TestimonialCard
              quote="As a nutritionist, I recommend this calorie counter to all my clients. The detailed breakdown is exactly what they need for effective calorie counting."
              author="Dr. Michael Chen"
              role="Registered Dietitian"
              rating={5}
            />
            <TestimonialCard
              quote="I've tried many calorie counter apps, but CalCam AI is by far the most convenient. Just snap and count calories instantly!"
              author="James Wilson"
              role="Weight Loss Journey"
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[150px]" />
        <div className="container px-4 md:px-6 mx-auto">
          <div className="bg-zinc-900 border border-green-500/20 rounded-3xl p-8 md:p-12 shadow-xl shadow-green-500/5">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Ready to revolutionize your <span className="text-green-500">calorie counting?</span>
                </h2>
                <p className="text-gray-400">
                  Join thousands of satisfied users who have made CalCam AI their go-to calorie counter for a healthier
                  lifestyle.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 rounded-xl text-lg"
                    onClick={() =>
                      window.open(
                        "https://play.google.com/store/apps/details?id=com.Five_Point_AI_Labs.CalTrackAI",
                        "_blank",
                      )
                    }
                  >
                    Download CalCam AI
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative">
                  <img
                    src="/placeholder.svg?height=400&width=200"
                    alt="CalCam AI App Demo"
                    className="rounded-xl shadow-lg"
                  />
                  <div className="absolute -right-4 -bottom-4 bg-green-500 text-black font-bold rounded-full p-4">
                    <Award className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-zinc-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 CalCam AI. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-green-500">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Component for feature cards
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

// Component for step cards
interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="relative">
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500/10 text-green-500 font-bold text-xl mb-4">
          {number}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
      {number !== "3" && <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-green-500/30"></div>}
    </div>
  )
}

// Component for testimonial cards
interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

function TestimonialCard({ quote, author, role, rating }: TestimonialCardProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-green-500 text-green-500" />
        ))}
      </div>
      <p className="text-gray-300 mb-6">"{quote}"</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-gray-400 text-sm">{role}</p>
      </div>
    </div>
  )
}
