import createForm from '../common/Form';
import Button from '../common/Button';
import createUser from '../../@types/components/CreateUser';
import './styles.css';

const CreateUser: React.FC<createUser> = ({ values, handleChange, handleSubmit, isValid, dirty, isFetching }) => {
  const disabled = !dirty || !isValid || isFetching;

  return (
    <div className="create-user-container">
      <div className="input-container">
        <input
          className="input"
          placeholder="Firstname"
          type="text"
          name="firstName"
          onChange={handleChange}
          value={values.firstname}
        />
      </div>
      <div className="input-container">
        <input
          className="input"
          placeholder="Lastname"
          type="text"
          name="lastName"
          onChange={handleChange}
          value={values.lastname}
        />
      </div>
      <div className="input-container">
        <input
          className="input"
          placeholder="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={values.email}
        />
      </div>
      <Button
        text="Submit"
        disabled={disabled}
        style={{ opacity: disabled ? 0.6 : 1 }}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default createForm(CreateUser);
