import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";



function App() {
  return (
    <SidebarProvider>
      <div className="flex">
        <AppSidebar />

        <main className="flex-1 p-4">
          <SidebarTrigger /> 
        </main>
      </div>
    </SidebarProvider>
  );
}

export default App;
