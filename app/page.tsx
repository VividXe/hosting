import Layout from "@/components/layout/layout";
import About from "@/components/pages/home/about";
import Hero from "@/components/pages/home/hero";
import Pricing from "@/components/pages/home/pricing";
import Services from "@/components/pages/home/services";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <Pricing />
    </Layout>
  );
}
