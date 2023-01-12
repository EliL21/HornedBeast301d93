import React from "react";
import Beast from "./Beast"
import './Main.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
    }
    handleSelectedBeast = () => {
      
    }
  
  render() {
    return(
      <>
      <main>
      
        <Container>
          <Row xs={1} sm={2} md={3} lg={4}>
        {this.props.data.map((hornedBeast) => (
           <Beast 
           title={hornedBeast.title} 
           description={hornedBeast.description}
           image_url={hornedBeast.image_url}
           key={hornedBeast._id}
           handleOpenModal={this.props.handleOpenModal}
           />
        )
        )
          
        }
        </Row>
        </Container>
      </main>
      
      
      
      
      </>



    )
  }
}
export default Main;