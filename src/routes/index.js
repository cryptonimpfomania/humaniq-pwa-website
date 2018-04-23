import {Route, IndexRoute} from 'react-router'
import React from 'react'
import About from './About'
import App from './App'
import AppOld from './App_old'
import Home from './Home'
import Error from './Error'
import ContactUs from './ContactUs'
import legal from './Legal'
import OpenSource from './OpenSource'
import Ambassadors from './Ambassadors'
// import HmqExplorer from './Hmq'
import Wiki from './Wiki'
import careers from './Careers'
import pressReleases from './PressReleases'

const getRoutes = (store) => {
  return (
    <Route
      path="/"
      prepareData={App.prepareData}
    >
      <Route
        component={App}
      >
        <IndexRoute
          component={Home}
        />
        {legal}
        {/*{HmqExplorer(store)}*/}
        {careers}
        {pressReleases}
        <Route path="open-source"
               prepareData={OpenSource.prepareData}
               component={OpenSource}
        />
        <Route path="ambassadors"
               prepareData={Ambassadors.prepareData}
               component={Ambassadors}
        />
        <Route path="contact-us"
               component={ContactUs}
               prepareData={ContactUs.prepareData}

        />
        <Route
          path="/about"
          component={About}
          prepareData={About.prepareData}
        />
        <Route
          path="/error/:err"
          prepareData={Error.prepareData}
          component={Error}
        />

      </Route>

      <Route
        component={AppOld}
      >
        {Wiki(store)}
      </Route>

      <Route
        component={App}
      >
        <Route
          path="*"
          prepareData={Error.prepareData}
          component={Error}
        />
      </Route>

    </Route >
  )
}


export default getRoutes