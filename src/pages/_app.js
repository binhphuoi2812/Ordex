import { SidebarProvider } from "@/context/SidebarContext";
import "@arco-design/web-react/dist/css/arco.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <SidebarProvider>
      <Component {...pageProps} />
    </SidebarProvider>
  );
}
