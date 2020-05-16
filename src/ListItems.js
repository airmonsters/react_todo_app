import React from 'react';
import './ListItems.css';
import { DeleteOutlined, CheckOutlined } from "@ant-design/icons";
function ListItems(props){
    const items = props.items;
    const listItem = items.map(
        item =>{
            return (
              <div className= {item.line? "list" + " " + "list-line" : "list" } key={item.key}>
                <p>
                  <span> {item.text} </span>
                  <span className='done'>
                    <CheckOutlined onClick ={()=>{props.lineItem(item.key)}} />
                  </span>
                  <span className='delete'>
                    <DeleteOutlined onClick={ ()=>{props.deleteItem(item.key);} } />
                  </span>
                </p>
              </div>
            );
        }
    )
    return(
        <h1> {listItem}</h1>
    )
}

export default ListItems;