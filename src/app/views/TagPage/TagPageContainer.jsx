import { connect } from 'react-redux';
import TagPage from './TagPage';
import { setCurrentTag, setCurrentPage } from '../ducks/ViewsActions';

const mapStateToProps = state => ({
  allWords: state.viewState.allWords,
  currentTag: state.viewState.tag,
  currentTagType: state.viewState.tagType,
});

const mapDispatchToProps = {
  setCurrentTag,
  setCurrentPage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TagPage);
