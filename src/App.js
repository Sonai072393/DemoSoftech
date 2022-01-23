import "./App.css";
import NavBar from "./Components/Pages/NavBar/Navigation";
import headerLogo from './Components/UI/Img/softechsolutions_header_log.png'
function App() {
  return (
    <div className="App">
        <div className="logo">
        <img src={headerLogo} alt="headerLogo"/>
        </div>
        
        <NavBar/>
     
    </div>
  );
}

export default App;
