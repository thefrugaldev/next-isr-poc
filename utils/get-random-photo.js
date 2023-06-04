import fetch from 'node-fetch';

export async function getRandomPhotos() {
  const res = await fetch(
    'https://api.unsplash.com/photos/random?client_id=Hj85r3szDdH0QuEc6hv9EnxM5NOZ_Zx85wQgNny1S0U',
  );
  const json = await res.json();
  console.log(json);

  const { slug, description, alt_description, likes } = json;

  return {
    slug,
    description,
    alt_description,
    likes,
  };
}
