import React from 'react';
import {OverridableComponent} from '@material-ui/core/OverridableComponent';
import {SvgIconTypeMap} from '@material-ui/core/SvgIcon/SvgIcon';

import s from './SidebarOption.module.scss';

type SidebarOptionProps = {
  label: string;
  Icon: OverridableComponent<SvgIconTypeMap>;
};

export const SidebarOption = ({label, Icon}: SidebarOptionProps) => {
  return (
    <div className={s.root}>
      <div className={s.icon}>
        <Icon />
      </div>
      <h3 className={s.text}>{label}</h3>
    </div>
  );
};

SidebarOption.displayName = 'SidebarOption';
