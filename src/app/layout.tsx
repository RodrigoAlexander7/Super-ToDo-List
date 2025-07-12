import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 p-4 max-w-full overflow-hidden break-words">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}