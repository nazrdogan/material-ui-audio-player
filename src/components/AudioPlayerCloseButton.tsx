import * as React from 'react';

import Close from '@mui/icons-material/Close';
import cx from 'classnames';
import {  makeStyles } from '@mui/material/styles';

import { IAudioPlayerColors, Icons } from './AudioPlayer';

export const useComponentStyles = makeStyles({
  icon: (props: any) => ({
    color: props.playerColors.active,
    position: 'absolute',
    top: 2,
    right: 2,
    fontSize: 16,
    cursor: 'pointer',
    '&:hover': {
      color: props.playerColors.hover,
    },
  }),
});

interface IAudioPlayControlProps {
  playerColors: IAudioPlayerColors;
  onClose: () => void;
  icons?: Icons;
  classNames?: any;
}

const AudioPlayCloseButton: React.FunctionComponent<IAudioPlayControlProps> = ({
  playerColors,
  onClose,
  icons = {},
  classNames = {},
}) => {
  const { CloseIcon = Close } = icons;
  // @ts-ignore
  const classes = useComponentStyles({ playerColors });
  return (
    <CloseIcon
      onClick={onClose}
      className={cx(classes.icon, classNames.closeIcon)}
    />
  );
};

export default React.memo(AudioPlayCloseButton);
