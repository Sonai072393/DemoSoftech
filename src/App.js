import "./App.css";
import Banner from "./Components/Pages/Banner/Banner";
import NavBar from "./Components/Pages/NavBar/Navigation";
import headerLogo from "./Components/UI/Img/softechsolutions_header_log.png";
import WhatWeDo from "./Components/Pages/WhatWeDo/WhatWeDo";
import Work from "./Components/Pages/Works/Work";
import CustomerSay from "./Components/Pages/CustomerSay/CustomerSay";
import Start from "./Components/Pages/StartProject/Start";
import Footer from "./Components/Pages/Footer/Footer";



function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src={headerLogo} alt="headerLogo" />
      </div>
      <header>
        <NavBar />
      </header>
      <body>
         
        <Banner />
        <WhatWeDo />
        <Work />
        <CustomerSay />
        <Start />
      </body>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
