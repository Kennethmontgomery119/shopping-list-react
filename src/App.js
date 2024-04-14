import './App.css'; 
import ShoppingForm from './Components/ShoppingForm/ShoppingForm'; 
import ShoppingList from './Components/ShoppingList/ShoppingList'; 
 

function App() { 
  return ( 
    <div className="App"> 
      <header className="App-header"> 
        <h1>Shopping List</h1> 
      </header> 
      <main> 
        <ShoppingForm /> 
        <ShoppingList /> 
      </main> 
    </div> 
  ); 
} 
 
export default App; 