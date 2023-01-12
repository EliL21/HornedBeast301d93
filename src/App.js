// 1st import

import React from 'react';
import Header from './Header';
import Main from './Main';
import SelectedBeast from './SelectedBeast';
import Footer from './Footer';
import data from "./data/data.json"
import Modal  from 'react-bootstrap';




// 2nd Class component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beast: data,
      showModal: false,
      selectedBeast: '',
      title:'',
      image_url:'',
      description:''
    }
  }
    handleOpenModal = (title, image_url, description) => {
      this.setState({
        showModal: true,
        title: title,
        image_url: image_url,
        description: description
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
        <SelectedBeast selectedBeast={this.state.beast}
        title={this.state.title}
        image_url={this.state.image_url}
        description={this.state.description}
        showModal={this.state.showModal}
        handleCloseModal={this.handleCloseModal} />
        
          <Footer />

        </>
        )
  }
}




        // 3RD EXPORT THE component 
        export default App;