// Import useEffect hook
import { useEffect } from 'react';
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
// Import css styles
import "../styles/global.css";
import Layout from './components/Layout';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);


  return (
    <>
      <Layout/>
      <Component {...pageProps} />
    </>
    
  );
}

export default MyApp
