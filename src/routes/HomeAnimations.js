import React, {Component} from 'react';
import HomeContainer from 'containers/HomeContainer'
import initialLoad from 'utils/initialLoad'

class HomeRoute extends Component {

  static prepareData() {
    if(initialLoad()) return;
  }

  render() {
    return (
      <HomeContainer animation/>
    )
  }
}

export default HomeRoute;