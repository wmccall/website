import { connect } from 'react-redux';
import Definition from './Definition';

const mapStateToProps = state => ({
  type: state.viewState.pageSequence.slice(-1)[0].tagType,
  word: state.viewState.pageSequence.slice(-1)[0].tag,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Definition);
