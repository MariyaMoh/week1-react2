import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps , router}: AppProps) {
  return (

   <AnimatePresence exitBeforeEnter>
      <Component key={router.asPath} {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
