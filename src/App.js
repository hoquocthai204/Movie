import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";

import "./scss/app.scss";

import Footer from "./components/Footer";
import Header from "./components/Header";

import Routes from "./config/Routes";
import ScrollTopComponent from "./components/common/ScrollTopComponent";

function App() {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
      <ScrollTopComponent />
    </>
  );
}

export default App;
