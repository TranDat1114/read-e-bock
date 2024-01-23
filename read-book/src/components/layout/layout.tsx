import Footer from "./footer";
import Header from "./header";

import { ThemeProvider } from "@/components/theme/theme-provider"
import { Card } from "@/components/ui/card";
import { useLocation } from "react-router-dom";
import EmblaCarousel from "@/components/ui/EmblaCarousel";
import imageByIndex from "../pages/home/imageByIndex";

import { EmblaOptionsType } from 'embla-carousel'
interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {

    const location = useLocation(); // Lấy thông tin về đường dẫn hiện tại

    const isHomePage = () => {
        return location.pathname === '/' || location.pathname === '/home';
    };

    const OPTIONS: EmblaOptionsType = { align: 'center', dragFree: false, loop: true }
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <div className='flex flex-col w-full relative'>
                <Header />
                {

                    isHomePage() ?

                        <section className="w-full mt-20 relative h-96">
                            <EmblaCarousel slides={SLIDES} options={OPTIONS} imageByIndex={imageByIndex} />
                        </section>
                        : <></>

                }
                <main className="md:container my-12 min-h-dvh ">
                    <Card className="p-4">
                        {children}
                    </Card>
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    )
}

export default Layout;