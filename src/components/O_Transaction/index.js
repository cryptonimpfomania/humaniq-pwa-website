import React from 'react';
import * as T from "prop-types";
import O_TransactionPlaceholder from './Placeholder'
import O_TransactionLog from './Log'
import O_TransactionHolder from './Holder'
import O_TransactionMarket from './Market'

const O_Transaction = ({type, ...props}) =>{

  switch(type){
    case 'contentPlaceholder':
      return <O_TransactionPlaceholder {...props} />;
    case 'log':
      return <O_TransactionLog {...props} />;
    case 'holder':
      return <O_TransactionHolder {...props} />;
    case 'market':
      return <O_TransactionMarket {...props} />
  }
}

O_Transaction.propTypes = {
  type: T.oneOf([
    'contentPlaceholder',
    'log',
    'holder',
    'market'
  ]).isRequired,
};

export default O_Transaction