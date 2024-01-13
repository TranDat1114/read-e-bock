import Footer from "./footer";
import Header from "./header";

import bg from "../../../public/bg_1.png"

import { ThemeProvider } from "@/components/theme/theme-provider"
import { Card } from "../ui/card";
interface LayoutProps {
    children: React.ReactNode

}

const Layout = ({ children }: LayoutProps) => {
    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">

            <div className='flex flex-col w-full relative'>
                <Header />
                <img src={bg} alt="cover" className="w-full h-96 object-cover" />
                <main className="md:container my-8 min-h-dvh ">
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