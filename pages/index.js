import Head from 'next/head';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Head>
        <title>PornPump.xyz - The Future of Adult Entertainment</title>
        <meta name="description" content="Revolutionary Web3 platform combining adult content creators' autonomy with innovative token economics." />
      </Head>
      
      <Hero />
      <Features />
      <CTA />
    </>
  );
}
