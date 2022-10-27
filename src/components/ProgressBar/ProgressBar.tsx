import "./ProgressBar.css";

export const ProgressBar = () => {
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: "35%" }}></div>
      <span>35%</span>
    </div>
  );
};
