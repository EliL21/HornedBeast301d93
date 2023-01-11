import React from "react";
import Beast from "./Beast"
import data from  "./data/data.json"
import './Main.css'

class Main extends React.Component{
  render (){
    return(
      <>
      <main>
        {data.map(hornedBeast => (
           <Beast 
           title={hornedBeast.title} 
           description={hornedBeast.description}
           image_url={hornedBeast.image_url}
           key={hornedBeast._id}/>
        )
        )
          
        }
      </main>
      
      
      
      
      </>



    )
  }
}
export default Main;