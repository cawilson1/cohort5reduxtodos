import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";
import FilterLink from "../components/FilterLink";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
  filter: ownProps.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  boundVisibilityFilter: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink);
