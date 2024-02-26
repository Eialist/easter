import logo from "../assets/eialist-icon.png";
import { useState } from "react";
import Jumbotron from "../components/Jumbotron.jsx";
import WordsComponent from "../components/WordComponent.jsx";

export const Frontpage = () => {
  const [language, setLanguage] = useState(true);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => !prevLanguage);
  };
  return (
    <div style={{ minHeight: "92vh" }}>
      <nav className="navbar navbar-white bg-white">
        <a className="navbar-brand" href="#">
          <img src={logo} width="55" height="55" alt=""></img>
        </a>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => toggleLanguage()}>
          Ändra språk
        </button>
      </nav>
      <Jumbotron />
      <div className="container">
        <div className="row">
          <div className="col-sm"></div>
          <div className="col-sm-6">
            <WordsComponent setlanguage={language} />
          </div>
          <div className="col-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default Frontpage;
