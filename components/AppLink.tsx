import Link from 'next/link';

const path = require('path');

export interface LinkProps {
	children: React.ReactNode;
	href: string;
}

/**
 * Chooses what kind of link to show, based on what has been
 * parsed from the MD.
 *
 * @param param0
 */
export function AppLink({ children, href }: LinkProps): React.ReactElement {
	if (href.startsWith('/pkm/')) return <NoteLink href={href}>{children}</NoteLink>;
	if (href.startsWith('/posts/')) return <PostLink href={href}>{children}</PostLink>;

	return <ExternalLink href={href}>{children}</ExternalLink>;
}

export function ExternalLink({ children, href }: LinkProps): React.ReactElement {
	return (
		<a target='_blank' href={href}>
			{children}
		</a>
	);
}

export function NoteLink({ children, href }: LinkProps): React.ReactElement {
	// const filePath = path.join(process.cwd(), '_pkm', href.replace('/pkm', '/_pkb'));
	// const text = require(filePath + '.md');
	// console.log(filePath);
	// console.log(href);
	return (
		<a>
			<Link href={href}>{children}</Link>
		</a>
	);
}

export function PostLink({ children, href }: LinkProps): React.ReactElement {
	return <Link href={href}>{children}</Link>;
}
