import { getCollection } from 'astro:content';

const getPosts = async () => {
    return await getCollection('blog');
};

export default getPosts;
