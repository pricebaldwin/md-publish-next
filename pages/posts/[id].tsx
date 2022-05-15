import makeGraph from 'graph-md-files';
import { useRouter } from 'next/router';
import path from 'path';
import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import PostLayout from '../../components/layouts/PostLayout';

export default function Post({ __html }) {
	const router = useRouter();
	const { id } = router.query;

	const openNotes = [];

	return (
		<PostLayout>
			<div dangerouslySetInnerHTML={{ __html }}></div>
		</PostLayout>
	);
}

const GRAPH = makeGraph(path.resolve('public_pkm/posts'), {
	nonexistantLinkMode: 'Link',
});

export async function getStaticPaths() {
	const paths = Object.values(GRAPH.nodes).map((n) => ({
		params: {
			id: n.title,
		},
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const pageNode = Object.values(GRAPH.nodes).find(
		(n) => n.title === context.params.id,
	);

	const html = await unified()
		.use(remarkParse)
		.use(remarkHtml)
		.process(pageNode.content);

	return {
		props: { ...pageNode, __html: html.value }, // will be passed to the page component as props
	};
}
