import * as Yup from 'yup';

import CreateUser from '../../components/CreateUser';
import './styles.css';
import home from '../../@types/screens/Home';

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().min(4).required(),
  lastName: Yup.string().min(4).required(),
  email: Yup.string().email().required(),
});

const Home: React.FC<home> = ({isFetchingCreateUser, createUserMessage, setCreateUser}) => {
  return (
    <div>
      <CreateUser
        initialValues={{ firstName: '', lastName: '', email: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => setCreateUser(values)}
        isFetching={isFetchingCreateUser}
      />
      {isFetchingCreateUser && <div>Loading...</div>}
      {createUserMessage && <div>{createUserMessage}</div>}
    </div>
  );
};

export default Home;
