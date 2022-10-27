import { AiOutlineBulb } from "react-icons/ai";
import "./Certificate.css";
import { ImQuotesLeft } from "react-icons/im";

export const Certificate = () => {
  return (
    <div className="certifcate-with-download-option">
      <div className="certificate">
        <div className="title">
          <AiOutlineBulb className="icon" />
          <span>
            <span>Dev</span> Quiz!
          </span>
        </div>

        <div className="body">
          <p>This is to certify that</p>
          <p>Gokul</p>
          <p>
            has successfully completed quiz on React on Dev-Quiz platform, with
            75%
          </p>
          <ImQuotesLeft className="quotes" />
        </div>
      </div>
      <button>Download</button>
    </div>
  );
};
