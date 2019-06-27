import { connect } from 'react-redux';
import PublicRepositoriesList from './PublicRepositoriesList';
import * as repositoriesSelectors from '../store/repositories/selectors';
import * as userSelectors from '../store/user/selectors';
import * as repositoriesActions from '../store/repositories/actions';

export default connect(
  (state) => ({
    repositories: repositoriesSelectors.getList(state),
    isFetching: repositoriesSelectors.isFetching(state),
    username: userSelectors.getUsername(state),
    hasError: repositoriesSelectors.hasError(state)
  }),
  repositoriesActions
)(PublicRepositoriesList);
