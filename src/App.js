import React from 'react';
import './App.css'
import ListItems from './ListItems';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [],
            currentItem:{
                text: '',
                key: '',
                line: false,
            },
        }
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.lineItem = this.lineItem.bind(this);
    }
    handleInput(e){
        this.setState(
            {
                currentItem:{
                    text: e.target.value,
                    key: Date.now(),
                    line: false,
                }
            }
        )
    }
    addItem(e){
        e.preventDefault();
        const newItem = this.state.currentItem;
        if(newItem.text !==""){
            const newItems = [...this.state.items, newItem];
            this.setState(
                {
                    items:newItems,
                    currentItem:{
                        text:'',
                        key:'',
                        line:false,
                    }
                }
            )
        }
    }
    deleteItem(key){
        const filterItem = this.state.items.filter(item => item.key!==key);
        this.setState(
            {
                items:filterItem,
            }
        )
    }

    lineItem(key){
        const new_items = this.state.items;
        new_items.map(item =>{
            if(item.key === key){
                item.line = !item.line;
            }
        })
        this.setState(
            {
                items: new_items,
            }
        )
    }

    render(){
        return(
            <div className='App'>
                <header id= 'to-do-form'>
                    <input type= 'text' 
                    placeholder='Enter Text' 
                    value = {this.state.currentItem.text}
                    onChange = {this.handleInput}
                    />
                    <button type= 'submit' onClick = {this.addItem}>Add</button>
                </header>
                <ListItems items= {this.state.items} deleteItem = {this.deleteItem} lineItem = {this.lineItem}></ListItems>
            </div>
        )
    }
}

export default App;