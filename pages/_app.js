import { css, Global, ThemeProvider } from '@emotion/react';
import '@fontsource/inter';
import { theme } from '../styles/theme';

const globalStyles = css({
	'body, html, #__next': {
		padding: 0,
		margin: 0,
		height: '100%',
		position: 'relative',
		color: theme.colors.notQuiteBlack,
		fontFamily: theme.typography.fontFamily,
		fontSize: theme.typography.defaultSize,
	},
});

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Global styles={globalStyles} />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
