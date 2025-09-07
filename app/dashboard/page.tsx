import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";

export const iframeHeight = "800px";
export const description = "A sidebar with a header and a search form.";

export default function Page({ children }: { children?: React.ReactNode }) {
  return (
    <div className="[--header-height:calc(--spacing(14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            {/* <div className="flex flex-1 bg-amber-300 flex-col gap-4 p-4">
       
              <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="bg-muted/50 aspect-video rounded-xl" />
                <div className="bg-muted/50 aspect-video rounded-xl" />
                <div className="bg-muted/50 aspect-video rounded-xl" />
              </div>
              <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />

             
              {children}
            </div> */}
             <div className="flex flex-1 flex-col gap-4 p-0 md:p-4 pt-0">
          {/* <div className="min-h-[calc(100vh-8rem)] md:min-h-[100vh] flex-1 rounded-xl p-2 pb-16  md:pb-2"> */}
            {children}
          {/* </div> */}
        </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
