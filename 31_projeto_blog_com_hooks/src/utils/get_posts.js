const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/photos'
];

export const getPosts = async () => {
    // O método map não trabalha de forma assíncrona. Assim, ao receber uma função assíncrona, retorna uma Promise não resolvida. Para obtermos a resposta dessas promises, utilizaremos o método Promise.all.
    const promises = await Promise.all(urls.map( url => fetch(url)));
    const [posts, photos] = await Promise.all(promises.map(promise => promise.json()));
    const completePost = posts.map((post, i) => ({...post, url: photos[i].url}));
    return completePost;
}