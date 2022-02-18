import React from "react";
import Item from "./Item";
import styles from "./Waitinglist.module.css";

function WaitingList(props) {


  return (
    <div className={styles.list}>
      {props.list.map((item) => (
        <Item item={item} onLowerHand={props.onLowerHand}/>
      ))}
    </div>
  );
}

export default WaitingList;
