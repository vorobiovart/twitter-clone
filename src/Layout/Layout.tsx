import React from 'react';
import {Outlet} from 'react-router-dom';
import {Sidebar} from '../Sidebar';
import {Widgets} from '../Widgets';

import s from './Layout.module.scss';

export const Layout = () => {
  return (
    <div className={s.root}>
      <Sidebar />
      <Outlet />
      <Widgets />
    </div>
  );
};

Layout.displayName = 'Layout';
