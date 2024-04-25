import React, { Component } from 'react'
import FoodBox from './component/FoodBox'
import FoodData from './component/FoodData'



export default class App extends Component {
    
   constructor(props){
     super(props);
     
     this.state={
       searchWord:""
     }
   }
   
   

  render() {
    console.log(this.state)
    
    
    
    return (
      <div>
        < input type="text" onChange={(e)=>this.setState({searchWord:e.target.value})} style={{marginBottom:"20px"}}/>

        {
          FoodData.filter((ele)=>{
            if(this.state.searchWord){
               return ele.name.includes(this.state.searchWord)
            }
            else{
              return ele
            }
          }).map((ele)=>{
            return <FoodBox image={ele.img} name={ele.name} calories={ele.cal} id={ele.id} key={ele.id}/>
          })
        }


        


         
      </div>
    )
  }
}
