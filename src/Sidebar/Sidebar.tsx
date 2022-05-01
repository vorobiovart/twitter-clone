import React from 'react';
import {
  Twitter,
  Home,
  Search,
  NotificationsNone,
  Message,
  Bookmarks,
  List,
  PermIdentity,
  MoreHoriz,
} from '@material-ui/icons';
import {SidebarOption} from './SidebarOption';
import {Button} from '@material-ui/core';

import s from './Sidebar.module.scss';

export const Sidebar = () => {
  return (
    <div>
      <Twitter />
      <SidebarOption navigateTo={'/feed'} active label="Home" Icon={Home} />
      <SidebarOption navigateTo={'/feed'} label="Explore" Icon={Search} />
      <SidebarOption navigateTo={'/notifications'} label="Notifications" Icon={NotificationsNone} />
      <SidebarOption navigateTo={'/feed'} label="Messages" Icon={Message} />
      <SidebarOption navigateTo={'/feed'} label="Bookmarks" Icon={Bookmarks} />
      <SidebarOption navigateTo={'/feed'} label="Lists" Icon={List} />
      <SidebarOption navigateTo={'/feed'} label="Profile" Icon={PermIdentity} />
      <SidebarOption navigateTo={'/feed'} label="More" Icon={MoreHoriz} />
      <Button variant="outlined" className={s.tweetButton} fullWidth>
        Tweet
      </Button>
    </div>
  );
};

Sidebar.displayName = 'Sidebar';
