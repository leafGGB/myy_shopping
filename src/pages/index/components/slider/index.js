import './slider.css';
import './btn.css';

import Slider from './module';

import { getData } from 'api/getData';

getData(
    'https://www.imooc.com/api/mall-PC/index/slider?'
).then(data => {
    console.log(data);
});

const slider = new Slider(document.querySelector('.slider'), {
    initialIndex: 3,
    animation: true,
    //切换速度，单位ms
    speed: 300,
    //自动切换，单位ms
    autoplay: 1000
});

const bannerEl = document.getElementById('banner');
const leftbtnEl = document.getElementById('left_btn');
const rightbtnEl = document.getElementById('right_btn');

leftbtnEl.addEventListener('click', () => {
    slider.prev();
},false);
rightbtnEl.addEventListener('click', () => {
    slider.next();
},false);

bannerEl.addEventListener('mouseenter', () => {
    slider.pause();
},false);
bannerEl.addEventListener('mouseleave', () => {
    slider.autoplay();
},false);