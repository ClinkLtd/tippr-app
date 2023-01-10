import React from 'react';
import Camera from 'assets/images/camera.svg';
import classNames from 'classnames';
import styles from './eclipse-image-picker.module.scss';

const EclipseImagePicker = props => {
  const {} = props;
  return (
    <div className={classNames(styles.wrapper, 'primary_line_break')}>
      <Camera />
      <input type='file' />
    </div>
  );
};

export default EclipseImagePicker;
