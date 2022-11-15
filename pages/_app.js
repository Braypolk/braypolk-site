import '../styles/globals.css'
import '../styles/App.css';
import '../styles/Burger.css';
// import '../styles/card.min.css';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp
