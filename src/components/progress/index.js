import { useState, useEffect } from "react";
import "./styles.css";

export default function Progress({ percentage }) {
  const [style, setStyle] = useState({});
  const [completedStyle, setCompletedStyle] = useState({});
  const [count, setCount] = useState(0);
  const firstVal = percentage - Math.floor(percentage * 0.4);
  const secondVal = percentage - Math.floor(percentage * 0.1);
  // Had problems showing decimals so the text below shows when the percentage gets to what has been set
  const finalVal = "117,83%";

  useEffect(() => {
    //speed the counting till Percentage - 10
    if (count < firstVal) {
      setTimeout(() => {
        const newStyle = {
          opacity: 1,
          width: `${count}%`,
        };
        setStyle(newStyle);
        setCount(count + 1);
      }, 400);
    } else if (count < secondVal) {
      setTimeout(() => {
        const newStyle = {
          opacity: 1,
          width: `${count}%`,
          transition: "1s ease-in",
        };
        setStyle(newStyle);
        setCount(count + 1);
      }, 580);
    } else if (count < percentage) {
      setTimeout(() => {
        const newStyle = {
          opacity: 1,
          width: `${count}%`,
        };

        const completedStyle = {
          opacity: 1,
          width: `100%`,
        };
        setStyle(newStyle);
        setCompletedStyle(completedStyle);
        setCount(count + 1);
      }, 1500);
    }
  }, [count]);

  return (
    <div className="progress">
      {count >= 100 ? (
        <>
          {count === percentage ? (
            <div className="progress-text" style={style}>
              {finalVal}
            </div>
          ) : (
            <div className="progress-text" style={style}>
              {count}%
            </div>
          )}

          <div className="progress-done-2" style={style}></div>
          <div
            className="progress-done"
            style={{ width: "100%", opacity: 1 }}></div>
        </>
      ) : (
        <div className="progress-done" style={style}>
          {count}%
        </div>
      )}
    </div>
  );
}
