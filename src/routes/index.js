import {Route, IndexRoute} from 'react-router'
import React from 'react'
import App from './App'
import Home from './Home'
// import Error from './Error'
import Blog0 from './Blog0'
import SimpleForm from './SimpleForm'
import Partners from './Partners'
import Cases from './Cases'
import Wiki from './Wiki'
import Wiki0 from './Wiki0'
import Wiki1 from './Wiki1'
import Wiki2 from './Wiki2'
import Legal from './Legal'
import WikiSearch from './WikiSearch'
import Hmq from './Hmq'
import Markup from './Markup'

import {cleanWikiSearch} from 'AC/wiki'

const getRoutes = (store) => {
  return (
    <Route
      path="/"
      component={App}
      prepareData={App.prepareData}
    >
      <IndexRoute
        component={Home}
        prepareData={Home.prepareData}
      />
      <Route path="form"
      >
        <Route
           path="join"
           component={SimpleForm}
        />
        <Route
          path="subscribe"
          component={SimpleForm}
        />
      </Route>
      <Route path="wiki" component={Wiki}>
        <IndexRoute component={Wiki0}/>
        <Route
          path="search"
          component={WikiSearch}
          prepareData={WikiSearch.prepareData}
          onLeave={() => store.dispatch(cleanWikiSearch())}
        />
        <Route path=":level0">
          <IndexRoute component={Wiki1}/>
          <Route path=":id" component={Wiki2}/>
        </Route>
      </Route>
      <Route path="use-cases"
             component={Cases}
      />
      <Route path="partners"
             component={Partners}
      />
      <Route path="Legal"
             component={Legal}
      />
      <Route path="blog"
             component={Blog0}
      />
      <Route path="hmq-explorer"
             component={Hmq}
      />
      <Route path="mark-up"
             component={Markup}
      />
      {/*<Route*/}
        {/*path="/error/:err"*/}
        {/*component={Error}*/}
      {/*/>*/}
    </Route >
  )
}


export default getRoutes