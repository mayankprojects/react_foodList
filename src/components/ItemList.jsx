import { useState } from "react";
import Item from "./Item";
import styles from "./ItemList.module.css";
function ItemList({items}) {

  let [arr, setArr] = useState([]);

  const handleBuy = (event, ele) => {
    let temp = [...arr, ele];
    setArr(temp);
  }

  return (
    <>
      <ul className={`${styles.dummy} ml-1`}>
        {items.map((ele, index) => (
          <Item key = {index} item={ele} handleBuy={(event) => handleBuy(event, ele)} bought = {arr.includes(ele)}/>
        ))}
      </ul>
    </>
  );
}

export default ItemList;
