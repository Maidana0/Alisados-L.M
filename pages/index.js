import About from "@Fran&Miguel/components/about";
import Attention from "@Fran&Miguel/components/attention";
import { Front, GoogleMaps, Products } from "@Fran&Miguel/components/banners/banners";
import Layout from "@Fran&Miguel/components/layout/layout";
import Services from "@Fran&Miguel/components/cards/Services";
import Contact from "@Fran&Miguel/components/PagoContacto/contact";
import InfoPay from "@Fran&Miguel/components/PagoContacto/infoPay";

export default function Home() {
  return (
    <Layout>
      <Front />
      <About/>
      <Services/>
      <Products />
      <InfoPay/>
      <Contact/>
      <Attention />
      <GoogleMaps />
    </Layout>
  )
}
