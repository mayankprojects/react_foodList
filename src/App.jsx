import { useState } from "react";
import Error from "./components/Error";
import ItemList from "./components/ItemList";
import Container from "./components/Container";
import Foodinput from "./components/Foodinput";
function App() {
  // let items = [];
  


  // let [txt, setTxt] = useState("Write Something...");
  let [items, setItems] = useState([]);

  const keyDown = (e) => {
    if(e.key === 'Enter')
    {
      let arr = [...items ,e.target.value];
      setItems(arr);
    }
  }




  return (
    <>
      <Container>
        <h2 className="text-3xl mb-3 ml-3 text-center">Healthy Foods</h2>
        <Foodinput onkeydown={keyDown}></Foodinput>
        {/* <h3 className="ml-24">{txt}</h3> */}
        <Error items={items}></Error>
        <ItemList items={items}></ItemList>
      </Container>
      <Container>
        <p>These are the healthy food to keep you gut clean and healthy.</p>
      </Container>
    </>
  );
}

export default App;
