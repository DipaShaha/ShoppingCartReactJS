import React, { Component } from 'react';
import './App.css';

export class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      buyItems:['milk','bread','fruit'],
      message:''
    }
  }

  onAddItem=(event)=>{
    event.preventDefault();
    const {buyItems}=this.state;
    const newItem=this.newItem.value;
    const isOnTheList=buyItems.includes(newItem);
    if(isOnTheList){
        this.setState({message:'this item is already on the list'})
    }else{
       newItem!=='' && this.setState({
        buyItems:[...this.state.buyItems,newItem],
        message:''
      })

    }
   
    this.addForm.reset();

  }

  onRemoveItem=(item)=>{
    const newBuyItems=this.state.buyItems.filter(buyItems=>{
        return buyItems!== item;
      });
    this.setState({
        buyItems:[...newBuyItems]
      })
    if(newBuyItems.length===0){
      this.setState({
        message:'Cart is empty Add Item'
      })
    }
  }
  onClearAll=()=>{
    this.setState({
      buyItems:[],
       message:'Cart is empty Add Item'
    })
  }


  render(){
    const {buyItems,message}=this.state; 
  //return r baire
    return (
      <div className="App">
        <h1>Shopping List</h1>

          <form className="form-inline"
           onSubmit={this.onAddItem} ref={input=>this.addForm=input}
          >
            <div className="form-group mb-2"></div>
            <div className="form-group mb-2">
              <label for="inputPassword2" className="sr-only">Add New Item</label>
              <input type="text" className="form-control" id="cartItem" placeholder="Add Item"

              ref={input=>this.newItem=input}
              />
            </div>
            <button type="submit" className="btn btn-primary mb-1">Add</button>
          </form>

        <div className="content">
           {

            (message!=='' || buyItems.length===0) && <p className="message text-danger">{message}</p>
          }
          {buyItems.length>0 &&
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            {buyItems.map(item=>{
                return(
                <tr key={item}>
                  <td>{item}</td>
                  <td className="text-right">
                    <button type="submit" className="btn btn-danger btn-sm" onClick={(e)=>this.onRemoveItem(item)}>
                      Remove
                    </button>
                  </td>
                </tr>
                );
             })
            }
              
            </tbody>
          
          <tfoot>
            <tr>
              <td colspan="2"></td>
              <td className="text-right">
                <button className="btn btn-primary" type="button" onClick={(e)=>this.onClearAll()}>
                  Clear All
                </button>
              </td>
            </tr>
          </tfoot>
          </table>
          }
        </div>
      </div>
    );
  }
}
