import React from 'react';
import Tasks from './Tasks';

const ItemList = ({ items, onDeleteItem, onCheckedItem }) => {
    return (
        <div>
            <ul className="flex">
            {/* {items.map(i => <Tasks itemObj = {i}/>)} */}
            {items.map((item) => (<Tasks itemList = {item} key={item.name} onDeleteItem={onDeleteItem} onCheckedItem={onCheckedItem}/>
            ))}
            </ul>
        </div>
    );
}

export default ItemList;
