import NameBlock from "../NameBlock/NameBlock";
import "./MainMenu.css";

interface CustomScrollIntoViewOptions extends ScrollIntoViewOptions {
  offset?: number;
}

const MainMenu = () => {

 


  const handleClick = (id: string) => {
   
    return () => {
      const element = document.querySelector(id);
      const options: CustomScrollIntoViewOptions = { behavior: 'smooth', offset: 100 };
      
      if (element) {
        element.scrollIntoView(options);
      }
    };
  };

  return (
    <div className="left-block">
      <div className="filler-section"></div>
      <div className="name-box">
        <NameBlock></NameBlock>
        <nav>
          <ul>
            <li onClick={handleClick("#about")}>
              <span className="line"></span>
              <span>ABOUT</span>
            </li>
            <li onClick={handleClick("#experience")}>
              <span className="line"></span>
              <span>EXPERIENCE</span>
            </li>
            <li onClick={handleClick("#projects")}>
              <span className="line"></span>
              <span>PROJECTS</span>
            </li>
          </ul>
        </nav>
      </div>
      <ul></ul>
    </div>
  );
};

export default MainMenu;
