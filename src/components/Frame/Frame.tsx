import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import classNames from 'classnames';
import { Container, Sidebar, Sidenav, Content, Nav, DOMHelper } from 'rsuite';
import { Outlet } from 'react-router-dom';
import NavToggle from './NavToggle';
import Header from '../Header';
import NavLink from '../NavLink';
import HeaderLogo from '../Header/HeaderLogo';

const { getHeight, on } = DOMHelper;

const NavItem = props => {
  const { title, eventKey, ...rest } = props;
  return (
    <Nav.Item eventKey={eventKey} as={NavLink} {...rest}>
      {title}
    </Nav.Item>
  );
};

export interface NavItemData {
  eventKey: string;
  title: string;
  icon?: any;
  to?: string;
  target?: string;
  children?: NavItemData[];
}

export interface FrameProps {
  navs: NavItemData[];
  children?: React.ReactNode;
}



const Frame = (props: FrameProps) => {
  const { navs } = props;
  const [expand, setExpand] = useState(false);
  const [windowHeight, setWindowHeight] = useState(getHeight(window));

  useEffect(() => {
    setWindowHeight(getHeight(window));
    const resizeListenner = on(window, 'resize', () => setWindowHeight(getHeight(window)));

    return () => {
      resizeListenner.off();
    };
  }, []);

  
  const urlsWoutSide = ['/sign-up','/sign-in', '/'];
  const isLoginPage = urlsWoutSide.includes(useLocation().pathname);
  const containerClasses = classNames('page-container', {
    'container-full': !expand || isLoginPage
  });
  const navBodyStyle: React.CSSProperties = expand
    ? { height: windowHeight - 112, overflow: 'auto' }
    : {};

  return (
    <Container className="frame">
      <Sidebar
        style={{ display: isLoginPage? 'none' : 'flex', flexDirection: isLoginPage ? 'unset' : 'column'   }}
        width={expand && !isLoginPage ? 260 : 56}
        collapsible
      >
        <Sidenav.Header>
          <HeaderLogo expand={expand} />
        </Sidenav.Header>
        <Sidenav  expanded={expand} appearance="subtle" defaultOpenKeys={['2', '3']}>
          <Sidenav.Body style={navBodyStyle}>
            <Nav>
              {navs.map(item => {
                const { children, ...rest } = item;
                if (children) {
                  return (
                    <Nav.Menu key={item.eventKey} placement="rightStart" trigger="hover" {...rest}>
                      {children.map(child => {
                        return <NavItem key={child.eventKey} {...child} />;
                      })}
                    </Nav.Menu>
                  );
                }

                if (rest.target === '_blank') {
                  return (
                    <Nav.Item key={item.eventKey} {...rest}>
                      {item.title}
                    </Nav.Item>
                  );
                }

                return <NavItem key={rest.eventKey} {...rest} />;
              })}
            </Nav>
          </Sidenav.Body>
        </Sidenav>
        <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
      </Sidebar>

      <Container className={containerClasses}>
        <Header />
        <Content>
          <Outlet />
        </Content>
      </Container>
    </Container>
  );
};

export default Frame;
