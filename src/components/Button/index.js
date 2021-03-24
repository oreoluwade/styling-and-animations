import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({
  rounded,
  secondary,
  primary,
  tertiary,
  small,
  large,
  label
}) => {
  const combinedButtonStyles = classnames({
    [styles.btn__default]: true,
    [styles.btn__primary]: primary,
    [styles.btn__secondary]: secondary,
    [styles.btn__tertiary]: tertiary,
    [styles.btn__rounded]: rounded,
    [styles.btn__small]: small,
    [styles.btn__large]: large
  });

  return (
    <button type="button" className={combinedButtonStyles}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string
};

Button.defaultProps = {
  label: 'Button'
};

export default Button;
