import Footer from "./footer";
import Header from "./header";


import { ThemeProvider } from "@/components/theme/theme-provider"
interface LayoutProps {
    children: React.ReactNode

}

const Layout = ({ children }: LayoutProps) => {
    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">

            <div className='h-dvh relative flex flex-col w-dvw'>
                <Header />
                <main className="container">{children}</main>
                <Footer />
            </div>

        </ThemeProvider>
    )
}

export default Layout;