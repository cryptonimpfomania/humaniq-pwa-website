import React from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('M_ScrollScreen')

const M_ScrollScreen = ({children, desabled}) =>{
  return(
    <div>
      {children}
      {desabled || <div className={cn('screen')}/>}
    </div>
  )
}

M_ScrollScreen.propTypes = {
  children: T.any.isRequired,
};

export default M_ScrollScreen