import React from 'react';
import {Header as HeaderElem} from 'react-native-elements';

interface OwnProps {}

const Header: React.FC<OwnProps> = () => (
  <HeaderElem
    centerComponent={{text: 'PICK', h3: true, h3Style: {color: '#fff'}}}
  />
);

export default Header;
