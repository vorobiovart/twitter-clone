import React from 'react';
import {Sidebar} from '../Sidebar';
import {Outlet} from 'react-router-dom';
import s from './Layout.module.scss';

export const Layout = () => {
  return (
    <div className={s.root}>
      <Sidebar />
      <Outlet />
    </div>
  );
};

Layout.displayName = 'Layout';
