import {
	defineComputedFields,
	defineDocumentType,
	makeSource,
} from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehpyeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

const computedFields = defineComputedFields({
	slug: {
		type: 'string',
		resolve: doc => `/${doc._raw.flattenedPath}`,
	},
	slugAsParams: {
		type: 'string',
		resolve: doc => doc._raw.flattenedPath.split('/').slice(1).join('/'),
	},
});

export const Post = defineDocumentType(() => ({
	name: 'Post',
	filePathPattern: `blog/*.mdx`,
	contentType: 'mdx',
	fields: {
		title: {
			type: 'string',
			required: true,
		},
		description: {
			type: 'string',
			required: true,
		},
		publishedAt: {
			type: 'string',
			required: true,
		},
		image: {
			type: 'string',
		},
		keywords: {
			type: 'string',
			required: true,
		},
	},
	computedFields,
}));

export const Snippet = defineDocumentType(() => ({
	name: 'Snippet',
	filePathPattern: `snippets/*.mdx`,
	contentType: 'mdx',
	fields: {
		title: {
			type: 'string',
			required: true,
		},
		description: {
			type: 'string',
			required: true,
		},
		publishedAt: {
			type: 'string',
			required: true,
		},
		image: {
			type: 'string',
		},
	},
	computedFields,
}));

export default makeSource({
	contentDirPath: 'src/content',
	documentTypes: [Post, Snippet],
	mdx: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			rehpyeSlug,
			[
				rehypePrettyCode,
				{
					theme: 'github-dark',
					keepBackground: false,
					onVisitLine(node: any) {
						// Prevent lines from collapsing in `display: grid` mode, and allow empty
						// lines to be copy/pasted
						if (node.children.length === 0)
							node.children = [{ type: 'text', value: ' ' }];
					},
					onVisitHighlightedLine(node: any) {
						node.properties.className.push('line-highlighted');
					},
					onVisitHighlightedWord(node: any) {
						node.properties.className.push('word-highlighted');
					},
				},
			],
			[
				rehypeAutolinkHeadings,
				{
					properties: {
						className: ['anchor'],
						ariaLabel: 'Link to section',
					},
				},
			],
		],
	},
});
