import React, { Component } from 'react'

const Home = (props) => {
  return (
    <div className="home">
      <h1>Q. Select a Dropdown Options?</h1>
      <button onMouseEnter={props.handleMouseEnter}>
        <span>Select</span>{" "}
        <i
          className={
            props.isShow ? "fa-solid fa-angle-down" : "fa-solid fa-angle-right"
          }
        ></i>
      </button>
    </div>
  );
};


const Dropdown = (props) => {
  return (
    <div className="dropdown">
      {props.items.map((item) => (
        <p key={props.items.indexOf(item)} onClick={() => props.handleOnClick(item)}>{item}</p>
      ))}
    </div>
  );
};


export default class App extends Component {
  constructor(){
    super();
    this.state ={
      isShow:false,
      selected:"Not Selected",

      // items array
      items:["Yes","Probably Not","I don't know"]
    } 
  }
  // On hovering of the button, show the drop down items function
  handleMouseEnter=()=>{
    this.setState({
      isShow:true
    })
  }


  // On click of an option in dropdown list, close the dropdown function
  handleOnClick=(item)=>{
    this.setState({
      isShow:false,
      selected:item
    })
  }

  render() {
    return (
      <div className='app'>
        <Home isShow={this.state.isShow} handleMouseEnter={this.handleMouseEnter}/>
        {this.state.isShow?<Dropdown items={this.state.items} handleOnClick={this.handleOnClick}/>:""}
        <p className='ans-p'>Ans. {this.state.selected}</p>
      </div>
    )
  }
}

