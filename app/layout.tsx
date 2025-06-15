import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CalCam AI - Smart Calorie Counter App | AI-Powered Nutrition Tracking",
  description:
    "CalCam AI is the most advanced calorie counter app that uses AI to instantly count calories from photos. Download the best calorie counter for Android and transform your nutrition tracking experience.",
  keywords:
    "calorie counter, calorie counting app, AI calorie counter, food tracking app, nutrition tracker, calorie counter app, count calories, calorie tracking, food recognition app, diet app",
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: "CalCam AI - The Smart Calorie Counter App",
    description:
      "Revolutionary AI-powered calorie counter that identifies food and counts calories instantly from photos. The most accurate calorie counter app available.",
    type: "website",
    url: "https://calcamai.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "CalCam AI - Smart Calorie Counter App",
    description:
      "The most advanced AI calorie counter app. Count calories instantly with photo recognition technology.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
