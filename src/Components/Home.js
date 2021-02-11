 import React  from "react";
import NavBar from "./NavBar";
import Feature from "./Feature";
import Info from "./Info";
import detail from "../InfoDetails";
import ImageDetail from "../MenuImagesDetails";
import MenuImages from "./MenuIamges";
import Location from "./Location";
import Customer from "./Customer";
import Contact from "./Contact";
import Footer from "./Footer";
import Plan from "./Plan";  




function Home() {


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
  
  export default Home;