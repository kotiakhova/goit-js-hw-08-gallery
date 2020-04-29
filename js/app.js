import images from '../gallery-items.js'; 


const ul = document.querySelector(".js-gallery");

let bigTemplateLine = images.map(elem => createTemplateLine (elem));


function createTemplateLine (obj) {

    // let point = document.createElement('li');
    // point.classList.add('gallery__item');

    // let link = document.createElement("a");
    // link.classList.add('gallery__link');
    // link.setAttribute('href', obj.original);

    // let image = document.createElement('img');
    // image.classList.add('gallery__image');
    // image.setAttribute('src', obj.preview);
    // image.setAttribute('data-source', obj.original);
    // image.setAttribute('alt', "Tulips");

    // link.appendChild(image);
    // point.appendChild(link);

    let point = `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${obj.original}">
      <img
        class="gallery__image"
        src="${obj.preview}"
        data-source="${obj.original}"
        alt="Tulips"
      />
    </a>
  </li>`;


    return point;
}
console.log(bigTemplateLine);
console.log(...bigTemplateLine);

ul.insertAdjacentHTML('afterbegin', bigTemplateLine.join(''));
const modalWindow = document.querySelector('.js-lightbox');


ul.addEventListener("click", (e) => openModal(e));

document.querySelector('button[data-action="close-lightbox"]')
.addEventListener('click', (e) => closeModal(e))

document.querySelector('.lightbox__content')
.addEventListener('click', (e) => closeByModal(e));




function openModal(e) {
    e.preventDefault();
    document.querySelector('img.lightbox__image').setAttribute('src',e.target.getAttribute("data-source"));

    modalWindow.classList.add('is-open'); 
    window.addEventListener('keydown', closeByEscape)

};

function closeByEscape(e) {
    if (e.code !== 'Escape') {

        return;
    } else {
        modalWindow.classList.remove('is-open');
    }
}
function closeModal(e) {
    modalWindow.classList.remove('is-open'); 
    window.removeEventListener('keydown', closeByEscape);
    document.querySelector('img.lightbox__image').setAttribute('src','');

}
function closeByModal(e) {
    if (e.target !== e.currentTarget) {
        return
    } else {
        closeModal(e)
    }

}
