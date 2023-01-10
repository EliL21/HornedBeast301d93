import React from "react";


class Beast extends React.Component {
  render(){
    return(
      <>
      <article>
        <p>{this.props.title}</p>
        <p>{this.props.description}</p>
      </article>
      
      </>
    )
  }
}
export default Beast;