import icon from './live-chat.png';
import close from './down-arrow.png'
import facebookIcon from './facebook.png'
import linkedinIcon from './linkedin.png'
import telegramIcon from './telegram.png'
import twitterIcon from './twitter.png'
import './widget.css';

function openChart() {
    const widget = document.createElement('div');
    widget.classList.add('widget-wrapper');
    widget.innerHTML = `<span class="chat-icon"><img src="${icon}" alt="icon-img"></span> 
                        <span class="close-icon d-none"><img src="${close}" alt="icon-img"></span>`;
    const body = document.querySelector('body');
    body.appendChild(widget);

    // adding event listner to the widget icon
    
    const chatIcon = document.querySelector('.chat-icon');
    const closeIcon = document.querySelector('.close-icon');
    chatCard();
    const cardPop = document.querySelector('.card-popup');
    
    chatIcon.onclick = function () {
        if (closeIcon.classList.contains('d-none')) {
            closeIcon.classList.remove("d-none");
            chatIcon.classList.add('d-none');
            cardPop.classList.remove('d-none');
       }
    }
    closeIcon.onclick = function () {
        if (chatIcon.classList.contains('d-none')) {
            chatIcon.classList.remove("d-none");
            closeIcon.classList.add('d-none');
            cardPop.classList.add("d-none");
       }
    }
}

function chatCard() {
    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('card-wrapper');
    cardWrapper.innerHTML = `<div class='d-none card-popup'>
    <div class='main-card'>
        <h2>Hi there 👋</h2>
        <p>Ask us anything, or share your feedback.</p>
    </div>
    <div class ='sub-card'> 
        <div class='social-media'>
         <span class="icon"><img src="${facebookIcon}" alt="icon-img" width='30px' height='30px'></span>
         <span class="icon"><img src="${linkedinIcon}" alt="icon-img" width='30px' height='auto'></span>
         <span class="icon"><img src="${telegramIcon}" alt="icon-img" width='30px' height='auto'></span>
         <span class="icon"><img src="${twitterIcon}" alt="icon-img" width='30px' height='auto'></span>
        </div>
    </div>
    <div><p class='footer'>send a Direct-Message</p></div>
    
    </div>`;
    const body = document.querySelector('body');
    body.appendChild(cardWrapper);
}


function widget() {
    openChart();
    chatCard();
}


export default widget;