import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';

import { S } from './styles';

import { data } from '../data';
import { handleMenu } from '../../../services/menu/menuSlice';

const renderMenuHandler = (item, index, handleMenuAction, menuActive) => {
  const { defaultIcon, activeIcon } = item;

  return (
    <S.MenuHandler key={index} onClick={handleMenuAction}>
      {menuActive ? activeIcon : defaultIcon}
    </S.MenuHandler>
  );
};

const renderMenuItems = (item, index, handleMenuAction, menuActive) => {
  const router = useRouter();
  const { mobileName, icon, link } = item;

  const activeLink = router.pathname === link;

  if (!link) {
    return renderMenuHandler(item, index, handleMenuAction, menuActive);
  }

  return (
    <S.MenuItem key={`${mobileName}_${index}`}>
      <Link href={link} passHref>
        <S.MenuItemLink active={activeLink}>
          <S.MenuItemIcon>{icon}</S.MenuItemIcon>
          <S.MenuItemName>{mobileName}</S.MenuItemName>
        </S.MenuItemLink>
      </Link>
    </S.MenuItem>
  );
};

function MobileMenu({ menuActive, handleMenuAction, showForm }) {
  return (
    <S.Menu active={menuActive} showForm={showForm}>
      <S.MenuContainer>
        {data
          && data.map((item, index) => renderMenuItems(item, index, handleMenuAction, menuActive))}
      </S.MenuContainer>
    </S.Menu>
  );
}

const mapStateToProps = ({ menuService, modalFormService }) => ({
  menuActive: menuService.active,
  showForm: modalFormService.showForm,
});

const mapDispatchToProps = {
  handleMenuAction: handleMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileMenu);
