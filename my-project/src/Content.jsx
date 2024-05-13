import React from 'react'
import { useState } from 'react';
import {FaTrashAlt}from 'react-icons/fa'

const Content = () => {
    const [items, setItems] =useState([
        {
            id:1,
            checked:true,
            item:"One half pound bag of cocoa Covered Cookies"
        },
        {
            id:2,
            checked:false,
            item:"item2"
        },
        {
            id:3,
            checked:false,
            item:"item3"
        }
    ]);

    const handleClick = (id) => {
        const newItems = items.map((item)=>{
            if(item.id === id){
                return{
                    ...item,
                    checked: !item.checked,
                }
            }
            return item;
        });
        setItems(newItems);
        localStorage.setItems('shoppingList', JSON.stringify(newItems))
    };

  return (
    <div>
       <ul>
        {items.map((item)=>(
            <li className='item' key={item.id}>
                <input type="checkbox"

                onChange={()=> handleClick(item.id)}
                checked={item.checked} 
                />
                <label style={(item.checked) ? {textDecoration: 'line-through'} : null} onDoubleClick={() => handleClick(item.id)}>
                    {item.item}</label>
                <FaTrashAlt 
                role='button' 
                tabIndex="0" 
                 />
            </li>
        ))}
       </ul>
    </div>
    
  )
}

export default Content
