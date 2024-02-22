import Footer from "./footer";
import Header from "./header";

import { ThemeProvider } from "@/components/theme/theme-provider"
// import { Card } from "@/components/ui/card";
import { useLocation } from "react-router-dom";
import EmblaCarousel from "@/components/ui/EmblaCarousel";
import headerData from "./headerdata.json"

import { EmblaOptionsType } from 'embla-carousel'
interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {

    const location = useLocation(); // Lấy thông tin về đường dẫn hiện tại

    const isHomePage = () => {
        return location.pathname === '/' || location.pathname === '/home';
    };
    const isReadPage = () => {
        return location.pathname === '/truyen';
    }



    const OPTIONS: EmblaOptionsType = { align: 'center', dragFree: false, loop: true }
    // const SLIDE_COUNT = 5
    // const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <div className='flex flex-col relative bg-background/70 backdrop-contrast-75'>
                <Header />
                {
                    isHomePage() ?
                        <section className="w-full mt-20 relative h-96">
                            <EmblaCarousel options={OPTIONS} variant="banner" details={headerData.books} />
                        </section>
                        : <div className="mt-10"></div>
                }
                {isReadPage() ? <div className="w-full min-h-dvh">
                    {children}
                </div> :
                    <main className="md:container my-8 min-h-dvh">
                        {children}
                    </main>
                }
                <Footer />
            </div>
        </ThemeProvider>
    )
}

export default Layout;