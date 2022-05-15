import Navbar from '../navbar/Navbar';

export default function BaseLayout({ children }) {
	return (
		<div
			css={{
				display: 'flex',
				height: '100%',
			}}>
			<Navbar />
			<div
				css={{
					display: 'flex',
					flexDirection: 'column',
					flex: 1,
				}}>
				<main
					css={{
						height: '100%',
					}}>
					{children}
				</main>
			</div>
		</div>
	);
}
