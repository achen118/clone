import { connect } from 'react-redux';
import TagsHeader from './tags_header';

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(
  mapStateToProps
)(TagsHeader);
