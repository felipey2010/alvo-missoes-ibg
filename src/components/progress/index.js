import { useState } from "react";
import "./styles.css";

export default function Progress({ percentage }) {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${percentage}%`,
    };

    setStyle(newStyle);
  }, 1);

  return (
    <div className="progress">
      <div className="progress-done" style={style}>
        {percentage}%
      </div>
    </div>
  );
}
