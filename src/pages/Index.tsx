import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { AuroraBackground } from "@/components/AuroraBackground";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Icons } from "@/lib/icons";
import { useState, useEffect } from "react";
const Index = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  
  useEffect(() => {
    let triggered = false;
    
    const handleScroll = () => {
      if (triggered) return;
      
      // 使用多种方法获取滚动位置以确保兼容性
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      const windowHeight = window.innerHeight;
      
      console.log('Scroll info - Y:', scrollY, 'triggered at 30px');
      
      if (scrollY > 30) {
        triggered = true;
        setHasScrolled(true);
      }
    };

    // 使用Intersection Observer作为备选方案
    const observerTarget = document.createElement('div');
    observerTarget.style.position = 'absolute';
    observerTarget.style.top = '100vh';
    observerTarget.style.height = '1px';
    observerTarget.style.width = '1px';
    observerTarget.style.pointerEvents = 'none';
    document.body.appendChild(observerTarget);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !triggered) {
            triggered = true;
            setHasScrolled(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(observerTarget);

    // 立即检查一次
    handleScroll();

    // 添加多个滚动事件监听器以确保兼容性
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      if (document.body.contains(observerTarget)) {
        document.body.removeChild(observerTarget);
      }
    };
  }, []);
  
  console.log('Has scrolled:', hasScrolled);
  
  const profileData = {
    name: "Example",
    title: "欢迎来到我的主页！",
    description: "Passionate about creating beautiful, functional web experiences. I specialize in React, Node.js, and modern web technologies. Always learning, always building.",
    avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
    socialLinks: {
      github: "https://github.com/example",
      linkedin: "https://linkedin.com/in/example",
      email: "example@example.com"
    }
  };
  return <div className="min-h-screen bg-background relative">
      {/* 流水点阵背景 */}
      <AuroraBackground />
      
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-16 relative z-10">
        <HeroSection {...profileData} />
      </section>

      {/* 添加更多空间确保可以滚动 */}
      <div className="h-32 relative z-10"></div>

      {/* Scroll Indicator */}
      <ScrollIndicator isVisible={!hasScrolled} />

      {/* Services Grid - Only show after scrolling */}
      {hasScrolled && (
        <section id="services" className="animate-in fade-in-50 slide-in-from-bottom-5 duration-700 relative z-10">
          <ServicesGrid />
        </section>
      )}

      {/* About Section */}
      

      {/* Contact Section */}
      

      {/* Footer - Only show after scrolling */}
      {hasScrolled && (
        <footer className="border-t py-12 px-4 animate-in fade-in-50 slide-in-from-bottom-5 duration-700 delay-300 relative z-10">
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
              <Icons.Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>using modern web technologies</span>
            </div>
          </div>
        </footer>
      )}

    </div>;
};
export default Index;