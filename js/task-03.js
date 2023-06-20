const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector('.gallery');
let galleryHTML = '';

images.forEach(image => {
  const { url, alt } = image;
  galleryHTML += `
    <li class=size>
      <img src="${url}" alt="${alt}" width=720px height: 1280px>
    </li>
  `;
});

gallery.insertAdjacentHTML('afterbegin', galleryHTML);

