import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Github, Linkedin, Mail } from "lucide-react";
const Index = () => {
  const profileData = {
    name: "Liebesfreud",
    title: "欢迎来到我的主页！",
    description: "Passionate about creating beautiful, functional web experiences. I specialize in React, Node.js, and modern web technologies. Always learning, always building.",
    avatar: "https://cloudflare-imgbed-958.pages.dev/file/1753196675234_微信图片_2025-07-21_203140_048.jpg",
    socialLinks: {
      github: "https://github.com/Liebesfreud",
      linkedin: "https://linkedin.com/in/alexjohnson",
      email: "liebesfreudzz@gmail.com"
    }
  };
  return <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section id="home">
        <HeroSection {...profileData} />
      </section>

      {/* Services Grid */}
      <section id="services">
        <ServicesGrid />
      </section>

      {/* About Section */}
      

      {/* Contact Section */}
      

      {/* Footer */}
      <footer className="border-t py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">P</span>
            </div>
            <span className="font-semibold text-lg">Personal Portal</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Built with React, Vite, and Fluent Design principles
          </p>
          <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>using modern web technologies</span>
          </div>
        </div>
      </footer>

    </div>;
};
export default Index;