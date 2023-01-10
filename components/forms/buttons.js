import classNames from 'classnames';
import React from 'react';
import styles from './buttons.module.scss';

const Buttons = props => {
  const { state, Icon, text, size = 'sm', handleClick } = props;

  const btn_states = classNames({
    [styles.btn]: true,
    [styles.primary_state]: state === 'primary',
    [styles.secondary_state]: state === 'secondary',
    [`${styles.auth} primary_line_break`]: state === 'auth',
    [styles.icon_btn]: Icon,
  });

  return (
    <button className={btn_states} onClick={handleClick}>
      {text} {Icon && <Icon />}
    </button>
  );
};

export default Buttons;
