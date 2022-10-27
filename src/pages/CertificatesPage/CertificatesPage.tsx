import { BsAward } from "react-icons/bs";
import { Certificate } from "../../components/Certificate/Certificate";
import "./CertificatesPage.css";

export const Certificates = () => {
  return (
    <div className="certificates-page">
      <h2>
        {" "}
        <BsAward className="icon" />
        Certificates
      </h2>
      <div className="certificates-list">
        <Certificate />
      </div>
    </div>
  );
};
