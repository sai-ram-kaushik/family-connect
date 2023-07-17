import "../styles/globals.css";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nedunuri Family</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
