import { 
  Home, 
  Compass, 
  Info, 
  Mail, 
  HelpCircle, 
  Sparkles,
  ChevronDown,
  Command,
  Plus
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"


const categories = [
  "Development", "Design Systems", "Marketing", "Research", 
  "Analytics", "Security", "Human Resources", "Legal", "Finance"
]


export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      {/* 1. Website Branding */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
    
                <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                 <a href="/" className="font-extrabold text-xl flex items-center gap-1 shrink-0 mb-1">
                <svg className="text-primary" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 12.3L3.5 7.05L12 1.8l8.5 5.25z"/>
                    <path fill="currentColor" d="M12 22.2v-9.9l8.5-5.25v9.9z" opacity="0.25"/>
                    <path fill="currentColor" d="m12 22.2l-8.5-5.25v-9.9L12 12.3z" opacity="0.5"/>
                </svg>
                Roblox
                <span className="text-primary">Studio.</span>
                  </a>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <hr />

      <SidebarContent>
        {/* 2. Main Navigation Group */}
        <SidebarGroup>
          <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden text-sm">Navigation</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Home">
                <Home /> <span>Home</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Explore">
                <Compass /> <span>Explore</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>


        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel className="text-sm">Categories</SidebarGroupLabel>
          {/* We use max-h and custom scrollbar for a sleek feel */}
          <SidebarGroupContent className="max-h-[180px] overflow-y-auto pl-2 scrollbar-thin scrollbar-thumb-muted">
            <SidebarMenu>
              {categories.map((category) => (
                <SidebarMenuItem key={category}>
                  <SidebarMenuButton asChild className="h-8">
                    <a href={`/categories/${category.toLowerCase()}`}>
                      {/* No icon here for a cleaner text-only look */}
                      <span className="text-sm font-medium text-muted-foreground hover:text-foreground">
                        {category}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>


        {/* 3. Collapsible Support Group */}
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild className="text-sm group-data-[collapsible=icon]:hidden">
              <CollapsibleTrigger className="">
                Support
                <ChevronDown className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent className="animate-collapsible-down">
              <SidebarGroupContent>
                <SidebarMenu>
                  {[
                    { title: "About Us", icon: Info },
                    { title: "Contact Us", icon: Mail },
                    { title: "FAQ", icon: HelpCircle },
                  ].map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton tooltip={item.title}>
                        <item.icon /> <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>

      {/* 4. Footer with Primary Action */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton 
              tooltip="Get Started"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground transition-all group-data-[collapsible=icon]:p-2"
            >
              <Sparkles />
              <span className="font-medium group-data-[collapsible=icon]:hidden">Get Started</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      
      {/* The Rail allows clicking/dragging to resize/toggle */}
      <SidebarRail />
    </Sidebar>
  )
}