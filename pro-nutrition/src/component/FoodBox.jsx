import React, { Component } from 'react'
import "../styles/foodbox.css"
import FoodData from './FoodData';
import Calories from './calories';

export default class FoodBox extends Component {

    constructor(props){
        super(props);
    
        this.image = this.props.image;
        this.name = this.props.name; 
        this.calories = this.props.calories; 
        this.id = this.props.id

        this.state={
            count:0,
            id:null,
            totalCalories:0
        }
     }
    
     handleCount=(e)=>{
        
        if(e.target.value>=0){
            this.setState({
                count:e.target.value,
                id:this.id,
                totalCalories:this.calories*e.target.value
            })
        }
     }



  render() {
    
    return (
        <div className="box" key={this.key}>
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.name}</strong> <br />
                <small>{this.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" placeholder='enter the number' value={this.state.count>0?this.state.count:""}  onChange={this.handleCount}/>
              </div>
              <div className="control">
                <button className="button is-info">
                  +
                </button>
              </div>
            </div>
          </div>
          <Calories name={this.name} count={this.state.count} calories={this.state.totalCalories}/>

        </article>
      </div>
    )
  }
}
