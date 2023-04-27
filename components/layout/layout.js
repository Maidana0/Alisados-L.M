import Navbar from "./navbar"
import Footer from "./footer"
import Head from "next/head"
const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Alisados L.M</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout