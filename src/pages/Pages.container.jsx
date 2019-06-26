import { connect } from 'react-redux';
import Pages from './Pages';
import * as userSelectors from '../store/user/selectors';

export default connect(
  (state) => ({
    isEditingUsername: userSelectors.isEditingUsername(state)
  })
)(Pages);
