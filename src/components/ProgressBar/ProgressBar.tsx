import "./ProgressBar.css";

export const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
      <span>{progress}%</span>
    </div>
  );
};
