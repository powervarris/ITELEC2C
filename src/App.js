import './App.css';
import Header from './Header';
import Form from './Form';
import ItemList from './ItemList';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item){
        
    setItems((items) =>[...items, item]);

}

const [sortBy, setSortBy] = useState("input");

let sortedItems;
if(sortBy === "input") sortedItems = items;

if(sortBy === "name") sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));

if(sortBy === "checked") sortedItems = items.slice().sort((a,b) => Number(a.isChecked) - Number(b.isChecked));


function handleDeleteItem(id){
  setItems((items) => items.filter((item) => item.id !== id))
}

function handleCheckedItems(id){
    setItems((items) => items.map((item) =>item.id === id ? {...item, isChecked: !item.isChecked}
    : item
    )
    );
}

  function handleDeleteItems(id){

  setItems(items.filter((item) => item.id !== id));
  
}

function setClearItems(){
  const confirmed = window.confirm("Are you sure you want to clear all the items?");
  if (confirmed){
    setItems([]);
  }
}

  return (
    <div className="background">
      <Header />
      <Form onAddItem ={handleAddItems}/>
      <ItemList items = {sortedItems} onDelete={handleDeleteItems} onDeleteItem={handleDeleteItem} onCheckedItem={handleCheckedItems} onClearItem={setClearItems}/>
    
    <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="center">
      <option value="input">Sort by Input</option>
      <option value="name">Sort by Name</option>
      <option value="checked">Sort by check status order</option>
    </select>

    <button onClick={setClearItems} className="center">Clear All Items</button>
    <Footer items={sortedItems}/>
    </div>
  );
}

export default App;
