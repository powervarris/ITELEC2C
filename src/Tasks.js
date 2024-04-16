import React from 'react';


const Tasks = ( {itemList, onDeleteItem, onCheckedItem} ) => {

    return (
        <div className="box">
                <span className="marginleft">{itemList.quantity}</span>
                <span className={`item-text ${itemList.isChecked ? "checked" : ""}`}>{itemList.name}</span>
                
                <div className="wrapper">
                {/* <button onClick={() => onCheckedItem(itemList.id)}>
                    ✅
                </button> */}
                <input type="checkbox" onClick={() => onCheckedItem(itemList.id)}></input>

                <button onClick={() => onDeleteItem(itemList.id)} className="buttons">
                    🗑️
                    </button>
                </div>
        </div>
    );
}

export default Tasks;
