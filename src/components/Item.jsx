import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const itemStyles = {
  margin: "8px",
  padding: "1em",
  boxShadow: "0 3px 5px rgba(0, 0, 0, 0.137)",
  display: "flex",
  background: "white",
  alignItems: "center"
};

const itemButtonStyles = {
  outline: "none",
  border: "none",
  background: "none",
  fontSize: "24px",
  marginTop: "2px",
  marginLeft: "6px"
};

function Item(props) {
  const [time, setTime] = useState("");
  const { item } = props;

  const getTS = (ts) => {
    let d = dayjs(ts);
    return d.fromNow();
  };

  useEffect(() => {
    setTime(getTS());
    const interval = setInterval(() => {
      setTime(getTS());
    }, 60 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleClick = () => {
    props.onLowerHand(item.id);
  };

  return (
    <div key={item.id} style={{ borderTop: `8px solid ${item.color}`, ...itemStyles }}>
      {item.name} - {item.room} - {time}
      <button style={itemButtonStyles} onClick={handleClick}>
        ✅
      </button>
    </div>
  );
}

export default Item;
