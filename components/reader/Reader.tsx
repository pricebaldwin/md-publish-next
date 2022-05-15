import { useTheme } from '@emotion/react';
import React from 'react';
import NotePane from './NotePane';
import PrimaryArticle from './PrimaryArticle';

type Props = {
	children: React.ReactNode;
};

function Reader({ children }: Props) {
	const [notePaneOpen, setNotePaneOpen] = React.useState(false);
	const theme = useTheme();

	return (
		<div
			css={{
				display: 'flex',
				backgroundColor: theme.colors.paleGray,
				height: '100%',
			}}>
			<PrimaryArticle>{children}</PrimaryArticle>
			<NotePane isOpen={notePaneOpen} />
		</div>
	);
}

export default Reader;
