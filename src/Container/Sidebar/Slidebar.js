import React from 'react';
import SidebarList from '../../components/Sidebar/SidebarList';

const Slidebar = () => {
  const sidebars = [
    {
      id: 1,
      title: 'Item Parent',
      sub: [
        {
          id: 1,
          title: 'Item Children',
        },
        {
          id: 2,
          title: 'Item Children',
        },
        {
          id: 3,
          title: 'Item Children',
        },
        {
          id: 4,
          title: 'Item Children',
        },
        {
          id: 5,
          title: 'Item Children',
        },
        {
          id: 6,
          title: 'Item Children',
        },
      ],
    },
    {
      id: 2,
      title: 'Item Parent',
      sub: [
        {
          id: 1,
          title: 'Item Children',
        },
        {
          id: 2,
          title: 'Item Children',
        },
        {
          id: 3,
          title: 'Item Children',
        },
        {
          id: 4,
          title: 'Item Children',
        },
        {
          id: 5,
          title: 'Item Children',
        },
        {
          id: 6,
          title: 'Item Children',
        },
      ],
    },
    {
      id: 3,
      title: 'Item Parent',
      sub: [
        {
          id: 1,
          title: 'Item Children',
        },
        {
          id: 2,
          title: 'Item Children',
        },
        {
          id: 3,
          title: 'Item Children',
        },
        {
          id: 4,
          title: 'Item Children',
        },
        {
          id: 5,
          title: 'Item Children',
        },
        {
          id: 6,
          title: 'Item Children',
        },
      ],
    },
    {
      id: 4,
      title: 'Item Parent',
      sub: [
        {
          id: 1,
          title: 'Item Children',
        },
        {
          id: 2,
          title: 'Item Children',
        },
        {
          id: 3,
          title: 'Item Children',
        },
        {
          id: 4,
          title: 'Item Children',
        },
        {
          id: 5,
          title: 'Item Children',
        },
        {
          id: 6,
          title: 'Item Children',
        },
      ],
    },
  ];
  return (
    <div className="sidebar">
      <SidebarList sidebars={sidebars} />
    </div>
  );
};

export default Slidebar;
