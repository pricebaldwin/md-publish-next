import Reader from '../reader/Reader';
import BaseLayout from './BaseLayout';

export interface Post {}

export interface PostLayoutProps {
	children: React.ReactNode;
}

export default function PostLayout({ children }: PostLayoutProps) {
	return (
		<BaseLayout>
			<Reader>{children}</Reader>
		</BaseLayout>
	);
}
