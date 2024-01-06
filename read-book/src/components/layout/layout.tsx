import Footer from "./footer";
import Header from "./header";
import bg from "../../../public/bg_1.png"


import { ThemeProvider } from "@/components/theme/theme-provider"
interface LayoutProps {
    children: React.ReactNode

}

const Layout = ({ children }: LayoutProps) => {
    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">

            <div className='h-dvh relative flex flex-col '>
                <img className="-z-10 w-full h-dvh object-cover  absolute inset-0 object-center" src={bg} alt="background" />
                <Header />
                <main className="container">{children}</main>
                <Footer />
            </div>

        </ThemeProvider>
    )
}

export default Layout;