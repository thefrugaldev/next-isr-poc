import fetch from 'node-fetch';

export async function getRandomPhotos() {
  const res = await fetch('https://picsum.photos/v2/list?limit=2');
  const json = await res.json();
  console.log(json);

  const photo = json[0].url;
  const photoIdIndex = photo.lastIndexOf('/');
  const photoId = photo.slice(photoIdIndex + 1);

  return {
    photoId,
  };
}
