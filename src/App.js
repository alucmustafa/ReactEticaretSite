import { BrowserRouter as Router ,Routes,Route }  from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Navbar from "./componets/navbar/Navbar";
import PageContainer from "./containers/PageContainer"
import Cart from "./pages/Cart";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <PageContainer>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element= {<Home />}/>       
            <Route path="/products/:id" element= {<Detail />}/>       
            <Route path="/cart" element= {<Cart />}/>        
          </Routes>
        </Router>
     </PageContainer> 
    </>
  );
}

export default App;
