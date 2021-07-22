import './styles.css';
import button from './../../../@types/components/common/Button';

const Button: React.FC<button> = ({ text, disabled, style, handleSubmit }) => {
  return (
    <button style={style} className='button' type="submit" onClick={handleSubmit} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
