// 1
const mainText = document.querySelector('#main-text');
const mainButton = document.querySelector('#main-button');
mainButton.textContent = mainText.textContent;

// 2
const mainImg = document.querySelector('.main-img');
mainImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMLSVryH7Jm9cImPnmYOqU8FoGApfPnJPDIQ&s'

// 3
const mainLink = document.querySelector('.main-link');
const linkImg = document.querySelector('.link-image');
mainLink.href = './index.js';
linkImg.alt = 'Ultra mega sigma!!!'

// 4
const mainList = document.querySelector('.main-list')
const firstItem = mainList.firstElementChild;
firstItem.textContent = 'em watasegma'
console.log(firstItem);