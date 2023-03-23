
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import {Menu} from './pages/menu/Menu';
import {Cart} from './pages/cart/Cart';
import AboutUs from './pages/AboutUs';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { MenuContextProvider } from './context/menu-context';



function App() {
  return (
   <div className="App">
    <MenuContextProvider>
      <Router>
      <Navbar />
         <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/cart" component={Cart} />
        </Switch>
      <Footer/>
      </Router>
      </MenuContextProvider>
    </div> 

    /*<div className="App">
       <Router>
         <Navbar />
          <Switch>
          <Route path="/" elements={<Home />}/>
          <Route path="/menu" elements={<Menu />} />
          <Route path="/about" elements={<AboutUs />} />
          <Route path="/cart" elements={<Cart />} />
          </Switch>
        <Footer />
         </Router>

        </div>*/
  );
}

export default App;
