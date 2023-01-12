// 1st import

import React from 'react';
import Header from './Header';
import Main from './Main';
import SelectedBeast from './SelectedBeast';
import Footer from './Footer';
import data from "./data/data.json"
import { Modal } from 'react-bootstrap';




// 2nd Class component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: ''
    }
  }
    handleOpenModal = () => {
      this.setState({
        showModal: true

      });
    }
    handleCloseModal = () => {
      this.setState({
        showModal: false,
      });
    }

  
  render() {
    return (
      <>
        <Header />
        <Main data={data} 
        handleOpenModal={this.handleOpenModal}
        />
        {/* <SelectedBeast /> */}
        <Modal show={this.state.showModal} onHide={this.handleCloseModal}> 
          <Modal.Header closeButton>{this.state.selectedBeast}</Modal.Header>
          </Modal>
          <Footer />

        </>
        )
  }
}




        // 3RD EXPORT THE component 
        export default App;