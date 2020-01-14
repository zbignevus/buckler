import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';



const TopicDetail = () => (
  <div>
    <h1>TOPIC DETAIL PAGE</h1>
  </div>
)

const TopicsList = (props) => {
  console.log(props)
  return <div>
    <h1>TOPICS LIST</h1>
  </div>
}

const HatsPage = () => (
  <h1>HATS PAGE</h1>
)

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/topics' component={TopicsList} />
      <Route exact path='/hats' component={HatsPage} />
      <Route path='/topics/:topicId' component={TopicDetail} />
    </Switch>
  );
}

export default App;
