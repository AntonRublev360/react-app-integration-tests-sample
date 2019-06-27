import { connect } from 'react-redux';
import UserSelectionForm from './UserSelectionForm';
import * as userSelectors from '../store/user/selectors';
import * as userActions from '../store/user/actions';

export default connect(
  (state) => ({
    username: userSelectors.getUsername(state)
  }),
  userActions
)(UserSelectionForm);
