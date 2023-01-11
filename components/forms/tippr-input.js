import styles from './tippr-input.module.scss';
import classNames from 'classnames';

export default function TipprInput(props) {
  const { name, label, placeholder, handleChange } = props;

  return (
    <div className={styles.input_wrapper}>
      {label && (
        <label className={styles.input_label} htmlFor={name}>
          {label}
        </label>
      )}
      <input
        onChange={handleChange}
        className={styles.input}
        placeholder={placeholder}
        name={name}
        type='text'
      />
    </div>
  );
}