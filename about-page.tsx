"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Code,
  Terminal,
  Facebook,
  Instagram,
  MessageSquareText,
  LayoutGrid,
  Palette,
  Database,
  Package,
  Globe,
  Cloud,
  DollarSign,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

export default function AboutPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState([70])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("loadedmetadata", updateDuration)
    audio.addEventListener("ended", () => setIsPlaying(false))

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("loadedmetadata", updateDuration)
      audio.removeEventListener("ended", () => setIsPlaying(false))
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return

    audio.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (value: number[]) => {
    const audio = audioRef.current
    if (!audio) return

    const newVolume = value[0]
    audio.volume = newVolume / 100
    setVolume(value)
  }

  const handleSeek = (value: number[]) => {
    const audio = audioRef.current
    if (!audio) return

    audio.currentTime = value[0]
    setCurrentTime(value[0])
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const skills = [
    {
      icon: Code,
      title: "Core Languages",
      desc: "HTML, CSS, JavaScript, TypeScript",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: LayoutGrid,
      title: "Frontend Frameworks",
      desc: "React.js, Vue.js, Angular",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: Palette,
      title: "UI & Styling",
      desc: "Tailwind CSS, Bootstrap, Shadcn/UI, Material UI",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Terminal,
      title: "Backend Development",
      desc: "Node.js, PHP (Laravel), Go",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Database,
      title: "Database Management",
      desc: "MySQL, PostgreSQL, MongoDB",
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: Package,
      title: "Build Tools",
      desc: "Vite, Webpack",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "Hosting & Deployment",
      desc: "Vercel, Netlify, Cloudflare Pages",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      desc: "Docker, Linux, GitHub, Google Cloud",
      color: "from-red-500 to-orange-500",
    },
  ]

  const systemLogs = [
    { type: "INFO", message: "Initializing secure connection to remote server...", color: "text-green-400" },
    { type: "WARN", message: "Detected minor anomaly in network traffic. Monitoring...", color: "text-yellow-400" },
    { type: "DEBUG", message: "Compiling 'main.go' with optimization flags...", color: "text-blue-400" },
    { type: "INFO", message: "Database backup initiated. Progress: 75%...", color: "text-green-400" },
    { type: "ERROR", message: "Failed to resolve DNS for 'api.external.com'. Retrying...", color: "text-red-400" },
    { type: "INFO", message: "System health check passed. All services operational.", color: "text-green-400" },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <style>
        {`
          .cat-perch {
            position: absolute;
            z-index: 50;
            animation: catBreathe 3s ease-in-out infinite;
            cursor: pointer;
            transition: transform 0.3s ease;
          }

          .cat-perch:hover {
            transform: scale(1.1);
          }

          @keyframes catBreathe {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-3px); }
          }
        `}
      </style>

      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between p-8">
          <div className="flex items-center space-x-4">
            <div className="w-2 h-8 bg-gradient-to-b from-red-500 to-orange-500"></div>
            <span className="text-2xl font-bold tracking-wider">PORTFOLIO</span>
          </div>
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-8 py-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Profile, Music, System Log, Contact Me, USDT Balance */}
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg blur opacity-25"></div>
                <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-8">
                  <div className="flex items-start space-x-6">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-lg overflow-hidden border-2 border-gray-700">
                        <Image
                          src="/profile.jpg"
                          alt="Profile"
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                        <Terminal className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        TheRipperX
                      </h1>
                      <p className="text-gray-400 mb-4">Full Stack Developer • Online Entrepreneur</p>
                      <div className="flex space-x-2">
                        <div className="px-3 py-1 bg-red-500/20 border border-red-500/30 rounded text-red-400 text-sm">
                          ONLINE
                        </div>
                        <div className="px-3 py-1 bg-gray-800 border border-gray-700 rounded text-gray-400 text-sm">
                          AVAILABLE
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Cat on profile card - bottom right corner */}
                  <div className="cat-perch bottom-2 right-2">
                    <span className="text-2xl">🐱</span>
                  </div>
                </div>
              </div>
              {/* Music Player */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg blur opacity-25"></div>
                <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-lg overflow-hidden">
                        <Image
                          src="/drunk-text-cover.png"
                          alt="Drunk Text Album Cover"
                          width={48} // 12 * 4 = 48px
                          height={48} // 12 * 4 = 48px
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">NOW PLAYING</h3>
                        <p className="text-sm text-gray-400">drunk text</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        onClick={toggleMute}
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-white hover:bg-gray-800"
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </Button>
                      <div className="w-16">
                        <Slider value={volume} onValueChange={handleVolumeChange} max={100} step={1} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Slider
                      value={[currentTime]}
                      onValueChange={handleSeek}
                      max={duration || 100}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{formatTime(currentTime)}</span>
                      <Button
                        onClick={togglePlay}
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                      </Button>
                      <span className="text-sm text-gray-400">{formatTime(duration)}</span>
                    </div>
                  </div>
                  {/* Cat on music player - top left area */}
                  <div className="cat-perch top-2 left-2">
                    <span className="text-2xl">🐱</span>
                  </div>
                </div>
              </div>
              {/* System Log Section */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg blur opacity-25"></div>
                <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-orange-500"></div>
                    <h2 className="text-2xl font-bold">SYSTEM LOG</h2>
                  </div>
                  <div className="space-y-2 text-gray-300 text-sm font-mono max-h-48 overflow-y-auto custom-scrollbar">
                    {/* Custom Scrollbar Style */}
                    <style jsx>{`
                      .custom-scrollbar::-webkit-scrollbar {
                        width: 6px;
                      }
                      .custom-scrollbar::-webkit-scrollbar-track {
                        background: #333;
                        border-radius: 3px;
                      }
                      .custom-scrollbar::-webkit-scrollbar-thumb {
                        background: linear-gradient(to bottom, #ef4444, #f97316);
                        border-radius: 3px;
                      }
                      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                        background: linear-gradient(to bottom, #dc2626, #ea580c);
                      }
                    `}</style>
                    {systemLogs.map((log, index) => (
                      <p key={index} className={`${log.color}`}>
                        <span className="text-gray-500">[{new Date().toLocaleTimeString()}]</span>{" "}
                        <span className="font-bold">{log.type}:</span> {log.message}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              {/* Contact Section */}
              <div className="relative mt-6">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg blur opacity-25"></div>
                <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-orange-500"></div>
                    <h2 className="text-2xl font-bold">CONTACT ME</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                      <Facebook className="w-6 h-6 text-blue-500" />
                      <span className="text-gray-300">......</span>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                      <Instagram className="w-6 h-6 text-pink-500" />
                      <span className="text-gray-300">......</span>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700 sm:col-span-2">
                      <MessageSquareText className="w-6 h-6 text-green-500" />
                      <span className="text-gray-300">......</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* USDT Balance Section */}
              <div className="relative mt-6">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg blur opacity-25"></div>
                <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-orange-500"></div>
                    <h2 className="text-2xl font-bold">USDT BALANCE</h2>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                    <div className="flex items-center space-x-3">
                      <DollarSign className="w-6 h-6 text-green-400" />
                      <span className="text-gray-300 text-xl font-bold">***** USDT</span>
                    </div>
                    <span className="text-green-400 text-sm font-semibold">STABLE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6">
              {/* About */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg blur opacity-25"></div>
                <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-orange-500"></div>
                    <h2 className="text-2xl font-bold">ABOUT ME</h2>
                  </div>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>I'm TheRipperX — Full Stack Developer by profession, Game Modder by mindset.</p>
                    <p>
                      I don't just build websites and apps — I engineer systems, craft tools, and bend the rules of
                      games through mods, cheats, and custom code.
                    </p>
                    <p>
                      For me, it's not just about writing clean code. It's about control. Mastering the system. Breaking
                      the limits.
                    </p>
                  </div>
                </div>
              </div>
              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => {
                  const Icon = skill.icon
                  return (
                    <div key={index} className="relative group">
                      <div
                        className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur"
                        style={{
                          background: `linear-gradient(to right, ${skill.color.split(" ")[1]}, ${skill.color.split(" ")[3]})`,
                        }}
                      ></div>
                      <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-6 group-hover:border-gray-700 transition-colors">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center mb-4`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-semibold mb-2">{skill.title}</h3>
                        <p className="text-sm text-gray-400">{skill.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              {/* Business Section */}
              <div className="relative mt-6">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg blur opacity-25"></div>
                <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-orange-500"></div>
                    <h2 className="text-2xl font-bold">ONLINE BUSINESSES</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-300">Premium Apps</span>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-300">Game Accounts & Codes</span>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-300">Web-based Boosting Services</span>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-300">Game Modifications & Cheats</span>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700 md:col-span-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-300">Exclusive Digital Secrets</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="mt-12 text-center">
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg blur opacity-25"></div>
              <div className="relative bg-gray-900 border border-gray-800 rounded-lg px-12 py-8">
                <blockquote className="text-2xl md:text-3xl font-light italic mb-4 text-gray-100">
                  "GG."
                </blockquote>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-orange-500"></div>
                  <p className="text-gray-400">Personal Philosophy</p>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-orange-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <audio ref={audioRef} src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Henry%20Moodie%20-%20drunk%20text%20%28official%20video%29-tKXNJMtOPlJevbf8HZPHzKmxJLvvCz.mp3" preload="metadata" />
      </div>
    </div>
  )
}
