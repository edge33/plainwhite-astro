import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const getPosts = async () => {
    return await getCollection('blog');
};

export const GET: APIRoute = async () => {
    const posts = await getPosts();

    const json = JSON.stringify(
        posts.map(
            ({
                slug,
                body,
                data: { title, subTitle = '', categories, date, tags = [] },
            }) => ({
                title: title,
                'title-lower': subTitle,
                'sub-title': subTitle,
                'sub-title-lower': subTitle.toLowerCase(),
                categories,
                tags: tags.join(', '),
                url: `/${slug}`,
                date,
                content: body.replace(/<[^>]*>/g, '').slice(200),
            })
        )
    );

    return new Response(json, {
        headers: { 'Content-Type': 'application/json' },
    });
};
