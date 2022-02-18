import React, { useCallback, useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ReactCanvasConfetti from "react-canvas-confetti";

dayjs.extend(relativeTime);

function Item(props) {
  const [time, setTime] = useState();
  const { item } = props;

  const getTS = (ts) => {
    let d = dayjs(ts);
    return d.fromNow();
  };

  const handleClick = () => {
    props.onLowerHand(item.id);
  };

  return (
    <div key={item.id} style={{ color: item.color }}>
      {item.name} - {item.room} - {getTS(item.timestamp)}
   
      <button onClick={handleClick}>✅</button>
    </div>
  );
}

export default Item;
