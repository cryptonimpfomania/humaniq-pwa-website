import {connect} from 'react-redux';
import SE_HmqHash from 'SE_HmqHash'

function mapStateToProps( state ) {
  const {loading, loaded, txHash, block, numberConfirmations, fromNow, timeStamp, from, to, value, fee, usedByTransaction} = state.hmqHash

  return {loading, loaded, txHash, block, numberConfirmations, fromNow, timeStamp, from, to, value, fee, usedByTransaction};
}

export default connect(mapStateToProps)(SE_HmqHash);
