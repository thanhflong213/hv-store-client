import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Sidebar from "./_components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Sidebar />
      <SidebarInset>
        <header className="flex items-center w-full min-h-15 border-b-4 border-gray-300 px-4">
          <SidebarTrigger />
          <p className="ml-2">Header</p>
        </header>
        <main className="h-full p-4">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
