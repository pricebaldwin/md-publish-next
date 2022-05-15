import styled from '@emotion/styled';

export const HEADER_HEIGHT = '55px';

const StyledHeader = styled.header((theme) => ({
	height: HEADER_HEIGHT,
	padding: '16px 0',
}));

export default function Header() {
	return <StyledHeader>header</StyledHeader>;
}
