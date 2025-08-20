// src/pages/index.tsx
import Layout from '../components/Layout';
import { Hero, About, Projects, Contact } from '../components/sections';

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
}