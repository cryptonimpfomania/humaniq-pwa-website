import React, { Component } from 'react';
// import * as T from "prop-types";
import A_H from 'A_H'
import A_P from 'A_P'
import M_InfoBlock from 'M_InfoBlock'
import O_Сrumbs from 'O_Сrumbs'
import A_Container from 'A_Container';
import M_Preloader from 'M_Preloader'
import A_Link from 'A_Link'
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_HmqHash')

class SE_HmqHash extends Component {

  render() {
    const {loading, loaded, txHash, block, numberConfirmations, fromNow, timeStamp, from, to, value, fee, usedByTransaction} = this.props

    return (
      <div>
        <A_Container type='equal'>
          <O_Сrumbs
            path={[
              {name: 'TxHash', url: `/hmq-explorer/transaction-log`},
              {name: txHash, url: `/hmq-explorer/transaction-log/${txHash}`}
            ]}
            notLink
          />
          {loading ? (
            <M_Preloader />
          ) : ( loaded ? (
            <M_InfoBlock>
              <A_H type='hmq-e'>TxHash</A_H>
              <A_P type='hmq-e'>{txHash}</A_P>
              <A_H type='hmq-e'>Block Height</A_H>
              <A_P type='hmq-e'>
                <A_Link to={`/hmq-explorer/block/${block}`} className={cn('asset-stats__hash-link')}>{block}</A_Link>{' '}({numberConfirmations} block confirmations)</A_P>
              <A_H type='hmq-e'>Time Stamp</A_H>
              <A_P type='hmq-e'><span className={cn('from-now')}>{fromNow}</span>{' '}({timeStamp})</A_P>
              <A_H type='hmq-e'>From</A_H>
              <A_P type='hmq-e'><A_Link to={`/hmq-explorer/token-holders/${from}`}>{from}</A_Link></A_P>
              <A_H type='hmq-e'>To</A_H>
              <A_P type='hmq-e'><A_Link to={`/hmq-explorer/token-holders/${to}`} >{to}</A_Link></A_P>
              <A_H type='hmq-e'>Value</A_H>
              <A_P type='hmq-e'>{value}</A_P>
              <A_H type='hmq-e'>Actual Tx Cost/Fee</A_H>
              <A_P type='hmq-e'>{fee}</A_P>
              <A_H type='hmq-e'>Total Gas Used by Txn</A_H>
              <A_P type='hmq-e'>{usedByTransaction}</A_P>
            </M_InfoBlock>
            ) : (
              <p>Could not retrieve information from server</p>
            )
          )}

        </A_Container>
      </div>

    )
  }
}

SE_HmqHash.propTypes = {
  // totalTransactions: T.number.isRequired,
  // balance: T.string.isRequired,
  // address: T.string.isRequired
}

SE_HmqHash.defaultProps = {
}

export default SE_HmqHash
