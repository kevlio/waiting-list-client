import React, { useState } from "react";
import styles from "./InputBox.module.css";

const breakoutRooms = Array(12)
  .fill("")
  .map((_, i) => (
    <option value={`BR${i + 1}`} key={"option" + i}>
      BR{i + 1}
    </option>
  ));

function InputBox(props) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("general");
  // Namn, breakout-room

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleRoomChange(e) {
    setRoom(e.target.value);
  }

  return (
    <section className={styles.section}>
      <input
        className={styles.input}
        onChange={handleNameChange}
        placeholder="Namn"
        type="text"
        value={name}
      />
      <div className={styles.container}>
        <div className={styles.selectContainer}>
          <select
            className={styles.select}
            onChange={handleRoomChange}
            value={room}
          >
            <option value="general">General</option>
            {breakoutRooms}
          </select>
        </div>
        <div className={styles.buttons}>
          <button
            className={styles.button}
            onClick={() => props.onRaiseHand(name, room)}
          >
            ✋
          </button>
          <button
            className={styles.button}
            onClick={() => props.onJoinMatchmaking(name)}
          >
            ✋✋
						{props.matchmakeCount > 0 && <div className={styles.dot}>{props.matchmakeCount}</div>}
          </button>
        </div>
      </div>
    </section>
  );
}

export default InputBox;
