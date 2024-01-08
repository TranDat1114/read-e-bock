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

            <div className='h-dvh flex flex-col w-full relative'>
                <Header />
                <img src={bg} alt="cover" className="w-full h-96 object-cover" />
                <main className="container my-4">{children}</main>
                <Footer />
            </div>

        </ThemeProvider>
    )
}

export default Layout;