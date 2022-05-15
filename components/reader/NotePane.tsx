import { css } from '@emotion/react';
import React from 'react';

type Props = {
	isOpen: boolean;
};

const classes = css({});

function NotePane({ isOpen = false }: Props) {
	if (!isOpen) return null;

	return (
		<div
			css={{
				flex: 1,
			}}>
			NotePane
		</div>
	);
}

export default NotePane;
