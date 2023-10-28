/*
THE CREEPY FORTUNE COOKIE 
Author: Gustavo Gómez Macías (Goz)
*/

// Getting elements from DOM
const container = document.getElementById('container');
const cookie_1 = document.getElementById('cookie_1');
const cookie_2= document.getElementById('cookie_2');
const button = document.getElementById('btn');
const message = document.getElementById('message');
const MESSAGES = 'https://codewithgoz.com/creepy_cookie/messages.json';
const anotherCookie = document.getElementById('another_cookie');

// Local Data for cookie's message

const signs = ['Aries', 'Tauro', 'Géminis', 'Cáncer', 
               'Leo', 'Virgo', 'Libra', 'Escorpión', 
               'Sagitario', 'Capricornio', 'Acuario', 'Piscis'];

const options = ['un', 'una'];

const verbs = ['Conocerás a', 'Amarás a', 'Jugaráss videojuegos con', 'Engañarás a', 'Enviadarás a',
               'Te hará el delicioso', 'Conocerás a', 'Conocerás a', 'Te ayudará',
               'Te reconfortará', 'Te hara reir', 'Le harás el delicioso a', 'Te besará',
               'Te contratará', 'Comerás con', 'Te pelearás con', 'Trabajarás con',
               'Besarás', 'Tendras un hijo con', 'Tendras una hija con', 'Te escaparás a un hotel con',
               'Viajarás con', 'Bailarás cumbias con', 'Festejarás con', 'Tu próximo amor será¡',
               'Tu jefe será', 'Viajarás a Paris con', 'Comerás tacos con', 'Comerás tamales con',
               'Comerás langosta con', 'Te bañarás con', 'Viajarás a Dubai con', 'Beberás una copa de vino con',
               'Iras de campamento con', 'Iras al gimnasio con', 'El amor de tu vida es'            
            ];

const adjectives = ['guapísimo/a', 'feí­simo/a', 'que tiene una pata de palo', 'que tiene dientes amarillos',
                    'que tiene 60 años', 'que le gusta usar tanga', 'que vive con su mamá', 'que es sadomasoquista',
                    'que tiene un garfio en lugar de mano', 'gordí­simo/a', 'flaquí­simo/a', 'mamadí­simo/a',
                    'que cojea', 'que tiene ojos hermosos', 'que tiene un cuerpazo', 'que tiene 80 años',
                    'que toca el piano', 'que toca la marimba', 'que toca la flauta', 'que toca guitarra',
                    'que es licenciado/a', 'que es ingeniero/a', 'que es doctor/a', 'que es vagabundo/a', 
                    'que es dientón/a', 'que le huelen los pies', 'que le huele la boca', 'que le huele la cola',
                    'que le gusta el bondage', 'que baila maravilloso', 'que canta maravilloso', 'que esta bien loco/a',
                    'que sólo escucha Arjona', 'que tiene mamitis', 'que tiene una boca hermosa', 'que tiene juanetes',
                    'que está en sus 20s', 'que está en sus 30s', 'que está en sus 40s', 'que está en sus 50s'
                   ]

// Cookie's messages are created with one sentence from a json file and two random sentences generated with local data
async function getMessage(url, message) {
    const res = await fetch(url)
    const data = await res.json()    
    message.innerHTML="";
    const messageText = document.createElement('div')
    messageText.classList.add('message_text')
    messageText.innerHTML = `
    ${data.messages[Math.floor(Math.random() * data.messages.length)].message}.<br>
    Tu número de la suerte es el ${Math.floor(Math.random() * 999)}<br> 
    Atento/a: ${verbs[Math.floor(Math.random() * verbs.length)]} 
    ${options[Math.floor(Math.random() * options.length)]}  
    ${signs[Math.floor(Math.random() * signs.length)]}
    ${adjectives[Math.floor(Math.random() * adjectives.length)]}    `   
    message.appendChild(messageText)
};

// Show link to user after his/her fortune was revealed
function showLinks(container){
  const cookieLinks = document.createElement('div')
  cookieLinks.innerHTML = `
   <div id="cookie_links">
     <a href="https://codewithgoz.com/creepy_cookie/index.html">¿Quieres otra galleta?</a>
   </div>
  `
  container.appendChild(cookieLinks);
}

function move_left(cookie) {
    cookie.classList.add('move-left');
};

function move_right(cookie) {
    cookie.classList.add('move-right');
};

function hide_button(btn) {
    btn.classList.add('hide_button');
};

// Add event listener to button, this triggers all the magic
button.addEventListener('click', () => {
    move_left(cookie_1);
    move_right(cookie_2);
    hide_button(btn);
    getMessage(MESSAGES, message);
    showLinks(container);
});

