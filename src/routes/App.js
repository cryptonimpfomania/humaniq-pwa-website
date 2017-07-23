import React, {Component} from 'react';
import * as T from "prop-types";
import MainLayoutContainer from 'containers/MainLayoutContainer'
import {fetchWiki} from "AC/wiki";
import {fetchPartners} from 'AC/otherAPI'
import initialLoad from 'utils/initialLoad'
import {setRoute} from 'AC/navigation'
class AppRoute extends Component {

  static prepareData(store, query, params, location) {
    if(initialLoad()) return;
    store.dispatch(fetchWiki())
    store.dispatch(fetchPartners())
    return store.dispatch(setRoute(location.pathname))
  }

  render() {
    return (
      <MainLayoutContainer>
        {this.props.children}
      </MainLayoutContainer>
    )
  }
}

AppRoute.propTypes = {
  children: T.any.isRequired
};

export default AppRoute;

