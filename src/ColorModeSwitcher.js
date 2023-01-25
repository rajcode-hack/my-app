import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();

  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      // size="md"
      // fontSize="lg"
      // aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      pos={'fixed'}
      top={'fixed'}
      right={'4'}
      zIndex={'overlay'}
      // marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};

export default ColorModeSwitcher;
