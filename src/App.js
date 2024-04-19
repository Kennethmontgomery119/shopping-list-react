import './App.css';
import React, {useState, useEffect} from 'react';


import ShoppingForm from './Components/ShoppingForm/ShoppingForm';
import ShoppingList from './Components/ShoppingList/ShoppingList';

import './App.css';

function App() {
  const [shoppingList, setShoppingList] = useState([]);
  
  const loadData = () => {
    fetch('https://lljssk-8080.csb.app/api/list')
      .then(x => x.json())
      .then(response => {
        setShoppingList(response);
      });
  };


  useEffect(loadData, []);
 

  const submitItem = (item, quantity) => {
    fetch('https://lljssk-8080.csb.app/api/list/new', {
      method: "POST",
      body: JSON.stringify({
        item,
        quantity
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Accept":"application/json"
      },
      mode: "cors"
    })
      .then(x => x.json())
      .then(loadData);
  }

  const deleteItem = (id) => {
    fetch("https://lljssk-8080.csb.app/api/list/" + id, {
      method: "DELETE",
      headers: {
          "Content-type": "application/json; charset=UTF-8",
      },
      mode: "cors"
    })
      .then((x) => x.json())
      .then(loadData);
  };

  function updateItem(id, item, quantity) {
    fetch(`https://lljssk-8080.csb.app/api/list/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        item: item,
        quantity,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      mode: "cors"
    })
      .then((x)=> x.json())
      .then(loadData);
  }

  

  return(
    <div className="App">
      <header className="App-Header">
        <h1> Shopping List</h1>
      </header>
      <main>
          <ShoppingForm submitItem={submitItem}/>
          <ShoppingList
          items={shoppingList}
          deleteItem={deleteItem}
          updateItem={updateItem} />
      </main>
      <footer className="footer">
        Don't forget your wallet!
      </footer>
    </div>
  );
}


export default App;