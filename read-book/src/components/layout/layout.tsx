import Footer from "./footer";
import Header from "./header";

interface LayoutProps {
    children: React.ReactNode

}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <div className='text-foreground bg-background bg-opacity-50 backdrop-blur-lg'>
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    )
}

export default Layout;