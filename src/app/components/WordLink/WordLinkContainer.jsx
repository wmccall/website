import { connect } from 'react-redux';
import WordLink from './WordLink';
import { ViewsActions } from '../../views/ducks';

const mapStateToProps = state => ({
  currentWord: state.viewState.pageSequence.slice(-1)[0].word,
  currentType: state.viewState.pageSequence.slice(-1)[0].tagType,
});

const mapDispatchToProps = {
  goForwardPage: ViewsActions.goForwardPage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WordLink);
