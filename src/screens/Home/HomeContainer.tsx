import Home from './Home';
import {StoreService} from '../../redux/StoreService';
import {fetchCreateUser} from '../../redux/actions';
import {User} from '../../@types/components/CreateUser';

export const mapStateToProps = (state: any) => ({
  isFetchingCreateUser: state.user.isFetchingCreateUser,
  createUserMessage: state.user.createUserMessage,

});

export const mapDispatchToProps = (dispatch: any) => ({
  setCreateUser: (user: User) => {
    dispatch(fetchCreateUser(user));
  },
});

const HomeContainer = StoreService.connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;