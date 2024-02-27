import chicken from "../assets/easter-icon.png";

export const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <img src={chicken} alt="" width={100} />
      <h2 className="display-5">Easter Vocabulary</h2>
      <hr className="my-3"></hr>
      <p className="lead">
        Träna mer på orden i Easter Activity Book. Växla mellan svenska och
        engelska på knappen i hörnet. Behöver du hjälp finns ordlistan i ditt
        häfte.
      </p>
    </div>
  );
};

export default Jumbotron;
