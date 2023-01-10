import React from 'react';
import styles from './badge.module.scss';
import classNames from 'classnames';

const Badge = props => {
  const { text, handleClick } = props;
  if (handleClick) {
    return <button className={classNames(styles.wrapper, 'text_body')}>{text}</button>;
  }
  return <div className={classNames(styles.wrapper, 'text_body')}>{text}</div>;
};

export default Badge;
