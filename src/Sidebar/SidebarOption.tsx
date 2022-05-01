import React from 'react';
import {useNavigate} from 'react-router-dom';
import classNames from 'classnames';
import {OverridableComponent} from '@material-ui/core/OverridableComponent';
import {SvgIconTypeMap} from '@material-ui/core/SvgIcon/SvgIcon';

import s from './SidebarOption.module.scss';

type SidebarOptionProps = {
  label: string;
  navigateTo: string;
  active?: boolean;
  Icon: OverridableComponent<SvgIconTypeMap>;
};

export const SidebarOption = ({label, active, navigateTo, Icon}: SidebarOptionProps) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(navigateTo)} className={classNames(s.root, {[s.active]: active})}>
      <div className={s.icon}>
        <Icon />
      </div>
      <h3 className={s.text}>{label}</h3>
    </div>
  );
};

SidebarOption.displayName = 'SidebarOption';
