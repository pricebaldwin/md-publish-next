import { useTheme } from '@emotion/react';
import React from 'react';

type Props = {
	children: React.ReactNode;
};

const MAX_WIDTH = '700px';

function PrimaryArticle({ children }: Props) {
	const theme = useTheme();

	return (
		<article
			css={{
				flex: '0 1 650px',
				maxWidth: '650px',
				padding: theme.spacing.relaxedPadding,
			}}>
			{children}
		</article>
	);
}

export default PrimaryArticle;
