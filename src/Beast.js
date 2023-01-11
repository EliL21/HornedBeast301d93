import React from "react";
import './Beast.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';




class Beast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: 0,
    }
  }

  handleFavorite = () => {
    this.setState({
      favorite: this.state.favorite + 1
    })
  }

  render() {
    return (
      <>
      
      
        <Card style={{ width: '18rem' }}>
          <p>{this.props.title}</p>
          <p>💙{this.state.favorite}Favorite</p>
          <p onClick={this.handleFavorite}>Click for favorite!</p>
          <Card.Img src={this.props.image_url} alt={this.props.description} />
          <p>{this.props.description}</p>
          <Button>Favorite</Button>

        </Card>
        

      </>
    )
  }
}
export default Beast;