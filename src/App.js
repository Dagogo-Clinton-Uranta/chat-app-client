//YOU HAVE NOT INSTALLED REACT-ROUTER-DOM IN YOUR NPM, MAKE SURE TO DO IT WHEN YOU TRANSFER THIS FILE

 import React from 'react';
 import {BrowserRouter as Router, Route} from 'react-router-dom';
 import Join from  './components/Join/Join.js'
 import Chat from './components/Chat/Chat.js'


 const App =  () => {
    return (
      <Router>
       <Route path = '/' exact component= {Join}/>
       <Route path ='/chat' component ={Chat}/>

{/*IN ROUTES,YOU PASS IN COMPONENTS ,NOT EVEN PROPS, THEY ARE BIG BOYS*/}

      </Router>
    )

 }

 export default App;
