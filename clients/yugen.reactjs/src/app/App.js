import React from 'react'
import ImageCard from './components/image-card'
import ActionCard from './components/action-card'
import './styles/app.scss'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams,
//   useHistory
// } from 'react-router-dom';

class App extends React.Component {
  render() {
      return (
        <div>
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard>
            <ActionCard />
          </ImageCard>
        </div>
    )
  }
}


export default App;
