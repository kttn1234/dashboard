import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import SidebarItem from './SidebarItem';
import './Sidebar.scss';

const SidebarList = ({ sidebars }) => {
  const refItem = useRef();

  useEffect(() => {
    const collection = document.getElementsByClassName('sidebar__item');
    collection[0].classList.add('active');
  }, []);

  const handleClickSidebar = (e) => {
    // const collection = document.getElementsByClassName('sidebar__item');
    // [].forEach.call(collection, (el) => {
    //   el.classList.remove('active');
    // });
    e.currentTarget.classList.toggle('active');
  };
  return (
    <ul className="sidebar__list">
      {sidebars.map((item) => (
        <li key={item.id} className="sidebar__item" ref={refItem} onClick={(e) => handleClickSidebar(e)}>
          <SidebarItem sidebars={item} />
        </li>
      ))}
    </ul>
  );
};

SidebarList.propTypes = {
  sidebars: PropTypes.array,
};

SidebarList.defaultProps = {
  sidebars: null,
};

export default SidebarList;
