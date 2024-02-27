import flower from "../assets/blomma.png";

export const Footer = () => {
  return (
    <div className="card-footer text-muted mt-5 d-flex flex-column justify-content-center align-items-center">
      <img src={flower} alt="" width={35} className="mb-1" />
      Copyright © 2024 Eialist
    </div>
  );
};

export default Footer;
