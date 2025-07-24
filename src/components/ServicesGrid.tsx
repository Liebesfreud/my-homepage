import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from "@/lib/icons"

interface Service {
  id: string
  title: string
  description: string
  url: string
  icon: string
  category: 'web' | 'tool' | 'content' | 'code'
}

interface ServicesGridProps {
  services?: Service[]
  onServiceClick?: (service: Service) => void
}

const defaultServices: Service[] = [
  {
    id: '1',
    title: 'LinkA',
    description: 'example',
    url: 'https://example.com/',
    icon: 'BookOpen',
    category: 'content'
  },
  {
    id: '2',
    title: 'LinkB',
    description: 'example',
    url: 'https://example.com/',
    icon: 'Image',
    category: 'content'
  },
  {
    id: '3',
    title: 'LinkC',
    description: 'example',
    url: 'https://cloudflare-imgbed-958.pages.dev/',
    icon: 'Links',
    category: 'code'
  },
  {
    id: '4',
    title: 'LinkD',
    description: 'example',
    url: 'https://example.com/',
    icon: 'Settings',
    category: 'tool'
  },
  {
    id: '5',
    title: 'LinkE',
    description: 'example',
    url: 'https://example.com/',
    icon: 'ExternalLink',
    category: 'web'
  },
  {
    id: '6',
    title: 'LinkF',
    description: 'example',
    url: 'https://example.com/',
    icon: 'Globe',
    category: 'web'
  }
]

const iconMap = {
  BookOpen: Icons.BookOpen,
  Image: Icons.Image,
  Code: Icons.Code,
  Settings: Icons.Settings,
  Globe: Icons.Globe,
  ExternalLink: Icons.ExternalLink
}

export function ServicesGrid({ services = defaultServices, onServiceClick }: ServicesGridProps) {
  const handleServiceClick = (service: Service) => {
    if (onServiceClick) {
      onServiceClick(service)
    } else {
      window.open(service.url, '_blank')
    }
  }

  return (
    <section className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">个人项目&服务</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            一些开放的个人项目和服务，希望能够帮助到你
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Icons.Globe
            
            return (
              <Card
                key={service.id}
                className="acrylic-card reveal-effect group cursor-pointer border-0 transition-all duration-300 hover:-translate-y-2"
                onClick={() => handleServiceClick(service)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-base leading-relaxed mb-6">
                    {service.description}
                  </CardDescription>
                  <Button
                    variant="ghost"
                    className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-all duration-200"
                  >
                    访问
                    <Icons.ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}