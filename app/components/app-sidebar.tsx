"use client"
import { 
  Home, Compass, Info, Mail, HelpCircle, 
  Sparkles, ChevronDown, LayoutGrid 
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
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
import Link from "next/link"

// Note: In Next.js App Router, it's better to fetch this in a Server Parent 
// and pass it down, or use a Client-side fetch.
interface Category {
  _id: string;
  slug: string;
}

export function AppSidebar({ categories }: { categories: Category[] }) {
  return (
    <Sidebar collapsible="icon" className="border-r border-border/50">
      <SidebarHeader className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="hover:bg-transparent">
              <Link href="/" className="flex items-center gap-3">
                    <div className="font-black italic text-xl flex items-center gap-1 shrink-0 mb-1">
                    <svg className="text-primary" xmlns="http://www.w3.org/2000/svg" width="29" height="26" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 12.3L3.5 7.05L12 1.8l8.5 5.25z" />
                      <path fill="currentColor" d="M12 22.2v-9.9l8.5-5.25v9.9z" opacity="0.25" />
                      <path fill="currentColor" d="m12 22.2l-8.5-5.25v-9.9L12 12.3z" opacity="0.5" />
                    </svg>
                    Roblox
                    <span className="text-primary">Studio.</span>
                  </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="gap-2 px-2">
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground/90 group-data-[collapsible=icon]:hidden">
            Navigation
          </SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Home" className="transition-colors hover:bg-accent">
                <Link href="/">
                  <Home className="size-4" /> 
                  <span className="font-medium">Home</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Explore" className="transition-colors hover:bg-accent">
                <Link href="/explore">
                  <Compass className="size-4" /> 
                  <span className="font-medium">Explore</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {/* Categories Section */}
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <div className="flex items-center justify-between px-2 mb-2">
            <SidebarGroupLabel className="p-0 text-xs font-semibold uppercase tracking-wider text-muted-foreground/90">
              Categories
            </SidebarGroupLabel>
            <Link 
              href="/categories" 
              className="text-[10px] font-bold uppercase tracking-tighter bg-secondary/50 hover:bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full transition-all"
            >
              View All
            </Link>
          </div>
          <SidebarGroupContent className="max-h-[210px] overflow-y-auto pr-2 scrollbar-hide hover:scrollbar-default transition-all pl-1">
            <SidebarMenu>
              {categories?.map((category) => (
                <SidebarMenuItem key={category._id}>
                  <SidebarMenuButton asChild className="h-9 rounded-md transition-all hover:translate-x-1 active:scale-95">
                    <Link href={`/categories/${category.slug.toLowerCase()}`}>
                      <LayoutGrid className="size-3.5 text-muted-foreground/50" />
                      <span className="text-sm font-medium text-muted-foreground hover:text-foreground">
                        {category.slug.charAt(0).toUpperCase() + category.slug.slice(1)}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Support Section */}
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild className="text-xs text-muted-foreground/90 font-semibold uppercase tracking-wider group-data-[collapsible=icon]:hidden">
              <CollapsibleTrigger className="flex w-full items-center justify-between hover:bg-accent/50 p-2 rounded-md transition-colors">
                Support
                <ChevronDown className="ml-auto size-4 transition-transform duration-300 group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent className="animate-in fade-in-50 slide-in-from-top-1">
              <SidebarGroupContent className="pt-1">
                <SidebarMenu>
                  {[
                    { title: "About Us", icon: Info, href: "/about-us" },
                    { title: "Contact Us", icon: Mail, href: "/contact-us" },
                    { title: "FAQs", icon: HelpCircle, href: "/faq" },
                  ].map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild tooltip={item.title} className="hover:bg-accent">
                        <Link href={item.href}>
                          <item.icon className="size-4" />
                          <span className="font-medium ">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              tooltip="Get Started"
              className="relative overflow-hidden bg-primary text-primary-foreground shadow-md hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group-data-[collapsible=icon]:p-2 h-11"
            >
              <Link href="/get-started" className="flex items-center justify-center gap-2">
                <Sparkles className="size-4 animate-pulse" />
                <span className="font-semibold group-data-[collapsible=icon]:hidden">Get Started</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}