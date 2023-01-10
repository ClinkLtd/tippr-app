import React from 'react';
import styles from './list-card.module.scss';
import Add from 'assets/images/add.svg';
import classNames from 'classnames';

const ListCard = props => {
  const { Icon, listItems, title } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={'text_body'}>{title}</span>
        <button className={''}>
          <Add />
        </button>
      </div>

      {!listItems.length && (
        <div className={styles.empty_state}>
          <Icon />
        </div>
      )}
    </div>
  );
};

export default ListCard;
