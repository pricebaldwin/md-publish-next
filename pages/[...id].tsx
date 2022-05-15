import makeGraph from 'graph-md-files';
import { useRouter } from 'next/router';
import path from 'path';
import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import PostLayout from '../components/layouts/PostLayout';

export default function Page({ __html }) {
	const router = useRouter();
	const { id } = router.query;
	console.log('id is' + id);

	const openNotes = [];

	return (
		<PostLayout>
			<div dangerouslySetInnerHTML={{ __html }}></div>
		</PostLayout>
	);
}

const GRAPH = makeGraph(path.resolve('docs'), {
	nonexistantLinkMode: 'Link',
});

export async function getStaticPaths() {
	if (!process.env.VAULT_PATH) {
		throw new Error('VAULT_PATH environment variable not set');
	}

	const vaultPath = path.resolve(process.env.VAULT_PATH);
	console.info(`Using vault path: ${vaultPath}`);

	const paths = Object.values(GRAPH.nodes).map((n) => {
		const inVaultPath = path
			.join(path.parse(n.filePath).dir, path.parse(n.filePath).name)
			.replace(vaultPath, '');

		return {
			params: {
				id: inVaultPath.split(path.sep).slice(1),
			},
		};
	});

	console.info(`Found ${paths.length} paths`);
	console.info(...paths);

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const vaultPath = path.join(context.params.id.join(path.sep)) + '.md';
	const fullPath = path.resolve(path.join(process.env.VAULT_PATH, vaultPath));
	const pageNode = Object.values(GRAPH.nodes).find((n) => n.filePath === fullPath);

	const html = await unified()
		.use(remarkParse)
		.use(remarkHtml)
		.process(pageNode.content);

	return {
		props: { ...pageNode, __html: html.value }, // will be passed to the page component as props
	};
}
