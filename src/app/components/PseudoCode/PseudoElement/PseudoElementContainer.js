import { connect } from 'react-redux';
import PseudoElement from './PseudoElement';
import { ViewsActions } from '../../../views/ducks';

const mapStateToProps = state => ({
  hoverCategory: state.viewState.hoverCategory,
  permanentCategory: state.viewState.permanentCategory,
  currentTag: state.viewState.tag,
});

const mapDispatchToProps = {
  setCurrentTag: ViewsActions.setCurrentTag,
  setCurrentPage: ViewsActions.setCurrentPage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PseudoElement);
