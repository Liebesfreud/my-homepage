import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Home, User, Briefcase, Mail, Menu, Moon, Sun, Settings } from "lucide-react"
import { useTheme } from "@/components/ThemeProvider"


export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const navItems = [
    { href: "#home", label: "Home", icon: Home },
    { href: "#about", label: "About", icon: User },
    { href: "#services", label: "Services", icon: Briefcase },
    { href: "#contact", label: "Contact", icon: Mail },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 acrylic-card border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">个</span>
            </div>
            <span className="font-semibold text-lg">Liebesfreud</span>
          </div>

          {/* 右侧工具栏 */}
          <div className="flex items-center gap-4">
            {/* 主题切换 */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

          </div>
        </div>
      </div>
    </nav>
  )
}