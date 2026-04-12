"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../../component/Header";
import CineTubeThumbnail from "../../assests/projectSS/cinetube thumbnail.png";
import CineTubeFeatured from "../../assests/projectSS/cinetube featured.png";
import CineTubeAdminDash from "../../assests/projectSS/cinetube admin dashboard.png";
import CineTubeDetailsPage from "../../assests/projectSS/cinetube details page.png";
import CineTubeDetails from "../../assests/projectSS/cinetube details.png";

const CineTube = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const features = {
    user: [
      "Browse and search movies & series with multi-filter support",
      "View detailed title pages: cast, director, genres, trailers",
      "Add titles to a personal watchlist",
      "Write and submit star-rated reviews",
      "Subscribe to a plan (Free / Premium)",
      "Open a real-time support chat with admins",
      "Use CineBot AI assistant for platform-related questions",
      "View closed and resolved chat history in user dashboard",
    ],
    admin: [
      "Everything a User can do on the platform",
      "View and manage all user support chat sessions",
      "Reply to open user chats in real time",
      "Close and resolve support tickets",
      "Manage content — add, edit, remove movies, series, and episodes",
      "View full user list and activity logs",
    ],
    superAdmin: [
      "Everything Admin can do",
      "Create and manage admin accounts",
      "Full platform control and configuration",
      "Monitor all platform-level activity",
    ],
  };

  const techStack = {
    frontend: [
      { name: "Next.js 15", version: "App Router, SSR" },
      { name: "Tailwind CSS v4", version: "Utility Styling" },
      { name: "shadcn/ui", version: "Reusable Components" },
      { name: "Supabase JS", version: "Realtime Subscriptions" },
      { name: "Vercel", version: "Deployment" },
    ],
    backend: [
      { name: "Express.js 5", version: "REST API" },
      { name: "PostgreSQL", version: "Supabase Database" },
      { name: "Prisma 7", version: "ORM + pg Adapter" },
      { name: "Groq API", version: "Llama 3.3 70B (CineBot)" },
      { name: "Supabase Realtime", version: "Live Chat" },
      { name: "JWT", version: "Auth & Role Guards" },
      { name: "Vercel Serverless", version: "Deployment" },
    ],
  };

  const keyHighlights = [
    {
      title: "Real-Time Support Chat",
      description:
        "Users and admins exchange messages instantly using Supabase Realtime — no polling, no page refresh needed. Changes in the database broadcast live to all subscribers.",
      icon: "💬",
    },
    {
      title: "CineBot AI Assistant",
      description:
        "A floating AI chat widget powered by Groq's Llama 3.3 70B model. Answers platform-specific questions, understands CineTube's features, and stays scoped to relevant topics.",
      icon: "🤖",
    },
    {
      title: "Role-Based Access Control",
      description:
        "Three distinct roles (User, Admin, Super Admin) with separate dashboards, protected routes, and permission-gated actions enforced on both frontend and backend.",
      icon: "🔐",
    },
    {
      title: "Content Streaming Platform",
      description:
        "Full movie and series browsing with metadata, genres, cast, trailers, episode lists, and user reviews with star ratings.",
      icon: "🎬",
    },
    {
      title: "Admin Chat Management",
      description:
        "Dedicated admin dashboard for managing all user support sessions — filter by open/closed, reply in real time, and close resolved tickets.",
      icon: "📋",
    },
    {
      title: "Serverless-Optimized Architecture",
      description:
        "Backend tuned for Vercel serverless: transaction pooler (port 6543), max 3 DB connections per instance, and URL-safe password encoding to prevent cold-start crashes.",
      icon: "⚡",
    },
  ];

  const demoCredentials = [
    {
      role: "Super Admin",
      email: "nishat@super-admin.com",
      password: "superAdmin123",
      icon: "👑",
    },
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
              className="mb-8 px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors shadow-lg"
            >
              ← Back to Projects
            </motion.button>
          </Link>

          {/* Hero Banner */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-2xl p-8 md:p-12 shadow-2xl border-2 border-blue-700 mb-8 relative overflow-hidden">
              {/* Background decorative glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.15),transparent_60%)] pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(99,102,241,0.1),transparent_60%)] pointer-events-none" />

              <div className="text-center relative z-10">
                {/* Project Type Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block mb-4"
                >
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-[600] shadow-lg">
                    🎬 Full-Stack Project
                  </span>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-[700] tracking-wider mb-4"
                >
                  <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent">
                    CineTube
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl text-gray-300 mb-3 font-[600] tracking-wide"
                >
                  A full-stack movie and series streaming platform with real-time support chat and an AI assistant.
                </motion.p>

                {/* Stack Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full shadow-md border border-white/20 mb-6"
                >
                  <span className="text-green-400 font-[600]">●</span>
                  <span className="text-gray-200 font-medium">
                    Next.js 15 + Express 5 + PostgreSQL + Supabase Realtime
                  </span>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap justify-center gap-4 mb-8"
                >
                  {[
                    { icon: "👥", label: "User Roles", value: "3 Roles" },
                    { icon: "🤖", label: "AI Model", value: "Llama 3.3 70B" },
                    { icon: "⚡", label: "Real-Time", value: "Supabase" },
                    { icon: "🛠️", label: "Developer", value: "Solo Full-Stack" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg shadow-md border border-white/20"
                    >
                      <span className="text-2xl">{stat.icon}</span>
                      <div className="text-left">
                        <div className="text-xs text-gray-400">{stat.label}</div>
                        <div className="font-[600] tracking-wide text-white">{stat.value}</div>
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Tech Badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-wrap justify-center gap-3 mb-8"
                >
                  {[
                    { label: "Next.js 15", color: "from-gray-700 to-gray-800 text-gray-100 border-gray-600" },
                    { label: "Tailwind CSS v4", color: "from-cyan-800 to-cyan-900 text-cyan-200 border-cyan-700" },
                    { label: "shadcn/ui", color: "from-slate-700 to-slate-800 text-slate-200 border-slate-600" },
                    { label: "Supabase Realtime", color: "from-green-800 to-green-900 text-green-200 border-green-700" },
                    { label: "Groq / Llama 3.3", color: "from-purple-800 to-purple-900 text-purple-200 border-purple-700" },
                    { label: "Prisma 7", color: "from-indigo-800 to-indigo-900 text-indigo-200 border-indigo-700" },
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
                    href="https://cine-tube-frontend.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)" }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-[600] text-lg shadow-xl transition-all duration-300 flex items-center gap-2"
                    >
                      <span className="text-2xl">🌐</span>
                      View Live Demo
                    </motion.button>
                  </a>
                  <a
                    href="https://github.com/RownokNishat/CineTube-Frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)" }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white rounded-xl font-[600] text-lg shadow-xl transition-all duration-300 flex items-center gap-2 border border-white/20"
                    >
                      <span className="text-2xl">💻</span>
                      Frontend Repo
                    </motion.button>
                  </a>
                  <a
                    href="https://github.com/RownokNishat/cine-tube-be"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)" }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white rounded-xl font-[600] text-lg shadow-xl transition-all duration-300 flex items-center gap-2 border border-white/20"
                    >
                      <span className="text-2xl">⚙️</span>
                      Backend Repo
                    </motion.button>
                  </a>
                </motion.div>

                {/* Additional Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="mt-6 text-sm text-gray-400"
                >
                  <p className="flex items-center justify-center gap-2 flex-wrap">
                    <span className="flex items-center gap-1">
                      <span className="text-yellow-400">⭐</span>
                      Production-Ready
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <span className="text-green-400">✓</span>
                      Fully Responsive
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <span className="text-blue-400">🔒</span>
                      Role-Based Auth
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <span className="text-purple-400">🤖</span>
                      AI-Powered
                    </span>
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Main Screenshot */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 rounded-xl overflow-hidden shadow-2xl border-2 border-blue-900"
          >
            <Image
              src={CineTubeFeatured}
              alt="CineTube - Featured"
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
                    ? "border-b-4 border-blue-600 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
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
                <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-3xl font-[600] mb-4 text-gray-900 dark:text-white">
                    🎯 Overview
                  </h2>
                  <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed mb-6">
                    CineTube is a full-stack movie and series streaming platform built for discovering,
                    rating, and discussing content. Users can browse a rich catalog with metadata and
                    trailers, manage a personal watchlist, and submit reviews. What sets CineTube apart
                    is its real-time support chat — users can open a direct chat session with admins,
                    with messages broadcasting live via Supabase Realtime — and CineBot, an AI assistant
                    powered by Groq's Llama 3.3 70B that answers platform-specific questions.
                  </p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {keyHighlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500"
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

                {/* Screenshots Gallery */}
                <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-3xl font-[600] mb-6 text-gray-900 dark:text-white">
                    📸 Screenshots
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { src: CineTubeThumbnail, alt: "CineTube Thumbnail" },
                      { src: CineTubeAdminDash, alt: "Admin Dashboard" },
                      { src: CineTubeDetailsPage, alt: "Movie Details Page" },
                      { src: CineTubeDetails, alt: "Series Details" },
                    ].map((img, i) => (
                      <div key={i} className="rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={800}
                          height={500}
                          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <div className="px-3 py-2 bg-gray-50 dark:bg-gray-900 text-sm text-gray-600 dark:text-gray-400 font-[500]">
                          {img.alt}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-3xl font-[600] mb-6 text-gray-900 dark:text-white">
                    🌟 Project Stats
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                      { value: "3", label: "User Roles", color: "text-blue-600 dark:text-blue-400", border: "border-blue-200 dark:border-blue-700" },
                      { value: "2", label: "Repos", color: "text-indigo-600 dark:text-indigo-400", border: "border-indigo-200 dark:border-indigo-700" },
                      { value: "12+", label: "Tech Used", color: "text-purple-600 dark:text-purple-400", border: "border-purple-200 dark:border-purple-700" },
                      { value: "Solo", label: "Developer", color: "text-cyan-600 dark:text-cyan-400", border: "border-cyan-200 dark:border-cyan-700" },
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
                  { role: "user", label: "User Features", icon: "🎬", color: "blue" },
                  { role: "admin", label: "Admin Features", icon: "🛡️", color: "indigo" },
                  { role: "superAdmin", label: "Super Admin Features", icon: "👑", color: "purple" },
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
                  { key: "frontend", label: "Frontend Stack", icon: "🖥️", color: "blue" },
                  { key: "backend", label: "Backend Stack", icon: "⚙️", color: "indigo" },
                ].map(({ key, label, icon, color }) => (
                  <section
                    key={key}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
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
                      href="https://github.com/RownokNishat/CineTube-Frontend"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-md font-[600] transition-colors shadow-lg flex items-center gap-2"
                      >
                        💻 Frontend Repo
                      </motion.button>
                    </a>
                    <a
                      href="https://github.com/RownokNishat/cine-tube-be"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-md font-[600] transition-colors shadow-lg flex items-center gap-2"
                      >
                        ⚙️ Backend Repo
                      </motion.button>
                    </a>
                    <a
                      href="https://cine-tube-frontend.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md font-[600] transition-colors shadow-lg flex items-center gap-2"
                      >
                        🌐 Live Demo (Vercel)
                      </motion.button>
                    </a>
                  </div>
                </section>
              </div>
            )}

            {/* Demo Tab */}
            {activeTab === "demo" && (
              <div className="space-y-8">
                <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-3xl font-[600] mb-6 text-gray-900 dark:text-white">
                    🔑 Demo Credentials
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                    Use the following credentials to explore the full platform with Super Admin access:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
                    {demoCredentials.map((cred, i) => (
                      <div
                        key={i}
                        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-blue-200 dark:border-blue-700 col-span-full md:col-span-1"
                      >
                        <div className="text-4xl mb-3">{cred.icon}</div>
                        <h3 className="text-xl font-[700] text-blue-700 dark:text-blue-300 mb-4">
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

                <section className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-3xl font-[600] mb-6 text-gray-900 dark:text-white">
                    🚀 How to Explore CineTube
                  </h2>
                  <div className="space-y-4">
                    {[
                      { step: "1", title: "Browse the Catalog", desc: "Use the search bar with filters for genre, platform, and release year to find movies and series." },
                      { step: "2", title: "View a Title", desc: "Click any movie or series card to see full details — director, cast, genres, trailers, and user reviews." },
                      { step: "3", title: "Try CineBot", desc: "Open the CineBot widget in the bottom corner and ask any question about the platform or available content." },
                      { step: "4", title: "Open Support Chat", desc: "Start a real-time chat session with an admin directly from your user dashboard." },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-4 items-start">
                        <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">
                          {item.step}
                        </span>
                        <div>
                          <strong className="text-blue-700 dark:text-blue-300">{item.title}:</strong>
                          <span className="text-gray-800 dark:text-gray-200 ml-2">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <a
                    href="https://cine-tube-frontend.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-md font-[600] transition-colors shadow-lg"
                    >
                      🌐 Launch CineTube
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
                    title: "Serverless Cold-Start DB Crashes",
                    desc: "Vercel serverless functions spin up fresh instances with no persistent connections. Configuring Prisma with the transaction pooler (port 6543), capping connections at 3, and URL-encoding special characters in the database password took significant debugging rounds to stabilize.",
                  },
                  {
                    title: "Supabase Realtime Subscription Lifecycle",
                    desc: "Managing WebSocket channel subscriptions across navigation events caused stale listeners and duplicate message delivery. Implementing proper cleanup on component unmount and channel deduplication logic was non-trivial.",
                  },
                  {
                    title: "Scoping the AI Assistant",
                    desc: "CineBot initially answered unrelated general knowledge questions. Fine-tuning the system prompt to keep the Groq model strictly scoped to CineTube features — while still being helpful — required multiple iterations of prompt engineering.",
                  },
                  {
                    title: "Role-Gated Route Architecture",
                    desc: "Enforcing three distinct permission tiers (User, Admin, Super Admin) consistently across both Next.js App Router middleware and Express route guards, without duplicating logic or creating security gaps, required a unified role-check pattern on both layers.",
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
                    title: "Streaming / Video Playback",
                    desc: "Integrate a real video player (HLS or DASH via Video.js or Plyr) so users can actually stream content within the platform rather than being directed to external sources.",
                  },
                  {
                    title: "Payment & Subscription Flow",
                    desc: "Add a full payment gateway (Stripe or SSLCommerz) to handle plan upgrades, premium content unlocking, and rental purchases with proper webhook-driven status updates.",
                  },
                  {
                    title: "Recommendation Engine",
                    desc: "Build a content recommendation system based on watchlist history, genre preferences, and review patterns — potentially extending CineBot to suggest personalized titles.",
                  },
                  {
                    title: "Push Notifications",
                    desc: "Add web push notifications for new chat messages, admin replies, and content updates so users are alerted even when not actively on the platform.",
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
            className="mt-16 bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-blue-900 dark:to-indigo-900 rounded-xl p-8 text-center shadow-2xl border-2 border-blue-500 dark:border-blue-700"
          >
            <h2 className="text-3xl font-[600] mb-4 text-white">
              Interested in This Project?
            </h2>
            <p className="text-gray-100 mb-6 text-lg">
              Check out the live demo or explore the source code on GitHub
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://cine-tube-frontend.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white text-blue-700 hover:bg-gray-100 rounded-md font-[600] transition-colors shadow-lg"
                >
                  View Live Demo
                </motion.button>
              </a>
              <Link href="/#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-white text-white hover:bg-white/10 rounded-md font-[600] transition-colors shadow-lg"
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

export default CineTube;
