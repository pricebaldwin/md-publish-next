import '@emotion/react';
import { Theme } from '@emotion/react';
import spacing from './spacing';

declare module '@emotion/react' {
	export interface Spacing {
		relaxedPadding: string | number;
	}

	export interface Typography {
		defaultSize: string | number;
		body: string;
	}

	export interface Theme {
		primaryColor: string;
		secondaryColor: string;
		colors: {
			paleGray: string;
			notQuiteBlack: string;
			lightBlack: string;
		};
		spacing: Spacing;
		typography: Typography;
	}
}

const colors = {
	paleGray: '#FCFCFA',
	notQuiteBlack: '#1F1F1F',
	lightBlack: '#393939',
};

const typography = {
	defaultSize: '16px',
	body: 'Inter, system-ui, sans-serif',
};

export const theme: Theme = {
	primaryColor: '#00a8ff',
	secondaryColor: '#f5f5f5',
	colors,
	spacing,
	typography,
};
