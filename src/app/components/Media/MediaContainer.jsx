import { connect } from 'react-redux';
import Media from './Media';

const mapStateToProps = state => ({
  type: state.viewState.pageSequence.slice(-1)[0].tagType,
  word: state.viewState.pageSequence.slice(-1)[0].word,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Media);
