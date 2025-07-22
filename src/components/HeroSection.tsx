import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Download } from "lucide-react"

interface HeroSectionProps {
  name?: string
  title?: string
  description?: string
  avatar?: string
  socialLinks?: {
    github?: string
    linkedin?: string
    email?: string
  }
}

export function HeroSection({
  name = "Your Name",
  title = "Full Stack Developer",
  description = "工业工程在读研究生，业余摄影爱好者，业余前端技术爱好者",
  avatar = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
  socialLinks = {}
}: HeroSectionProps) {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="acrylic-card">
              本项目由React驱动
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {name}
            </h1>
            <h2 className="text-2xl lg:text-3xl text-muted-foreground font-medium">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button className="fluent-button">
              <Mail className="w-4 h-4 mr-2" />
              联系我
            </Button>
            <Button variant="outline" className="acrylic-card">
              <Download className="w-4 h-4 mr-2" />
              了解更多
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center lg:justify-start">
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full acrylic-card reveal-effect hover:scale-110 transition-transform"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full acrylic-card reveal-effect hover:scale-110 transition-transform"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {socialLinks.email && (
              <a
                href={`mailto:${socialLinks.email}`}
                className="p-3 rounded-full acrylic-card reveal-effect hover:scale-110 transition-transform"
              >
                <Mail className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Avatar */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 hero-gradient rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <div className="relative acrylic-card p-4 rounded-full">
              <img
                src={avatar}
                alt={name}
                className="w-80 h-80 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}