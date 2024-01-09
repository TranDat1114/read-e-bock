import Footer from "./footer";
import Header from "./header";

import bg from "../../../public/background.png"

import { ThemeProvider } from "@/components/theme/theme-provider"
interface LayoutProps {
    children: React.ReactNode

}

const Layout = ({ children }: LayoutProps) => {
    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">

            <div className='flex flex-col w-full relative'>
                <Header />
                <img src={bg} alt="cover" className="w-full h-96 object-cover" />
                <main className="md:container px-2 my-4 min-h-dvh">{children}</main>
                <Footer />
            </div>

        </ThemeProvider>
    )
}

export default Layout;