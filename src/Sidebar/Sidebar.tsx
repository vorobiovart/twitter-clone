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

export const Sidebar = () => {
  return (
    <div>
      <Twitter />
      <SidebarOption label="Home" Icon={Home} />
      <SidebarOption label="Explore" Icon={Search} />
      <SidebarOption label="Notifications" Icon={NotificationsNone} />
      <SidebarOption label="Messages" Icon={Message} />
      <SidebarOption label="Bookmarks" Icon={Bookmarks} />
      <SidebarOption label="Lists" Icon={List} />
      <SidebarOption label="Profile" Icon={PermIdentity} />
      <SidebarOption label="More" Icon={MoreHoriz} />
    </div>
  );
};

Sidebar.displayName = 'Sidebar';
