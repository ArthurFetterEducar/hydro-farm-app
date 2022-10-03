import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'

import "../styles/global.css";


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);


  return (
    <Component {...pageProps} />
  );
}

export default MyApp
