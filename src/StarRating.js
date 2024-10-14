import { useState } from "react";
import "./indexs.css";
/*
export default function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate aadventure! Imagine soaring past the stars
        and exploring new world. it's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing, Humans and robots
        are constantly venturing out into the cosmos to uncover it's secerets
        and push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collaspedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collabroration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        resultsare out of this world. Think about the first time humans stepped
        foot on the moon or when rovers sent to roam around on Mars.
      </TextExpander>

      <TextExpander buttonLine={false} className="box" expanded={true}>
        Space missions has given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  children,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "yellow",
  collaspedNumWords = 10,
  expanded = false,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const showDisplayed = isExpanded
    ? children
    : children.split(" ").slice(0, collaspedNumWords).join(" ") + "...";

  const textStyle = { margin: "20px" };
  const buttonStyle = {
    cursor: "pointer",
    color: buttonColor,
    marginLeft: "10px",
  };

  return (
    <div style={textStyle}>
      {showDisplayed}
      <span onClick={() => setIsExpanded((exp) => !exp)} style={buttonStyle}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </span>
    </div>
  );
}
*/
/*
const containerStyle = {
  display: "flex",
  alignitems: "center",
  gap: "10px",
};

const starContsinerStyle = {
  display: "flex",
};

export default function StarRating({
  maxRating = 10,
  color = "#fcc419",
  size = 18,
  className = "",
  messages = [],
  defaultRating = 0,
  onClick,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const textStyle = {
    lightHight: "0",
    margin: "0",
    cursor: "pointer",
    color,
    fontSize: `${size}px`,
  };

  function handleRating(rating) {
    setRating(rating);
    onClick(rating);
  }

  return (
    <div style={containerStyle} className={className}>
      {isOpen ? (
        <div style={starContsinerStyle}>
          {Array.from({ length: maxRating }, (_, i) => (
            <Star
              key={i}
              onClick={() => handleRating(i + 1)}
              onMouseEnter={() => setTempRating(i + 1)}
              onMouseLeave={() => setTempRating(0)}
              full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
              color={color}
              size={size}
            />
          ))}
        </div>
      ) : (
        <div style={starContsinerStyle}>
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              onClick={() => handleRating(i + 1)}
              onMouseEnter={() => setTempRating(i + 1)}
              onMouseLeave={() => setTempRating(0)}
              full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
              color={color}
              size={size}
            />
          ))}
        </div>
      )}
      <div onClick={() => setIsOpen((is) => !is)} style={textStyle}>
        {isOpen ? "Show less" : "Show more"}
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </div>
    </div>
  );
}

function Star({ onClick, full, onMouseEnter, onMouseLeave, color, size }) {
  const starStyle = {
    width: `${size}px`,
    height: `${size}px`,
    display: "block",
    cursor: "pointer",
    color,
    fontSize: `${size}px`,
  };

  return (
    <span
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={starStyle}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}
*/

const containerStyle = {
  display: "flex",
  alignitems: "center",
  gap: "10px",
};

const starContsinerStyle = {
  display: "flex",
};

const textStyle = {
  lightHight: "0",
  margin: "0",
};

export default function StarRating({ maxRating = 5, color }) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  // function updateRating(rating) {
  //   setRating(rating);
  // }

  return (
    <div style={containerStyle}>
      <div style={starContsinerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            onClick={() => setRating(i + 1)}
            onMouseEnter={() => setTempRating(i + 1)}
            onMouseLeave={() => setTempRating(0)}
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            color={color}
          />
        ))}
      </div>
      <p style={textStyle}>{tempRating || rating || ""}</p>
    </div>
  );
}

const starStyle = {
  width: "27px",
  height: "27px",
  display: "block",
  cursor: "pointer",
};

function Star({ onClick, full, onMouseEnter, onMouseLeave, color }) {
  return (
    <span
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      role="button"
      style={starStyle}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}

/*
FULL STAR

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 20 20"
  fill="#000"
  stroke="#000"
>
  <path
    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
  />
</svg>


EMPTY STAR

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="#000"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="{2}"
    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
  />
</svg>

*/
