import { useEffect, useState, useRef } from "react";
import pickWords from "../hooks/generateWords";
import easterWords from "../db/wordlist.js";
import { ModalComponent } from "./ModalComponent.jsx";

let newWords = pickWords(easterWords);

export const WordsComponent = (setLanguage) => {
  const [inputValues, setInputValues] = useState({});
  const [wordsOfTheWeek, setWordsOfTheWeek] = useState(newWords);
  const prevLanguageRef = useRef(setLanguage);
  const [lang, setLang] = useState(false);

  let active = "";
  let counter = 0;

  useEffect(() => {
    setWordsOfTheWeek(newWords);
    if (setLanguage !== prevLanguageRef.current) {
      setLang((prevState) => !prevState);
    }
    setInputValues({});
  }, [setLanguage]);

  const checkWord = (e, wordId) => {
    e.preventDefault();
    let enteredWord = e.target.value.toLowerCase();
    setInputValues({ ...inputValues, [wordId]: enteredWord });
    console.log(inputValues);
  };

  const inputStyle = (wordId) => {
    if (inputValues[wordId]) {
      let word = wordsOfTheWeek.find((w) => w.id === wordId);
      if (
        inputValues[wordId] === word.en.toLowerCase() ||
        inputValues[wordId] === word.sv.toLowerCase()
      ) {
        counter++;
        if (counter === 9) {
          console.log("ok");
          checkIfAllCorrectAnswers(counter);
        }
        return { border: "2px solid rgb(83, 165, 81)" };
      }
    }
    return {};
  };

  const checkIfAllCorrectAnswers = (counter) => {
    if (counter === 9) {
      active = "modal";
    }
  };

  const setNewWords = () => {
    newWords = pickWords(easterWords);
    setWordsOfTheWeek(newWords);
    setInputValues("");
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        {wordsOfTheWeek.map((word) => (
          <div key={word.id} className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">
                {!lang ? word.sv.toLowerCase() : word.en.toLowerCase()}
              </span>
            </div>
            <input
              key={word.sv}
              type="text"
              value={inputValues[word.id] || ""}
              className="form-control"
              onChange={(e) => checkWord(e, word.id)}
              style={inputStyle(word.id)}></input>
          </div>
        ))}
        <button
          type="button"
          className="btn btn-success"
          onClick={() => setNewWords()}>
          Nya ord
        </button>
        <div>
          {active === "modal" ? <ModalComponent /> : console.log("wth")}
        </div>
      </div>
    </>
  );
};

export default WordsComponent;
