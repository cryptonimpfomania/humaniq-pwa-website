import React , { Component } from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils';
const cn = cssClassName('hmq-card');
import moment from 'moment';
import {dateString} from 'utils/propsValidationHelpers'
import A_Link from 'A_Link'

class O_TransactionLog extends Component {

  render() {
    const {txHash, block, from, to, time, usdAmount, hmqAmount, status, onTop} = this.props;
    return (
        <div className={cn({onTop, 'type':'transactions'})}>

          <div className={cn('section')}>
            <div className={cn('row')}>
              <div className={cn('label')}>TxHash:</div>
              <A_Link to={`/hmq-explorer/transaction-log/${txHash}`} type='hmq-card'>{txHash}</A_Link>
            </div>
            <div className={cn('row')}>
              {block && <div className={cn('label')}>Block:</div>}
              {block && <A_Link to={`/hmq-explorer/block/${block}`} type='hmq-card'>{block}</A_Link>}
            </div>
          </div>

          <div className={cn('section')}>
            <div className={cn('row')}>
              {from && <div className={cn('label')}>From:</div>}
              {from && <A_Link to={`/hmq-explorer/token-holders/${from}`} type='hmq-card'>{from}</A_Link>}
            </div>
            <div className={cn('row')}>
              {to && <div className={cn('label')}>To:</div>}
              {to && <A_Link to={`/hmq-explorer/token-holders/${to}`} type='hmq-card'>{to}</A_Link>}
            </div>
          </div>

          <div className={cn('section')}>
            <div className={cn('row')}>
              {hmqAmount && <div className={cn('value', {'type': 'hmq'})}>{hmqAmount} HMQ</div>}
            </div>
            <div className={cn('row')}>
              {usdAmount && <div className={cn('value', {'type': 'usd'})}>${usdAmount} USD</div>}
            </div>
          </div>

          <div className={cn('section', {'align-content': 'center'})}>
            <div className={cn('row')}>
              {time && <div className={cn('time-counter', {confirmed: status === 'confirmed'})}>
                {moment(time).fromNow()}
              </div>}
            </div>
          </div>

        </div>
    )
  }
}


O_TransactionLog.propTypes = {
  txHash: T.string.isRequired,
  block: T.number,
  from: T.string,
  to: T.string,
  time: dateString,
  usdAmount: T.string,
  hmqAmount: T.string,
  status: T.string,
};

export default O_TransactionLog