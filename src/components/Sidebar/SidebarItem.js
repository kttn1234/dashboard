import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './Sidebar.scss';

const SiderbarItem = ({ sidebars }) => {
  return (
    <>
      <div className="sidebar__title">
        {sidebars.title}
        <span className="icon icon-down"></span>
      </div>
      <ul className={`sidebar__sub`}>
        {sidebars.sub.map((item, index) => (
          <li className="sidebar__sub-item" key={index}>
            {item.title}
          </li>
        ))}
      </ul>
    </>
  );
};

SiderbarItem.propTypes = {
  sidebars: PropTypes.object,
};
SiderbarItem.defaultProps = {
  sidebars: null,
};
export default SiderbarItem;
