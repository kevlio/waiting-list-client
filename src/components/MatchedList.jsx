import React from "react";
import styles from "./Waitinglist.module.css";

const itemStyles = {
  margin: "8px",
  padding: "1em",
  boxShadow: "0 3px 5px rgba(0, 0, 0, 0.137)",
  display: "flex",
  background: "white",
  alignItems: "center",
  flexDirection: "column",
};

const itemButtonStyles = {
  outline: "none",
  border: "none",
  background: "none",
  fontSize: "24px",
  marginTop: "2px",
};

function MatchedList({ matchedWith, socket }) {
  return (
    <div className={styles.list}>
      {matchedWith.length > 0 && (
        <div style={itemStyles}>
          <h3 style={{ margin: "4px" }}>Din grupp:</h3>
          <div style={{ display: "flex", fontSize: "1.2em", margin: "4px", maxWidth: "60ch" }}>
            {matchedWith.map((m) => m.name).join(", ")}
          </div>
          <label
            style={{ display: "flex", alignItems: "center", marginTop: "12px" }}
          >
            Nöjd?
            <button
              onClick={() => socket.emit("matchmake:done")}
              style={itemButtonStyles}
            >
              ✅
            </button>
          </label>
          <label style={{ opacity: "0.5" }}>
            (Glöm inte att hitta ett BR först!)
          </label>
        </div>
      )}
    </div>
  );
}

export default MatchedList;
