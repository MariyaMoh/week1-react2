export type Post = { title: string; description: string; image: string };

globalThis.post = globalThis.post ?? [{ title: 'Cute cat', description:"Candy Cat and Peppa Pig go to the same playgroup along with Suzy Sheep, Danny Dog, Rebecca Rabbit, and Pedro Pony.", image: 'https://www.hillspet.com/content/dam/cp-sites/hills/hills-pet/en_us/exported/cat-care/Skyword/images/a-large-gray-cat-coffee_325261_ref.png'}];

export function getPost(): Post[] {
  return globalThis.post;
}

export function addPost(post: Post) {
  globalThis.post.push(post);
}
