import React from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export const Layout = (props: any) => (
  <div>
    <NavMenu />
    <Container>
      {props.children}
    </Container>
  </div>
)

Layout.displayName = Layout.name;
