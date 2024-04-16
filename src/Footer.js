import React from 'react';

const Footer = ({items}) => {
        let completedItems = items.filter(items => items.isChecked).length;
    return (
        <div>
            <p>You have {items.length} item in your list, and you already completed {completedItems}</p>
        </div>
    );
}

export default Footer;
