import Container from '@/components/Container/Container';
import Footer from '@/components/shared/Footer/Footer';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Codenames Generator</title>
        <meta
          name="description"
          content="Create custom tiles to use with Codenames."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/detectiveIcon.png" />
      </Head>
      <main>
        <Container />
      </main>
      <Footer />
    </>
  );
}
