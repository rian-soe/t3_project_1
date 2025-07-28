// src/pages/index.tsx
import Layout from '../components/Layout';
import { Hero, About, Contact } from '../components/sections';

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <About />
      <Contact />
    </Layout>
  );
}