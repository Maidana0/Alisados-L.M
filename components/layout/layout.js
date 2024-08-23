import Navbar from "./navbar"
import Footer from "./footer"
import Head from "next/head"
const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Alisados L.M</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Renueva tu cabello con Alisados L.M. Ofrecemos tratamientos capilares de alta calidad que nutren, reparan y alisan, dejándote un cabello radiante. Experimenta un servicio personalizado con pasión y dedicación. ¡Siéntete cómoda, segura y luce un cabello espectacular!" />
                <meta name="author" content="Franco y Miguel" />
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