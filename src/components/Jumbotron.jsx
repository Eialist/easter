import chicken from "../assets/easter-icon.png";

export const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <img src={chicken} alt="" width={100} />
      <h1 className="display-5">Easter Vocabulary</h1>
      <hr className="my-3"></hr>
      <p className="lead">
        Ett komplement till Easter Activity Book för att träna på viktiga ord
        som dyker upp i häftet.
      </p>
    </div>
  );
};

export default Jumbotron;
