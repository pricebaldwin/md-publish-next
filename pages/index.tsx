import { useRouter } from 'next/router';
export default function Index() {
	const router = useRouter();

	// FIXME: Should be the home route. This kicks routing off to
	// [id].tsx, which is where all routing is done.
	router.push('/something');
}
