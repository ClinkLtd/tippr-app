import React from 'react';
import styles from './list-card.module.scss';
import Add from 'assets/images/add.svg';
import Edit from 'assets/images/edit-dark.svg';

const ListCard = props => {
  const { Icon, listItems, title, update, handleClick } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className='text_body mb-4'>{title}</span>
        <button onClick={handleClick} className=''>
          {!update ? <Add /> : <Edit />}
        </button>
      </div>

      {listItems.length === 0 ? (
        <div className={styles.empty_state}>
          <Icon />
        </div>
      ) : null}

      {listItems.length > 0
        ? listItems.map(listItems => (
            <div className='flex flex-col'>
              <span className='text_body text_dark'>{listItems.label}</span>
              <span className='text_xs'>{listItems.value}</span>
              <span className='text_xs'>{listItems.subtext}</span>
            </div>
          ))
        : null}
    </div>
  );
};

export default ListCard;
