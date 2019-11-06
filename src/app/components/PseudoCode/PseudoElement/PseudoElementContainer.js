import { connect } from 'react-redux';
import PseudoElement from './PseudoElement';
import { ViewsActions } from '../../../views/ducks';

const mapStateToProps = state => ({
  hoverCategory: state.viewState.hoverCategory,
  permanentCategory: state.viewState.permanentCategory,
  currentTag: state.viewState.pageSequence.slice(-1)[0].tag,
});

const mapDispatchToProps = {
  goForwardPage: ViewsActions.goForwardPage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PseudoElement);
