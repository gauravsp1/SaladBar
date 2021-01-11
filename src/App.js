import NavBar from "./Components/NavBar";
import Feature from "./Components/Feature";
import Info from "./Components/Info";
import detail from "./InfoDetails";
import ImageDetail from "./MenuImagesDetails";
import MenuImages from "./Components/MenuIamges";
import Location from "./Components/Location";
import Customer from "./Components/Customer";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Plan from "./Components/Plan";

function App() {


  return (
    <>
    <NavBar/>
    <Feature/>
    <div className="InfoContainer">
    {detail.map(item=>{
       return <Info
       key={item.key}
       icon={item.icon}
       title={item.title}
       content={item.content}
       
       />
    })}
    </div>
    <div id="menu" className="MenuImagesContainer">
    {ImageDetail.map(item=>{
       return <MenuImages
       key={item.key}
       source={item.source}
       name={item.name}
       
       />
    })}
    </div>
    <Location/>
    <Customer/>
    <Plan/>
    <Contact/>
    <Footer/>
    
    </>
  );
}

export default App;
