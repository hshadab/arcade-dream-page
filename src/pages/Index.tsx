import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <About />
      <ContactForm />
    </Layout>
  );
};

export default Index;
