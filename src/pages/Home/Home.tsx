import { useEffect } from "react";
import "./Home.css";
import Information from "../../components/Information/Information";
import MainMenu from "../../components/MainMenu/MainMenu";
import StickyHeader from "../../components/Header/StickyHeader";

export const Home = () => {

  window.onscroll = function() {
  myFunction();
};

const header = document.getElementById("myHeader");
let sticky = 0;

// Check if header exists before accessing its properties
if (header) {
  sticky = header.offsetTop;
}

function myFunction() {
  if (header && (window.scrollY || document.documentElement.scrollTop || document.body.scrollTop) > sticky) {
    header.classList.add("sticky");
  } else if (header) {
    header.classList.remove("sticky");
  }
}

  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const gradient = document.getElementById("radial-gradient");
      if (gradient) {
        gradient.style.backgroundPositionX = mouseX + "px";
        gradient.style.backgroundPositionY = mouseY + "px";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
     <div className="filler-section"></div>
      <div id="radial-gradient" className="main">
     
        <div className="content">
        <section className="menu-section">

          <MainMenu></MainMenu>
        </section>
        <section className="information-section">
          <StickyHeader></StickyHeader>
          <Information></Information>
  
        </section>
        </div>
      </div>
      <div className="top-section"></div>
    </>
  );
};
