import Footer from "./footer";
import Header from "./header";

interface LayoutProps {
    children: React.ReactNode

}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <div className='h-dvh'>
                {/* <img src={background} alt="" /> */}
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    )
}

export default Layout;