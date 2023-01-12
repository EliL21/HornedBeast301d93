import React from "react";
import './Beast.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from "react-bootstrap";




class Beast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: 0,
    }
  }

  handleFavorite = () => {
    this.setState({
      favorite: this.state.favorite + 1,
      // this.props.handleOpenModal()
    }
    );
    this.props.handleOpenModal(this.props.title, this.props.image_url, this.props.description)
  }
  // handleFavoriteClick = () => {
  //   this.props.handleOpenModal(this.props.name)
  // }


  render() {
    return (
      <>

        <Col>
          <Card.Title onClick={this.props.handleOpenModal}></Card.Title>
          <Card style={{ width: '18rem' }}>
            <p>{this.props.title}</p>
            <p>💙{this.state.favorite}Favorite</p>
            <p >Click for favorite!</p>
            <Card.Img src={this.props.image_url} alt={this.props.description} />
            <p>{this.props.description}</p>
            <Button onClick={this.handleFavorite}>Favorite</Button>

          </Card>
        </Col>

      </>
    )
  }
}
export default Beast;