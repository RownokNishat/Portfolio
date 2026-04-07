"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../../component/Header";
import SkillBridgeThumbnail from "../../assests/projectSS/skillbridge-landing.png";

const SkillBridge = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const features = {
    student: [
      "Browse and search tutors by subject, category, price, and rating",
      "View detailed tutor profiles with qualifications and availability",
      "Book tutoring sessions with date and time selection",
      "Leave star ratings and written reviews after completed sessions",
      "Track upcoming and past booking history",
      "Manage personal profile and preferences",
    ],
    tutor: [
      "Register and create a detailed tutor profile with subjects and bio",
      "Set weekly availability with day and time slot management",
      "View and manage incoming booking requests",
      "Track session history and earnings overview",
      "Receive and respond to student reviews",
      "Update profile, subjects, and hourly rate",
    ],
    admin: [
      "Manage all registered users (ban / unban students and tutors)",
      "Oversee and manage subject categories",
      "View all bookings across the platform",
      "Monitor platform activity via admin dashboard",
    ],
  };

  const techStack = {
    frontend: [
      { name: "Next.js 15", version: "App Router" },
      { name: "TypeScript", version: "Type-Safe" },
      { name: "Tailwind CSS", version: "Styling" },
      { name: "Radix UI", version: "Components" },
      { name: "Framer Motion", version: "Animations" },
      { name: "TanStack Form", version: "Form Handling" },
      { name: "Zod", version: "Validation" },
      { name: "Better-Auth", version: "Client Auth" },
    ],
    backend: [
      { name: "Node.js", version: "Runtime" },
      { name: "Express 5", version: "REST API" },
      { name: "PostgreSQL", version: "Database" },
      { name: "Prisma ORM", version: "Data Layer" },
      { name: "Better-Auth", version: "Server Auth" },
      { name: "Nodemailer", version: "Email Service" },
      { name: "Zod", version: "Validation" },
      { name: "JWT", version: "Token Auth" },
    ],
  };

  const keyHighlights = [
    {
      title: "Role-Based Dashboards",
      description: "Separate, purpose-built dashboards for Student, Tutor, and Admin with protected routes",
      icon: "👥",
    },
    {
      title: "Smart Tutor Search",
      description: "Filter tutors by subject, category, price range, and average rating in real time",
      icon: "🔍",
    },
    {
      title: "Booking System",
      description: "Session booking with availability-aware time slot selection and booking history",
      icon: "📅",
    },
    {
      title: "Reviews & Ratings",
      description: "Students can rate and review tutors after sessions, with live average rating updates",
      icon: "⭐",
    },
    {
      title: "Availability Management",
      description: "Tutors set their weekly schedule with granular day and time slot control",
      icon: "🗓️",
    },
    {
      title: "Secure Auth",
      description: "Better-Auth powered authentication with cookie-based sessions and CORS handling",
      icon: "🔒",
    },
  ];

  const demoCredentials = [
    { role: "Student", email: "student@test.com", password: "password123", icon: "🎓" },
    { role: "Tutor", email: "tutor@test.com", password: "password123", icon: "👨‍🏫" },
    { role: "Admin", email: "admin@test.com", password: "password123", icon: "🛡️" },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-[#FBFBFB] dark:bg-[#252734] tracking-wider font-mon">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link href="/#projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mb-8 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-lg"
            >
              ← Back to Projects
            </motion.button>
          </Link>

          {/* Header Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            {/* Hero Banner */}
            <div className="bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl border-2 border-indigo-200 dark:border-indigo-800 mb-8">
              <div className="text-center">
                {/* Project Type Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block mb-4"
                >
                  <span className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-full text-sm font-[600] shadow-lg">
                    ⭐ Featured Full-Stack Project
                  </span>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-[700] tracking-wider mb-4"
                >
                  <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-700 bg-clip-text text-transparent">
                    SkillBridge
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-3 font-[600] tracking-wide"
                >
                  Connect with Expert Tutors, Learn Anything
                </motion.p>

                {/* Stack Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md border border-gray-200 dark:border-gray-700 mb-6"
                >
                  <span className="text-green-600 dark:text-green-400 font-[600]">●</span>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    Next.js 15 + Express 5 + PostgreSQL
                  </span>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap justify-center gap-4 mb-8"
                >
                  <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                    <span className="text-2xl">👥</span>
                    <div className="text-left">
                      <div className="text-sm text-gray-500 dark:text-gray-400">User Roles</div>
                      <div className="font-[600] tracking-wide text-gray-900 dark:text-white">3 Roles</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                    <span className="text-2xl">🛠️</span>
                    <div className="text-left">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Developer</div>
                      <div className="font-[600] tracking-wide text-gray-900 dark:text-white">Solo Full-Stack</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                    <span className="text-2xl">📊</span>
                    <div className="text-left">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Status</div>
                      <div className="font-[600] tracking-wide text-green-600 dark:text-green-400">Live & Active</div>
                    </div>
                  </div>
                </motion.div>

                {/* Technology Badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-wrap justify-center gap-3 mb-8"
                >
                  {[
                    { label: "Next.js 15", color: "from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600" },
                    { label: "TypeScript", color: "from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-700" },
                    { label: "PostgreSQL", color: "from-indigo-100 to-indigo-200 dark:from-indigo-900 dark:to-indigo-800 text-indigo-800 dark:text-indigo-200 border-indigo-300 dark:border-indigo-700" },
                    { label: "Prisma ORM", color: "from-violet-100 to-violet-200 dark:from-violet-900 dark:to-violet-800 text-violet-800 dark:text-violet-200 border-violet-300 dark:border-violet-700" },
                    { label: "Express 5", color: "from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 text-green-800 dark:text-green-200 border-green-300 dark:border-green-700" },
                    { label: "Tailwind CSS", color: "from-cyan-100 to-cyan-200 dark:from-cyan-900 dark:to-cyan-800 text-cyan-800 dark:text-cyan-200 border-cyan-300 dark:border-cyan-700" },
                  ].map((badge) => (
                    <span
                      key={badge.label}
                      className={`px-5 py-2.5 bg-gradient-to-r ${badge.color} rounded-full text-sm font-[600] shadow-md border-2`}
                    >
                      {badge.label}
                    </span>
                  ))}
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-wrap justify-center gap-4"
                >
                  <a
                    href="https://skillbridge-frontend-dun.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)" }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white rounded-xl font-[600] text-lg shadow-xl transition-all duration-300 flex items-center gap-2"
                    >
                      <span className="text-2xl">🌐</span>
                      View Live Demo
                    </motion.button>
                  </a>
                  <a
                    href="https://github.com/RownokNishat/skillbridge-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white rounded-xl font-[600] text-lg shadow-xl transition-all duration-300 flex items-center gap-2"
                    >
                      <span className="text-2xl">💻</span>
                      View Source Code
                    </motion.button>
                  </a>
                </motion.div>

                {/* Additional Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="mt-6 text-sm text-gray-600 dark:text-gray-400"
                >
                  <p className="flex items-center justify-center gap-2 flex-wrap">
                    <span className="flex items-center gap-1">
                      <span className="text-yellow-500">⭐</span>
                      Production-Ready
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <span className="text-green-500">✓</span>
                      Fully Responsive
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <span className="text-indigo-500">🔒</span>
                      Role-Based Auth
                    </span>
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src={SkillBridgeThumbnail}
              alt="SkillBridge - Tutoring Platform"
              width={1400}
              height={800}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap gap-4 mb-8 border-b-2 border-gray-300 dark:border-gray-700">
            {["overview", "features", "tech", "demo"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-[600] capitalize transition-colors ${
                  activeTab === tab
                    ? "border-b-4 border-indigo-600 text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20"
                    : "text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                } rounded-t-lg`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.3 }}
          >
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-8">
                <section className="bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-3xl font-[600] mb-4 text-gray-900 dark:text-white">
                    🎯 Overview
                  </h2>
                  <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed mb-6">
                    SkillBridge is a full-stack tutoring platform that connects students with expert
                    tutors across a wide range of subjects. Students can browse tutor profiles, filter
                    by subject or price, book sessions, and leave reviews. Tutors can manage their
                    availability, track sessions, and view ratings — all within a role-based dashboard
                    system built for a seamless learning experience.
                  </p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {keyHighlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-500"
                      >
                        <div className="text-4xl mb-3">{highlight.icon}</div>
                        <h3 className="text-lg font-[600] tracking-wide mb-2 text-gray-900 dark:text-white">
                          {highlight.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">{highlight.description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-3xl font-[600] mb-6 text-gray-900 dark:text-white">
                    🌟 Project Stats
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                      { value: "3", label: "User Roles", color: "text-indigo-600 dark:text-indigo-400", border: "border-indigo-200 dark:border-indigo-700" },
                      { value: "2", label: "Repos", color: "text-violet-600 dark:text-violet-400", border: "border-violet-200 dark:border-violet-700" },
                      { value: "16+", label: "Tech Used", color: "text-purple-600 dark:text-purple-400", border: "border-purple-200 dark:border-purple-700" },
                      { value: "Solo", label: "Developer", color: "text-blue-600 dark:text-blue-400", border: "border-blue-200 dark:border-blue-700" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className={`text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-2 ${stat.border} hover:shadow-xl transition-shadow`}
                      >
                        <div className={`text-3xl md:text-4xl font-[700] tracking-wide ${stat.color} mb-2`}>
                          {stat.value}
                        </div>
                        <div className="text-gray-800 dark:text-gray-300 font-[500] tracking-wide">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {/* Features Tab */}
            {activeTab === "features" && (
              <div className="space-y-8">
                {[
                  { role: "student", label: "Student Features", icon: "🎓", color: "indigo" },
                  { role: "tutor", label: "Tutor Features", icon: "👨‍🏫", color: "violet" },
                  { role: "admin", label: "Admin Features", icon: "🛡️", color: "purple" },
                ].map(({ role, label, icon, color }) => (
                  <section
                    key={role}
                    className={`bg-gradient-to-br from-${color}-50 to-${color}-100/50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl border border-${color}-200 dark:border-${color}-800`}
                  >
                    <h2 className={`text-2xl font-[600] mb-4 text-${color}-700 dark:text-${color}-400`}>
                      {icon} {label}
                    </h2>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {features[role].map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className={`mt-1 text-${color}-500 font-bold`}>✓</span>
                          <span className="text-gray-800 dark:text-gray-200">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            )}

            {/* Tech Tab */}
            {activeTab === "tech" && (
              <div className="space-y-8">
                {[
                  { key: "frontend", label: "Frontend Stack", icon: "🖥️", color: "indigo" },
                  { key: "backend", label: "Backend Stack", icon: "⚙️", color: "violet" },
                ].map(({ key, label, icon, color }) => (
                  <section
                    key={key}
                    className="bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
                  >
                    <h2 className="text-2xl font-[600] mb-6 text-gray-900 dark:text-white">
                      {icon} {label}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {techStack[key].map((tech, i) => (
                        <div
                          key={i}
                          className={`bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border-2 border-${color}-100 dark:border-${color}-900 hover:border-${color}-400 dark:hover:border-${color}-500 transition-all hover:shadow-lg`}
                        >
                          <div className={`font-[600] text-${color}-700 dark:text-${color}-300 mb-1`}>
                            {tech.name}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{tech.version}</div>
                        </div>
                      ))}
                    </div>
                  </section>
                ))}

                <section className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-2xl font-[600] mb-6 text-gray-900 dark:text-white">
                    🔗 Repository Links
                  </h2>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://github.com/RownokNishat/skillbridge-frontend"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-md font-[600] transition-colors shadow-lg flex items-center gap-2"
                      >
                        💻 Frontend Repo (Client)
                      </motion.button>
                    </a>
                    <a
                      href="https://skillbridge-frontend-dun.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-md font-[600] transition-colors shadow-lg flex items-center gap-2"
                      >
                        🌐 Live Frontend (Vercel)
                      </motion.button>
                    </a>
                  </div>
                </section>
              </div>
            )}

            {/* Demo Tab */}
            {activeTab === "demo" && (
              <div className="space-y-8">
                <section className="bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-3xl font-[600] mb-6 text-gray-900 dark:text-white">
                    🔑 Demo Credentials
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                    Use the following credentials to explore the platform as different user roles:
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    {demoCredentials.map((cred, i) => (
                      <div
                        key={i}
                        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-indigo-200 dark:border-indigo-700"
                      >
                        <div className="text-4xl mb-3">{cred.icon}</div>
                        <h3 className="text-xl font-[700] text-indigo-700 dark:text-indigo-300 mb-4">
                          {cred.role}
                        </h3>
                        <div className="space-y-2">
                          <div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Email</span>
                            <p className="font-mono text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded mt-1 text-gray-800 dark:text-gray-200">
                              {cred.email}
                            </p>
                          </div>
                          <div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Password</span>
                            <p className="font-mono text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded mt-1 text-gray-800 dark:text-gray-200">
                              {cred.password}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-3xl font-[600] mb-6 text-gray-900 dark:text-white">
                    🚀 How to Use SkillBridge
                  </h2>
                  <div className="space-y-4">
                    {[
                      { step: "1", title: "Browse Tutors", desc: "Search and filter tutors by subject, category, price, and rating from the home page." },
                      { step: "2", title: "View Profile", desc: "Click a tutor card to view their full profile, subjects, hourly rate, and availability." },
                      { step: "3", title: "Book a Session", desc: "Select an available date and time slot, then confirm your booking." },
                      { step: "4", title: "Leave a Review", desc: "After your session is complete, rate your tutor and leave a written review." },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-4 items-start">
                        <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">
                          {item.step}
                        </span>
                        <div>
                          <strong className="text-indigo-700 dark:text-indigo-300">{item.title}:</strong>
                          <span className="text-gray-800 dark:text-gray-200 ml-2">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <a
                    href="https://skillbridge-frontend-dun.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white rounded-md font-[600] transition-colors shadow-lg"
                    >
                      🌐 Launch Application
                    </motion.button>
                  </a>
                </section>
              </div>
            )}
          </motion.div>

          {/* Challenges & Future Improvements */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Challenges Faced */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-red-100 dark:border-red-900">
              <h2 className="text-2xl font-[700] text-red-600 dark:text-red-400 mb-4 flex items-center gap-2">
                ⚠️ Challenges Faced
              </h2>
              <ul className="space-y-3">
                {[
                  {
                    title: "Cross-Origin Auth with Better-Auth",
                    desc: "Integrating Better-Auth across separate frontend and backend origins required careful cookie-based session configuration and CORS credential forwarding, which caused silent auth failures during development.",
                  },
                  {
                    title: "Rating Calculation Consistency",
                    desc: "The average rating logic needed multiple iterations — early implementations caused stale averages when reviews were added or deleted, requiring atomic DB queries and careful cache invalidation.",
                  },
                  {
                    title: "Multi-Step Tutor Onboarding",
                    desc: "Managing the tutor registration flow (sign up → complete profile → set availability) as a multi-step state transition with proper redirects and incomplete-profile guards was tricky to implement cleanly.",
                  },
                  {
                    title: "Availability Slot Conflict Detection",
                    desc: "Preventing double-bookings when students book overlapping time slots required server-side validation with Prisma transactions to check availability atomically before confirming a session.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1 w-2 h-2 bg-red-500 rounded-full shrink-0"></span>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      <strong className="text-red-600 dark:text-red-400">{item.title}:</strong>{" "}
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Future Improvements */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-green-100 dark:border-green-900">
              <h2 className="text-2xl font-[700] text-green-600 dark:text-green-400 mb-4 flex items-center gap-2">
                🚀 Future Improvements
              </h2>
              <ul className="space-y-3">
                {[
                  {
                    title: "Real-Time Notifications",
                    desc: "Integrate WebSocket or Server-Sent Events (SSE) to push live booking confirmations, cancellations, and session reminders to students and tutors without needing to refresh.",
                  },
                  {
                    title: "Payment Gateway",
                    desc: "Integrate Stripe or SSLCommerz to support online consultation fee payments — currently the platform is cash/offline only, which limits scale.",
                  },
                  {
                    title: "In-App Messaging",
                    desc: "Add a real-time chat system so students and tutors can communicate, clarify session details, and share resources before and after bookings.",
                  },
                  {
                    title: "Video Consultation",
                    desc: "Embed WebRTC-based video calling so tutors and students can conduct sessions directly within the platform, removing the need for external tools.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1 w-2 h-2 bg-green-500 rounded-full shrink-0"></span>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      <strong className="text-green-600 dark:text-green-400">{item.title}:</strong>{" "}
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Footer CTA */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-800 dark:to-violet-800 rounded-xl p-8 text-center shadow-2xl border-2 border-indigo-300 dark:border-indigo-700"
          >
            <h2 className="text-3xl font-[600] mb-4 text-white">
              Interested in This Project?
            </h2>
            <p className="text-gray-100 dark:text-gray-200 mb-6 text-lg">
              Check out the live demo or explore the source code on GitHub
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://skillbridge-frontend-dun.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white text-indigo-700 hover:bg-gray-100 rounded-md font-[600] transition-colors shadow-lg"
                >
                  View Live Demo
                </motion.button>
              </a>
              <Link href="/#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white text-indigo-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 rounded-md font-[600] transition-colors shadow-lg"
                >
                  Contact Me
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SkillBridge;
