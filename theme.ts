import { extendTheme } from '@chakra-ui/react';
// eslint-disable-next-line
const tailwindConfig = require('./tailwind.config');

const colors = {
    white: '#fff',
    black: '#000',
    nblue: tailwindConfig.theme.extend.colors.nblue,
    npurple: tailwindConfig.theme.extend.colors.npurple,
    npink: tailwindConfig.theme.extend.colors.npink,
};

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
};

const theme = extendTheme({ colors, config });

export default theme;
