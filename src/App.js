// 1st import

import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Beast from './Beast';


// 2nd Class component
class App extends React.Component{
render(){
  return (
    <>
  <Header />
  <Main />
  <Beast />
  <Footer />

   </>
  )
}
}




// 3RD EXPORT THE component 
export default App;