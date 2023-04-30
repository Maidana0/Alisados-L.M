import About from "@Fran&Miguel/components/about";
import Attention from "@Fran&Miguel/components/attention";
import { Front, GoogleMaps, Products } from "@Fran&Miguel/components/banners/banners";
import Layout from "@Fran&Miguel/components/layout/layout";
export default function Home() {
  return (
    <Layout>
      <Front />
      <About/>
      <Products />
      <Attention />
      <GoogleMaps />
    </Layout>
  )
}
