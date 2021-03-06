import React from "react";
import { styled, connect, Global } from "frontity";
import { CloseIcon, HamburgerIcon } from "./menu-icon";
import MenuModal from "./menu-modal";

function MobileMenu({ state, actions }) {
  const { isMobileMenuOpen } = state.theme;
  return (
    <>
      <MenuToggle onClick={actions.theme.toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <>
            {/* Add some style to the body when menu is open,
            to prevent body scroll */}
            <Global styles={{ body: { overflowY: "hidden" } }} />
            <CloseIcon color="#27342f" size="20px" />
          </>
        ) : (
          <HamburgerIcon color="#27342f" size="20px" />
        )}
      </MenuToggle>
      {/* If the menu is open, render the menu modal */}
      {isMobileMenuOpen && <MenuModal />}
    </>
  );
}

const MenuToggle = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 2rem;
  background: transparent;
  border: 0;
  color: var(--white);
  z-index: 5;
  height: 40px;
  width: 40px;
  display: none;
  outline: 0;
  transition: all 0.3s ease;
  &:focus {
    outline:0;
  }
  .opensvg, .closesvg {
    transition: all 0.3s ease;
  }
  &:hover {
    .opensvg {
      color:var(--brand);
    }
    .closesvg {
      color:var(--brand);
    }
  }
  // @media (max-width: 768px) {
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  // }
  @media (max-width: 1200px) {
    // display: flex;
    // align-items: center;
    // justify-content: center;

    display: block;
  }
`;

export default connect(MobileMenu);
