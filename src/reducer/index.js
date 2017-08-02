import {combineReducers} from 'redux'
// import posts from './posts'
// import post from './post'
// import staticContent from './staticContent'
import navigation from './navigation'
import partners from './partners'
import wikiArticles from './wikiArticles'
import wikiSearch from './wikiSearch'
import hmq from './hmq'
import transactions from './transactions'
import expStatistic from './expStatistic.js'

import personal from './personal'


export default combineReducers({
  navigation,
  partners,
  wikiArticles,
  wikiSearch,
  hmq,
  expStatistic,
  transactions,
  personal
});