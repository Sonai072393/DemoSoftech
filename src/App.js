import "./App.css";
import Banner from "./Components/Pages/Banner/Banner";
import NavBar from "./Components/Pages/NavBar/Navigation";
import headerLogo from './Components/UI/Img/softechsolutions_header_log.png'
import WhatWeDo from './Components/Pages/WhatWeDo/WhatWeDo';
import Work from "./Components/Pages/Works/Work";
import CustomerSay from "./Components/Pages/CustomerSay/CustomerSay";

function App() {
  return (
    <div className="App">
        <div className="logo">
        <img src={headerLogo} alt="headerLogo"/>
        </div>
        
        <NavBar/>
        <Banner/>
        <WhatWeDo/>
        <Work/>
        <CustomerSay/>
     
    </div>
  );
}

export default App;
