import { connect } from 'react-redux';
import Discussion from './Discussion';

const mapStateToProps = state => ({
  type: state.viewState.pageSequence.slice(-1)[0].tagType,
  word: state.viewState.pageSequence.slice(-1)[0].word,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Discussion);
