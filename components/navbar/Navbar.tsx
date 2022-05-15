import React from 'react';

type NavProps = {};

function Navbar({}: NavProps) {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<nav
			css={(theme) => ({
				width: isOpen ? '200px' : '65px',
				transition: 'width .5s',
				backgroundColor: theme.secondaryColor,
			})}
			onClick={() => setIsOpen(!isOpen)}>
			navbar
		</nav>
	);
}

export default Navbar;
