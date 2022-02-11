/*// H1
const h1 = document.querySelector('h1');
h1.innerText = 'Latest Games.inc';
*/
//image
const img = document.createElement('img');
img.style.maxWidth = '25rem';
img.style.maxHeight = '25rem';

var block = document.getElementById("x");
block.appendChild(img);
//H2
const h2 = document.querySelector('h2');

// P
const p = document.querySelector('p');

// Input's
const input = document.querySelector('input');
const button = document.querySelector('button');
// Statement leder till en handling.
// '=' och '.' Är operatorer i exemplet ovanför.

document.addEventListener('keydown', function(a) {
 if (a.key == 'Enter'){
     refresh();
 }
})
button.addEventListener('click', ()=> {
    refresh(); 
});

function refresh() {
// Bu bir callback-function, variables sadece bir data kaydedebilir, ama Function birden fazlasini kaydeder.

    if (input.value.toLowerCase() === 'cyberpunk') {
        p.innerText = `${input.value.toUpperCase()} Download`;
        p.style.color = 'gold';
        
        img.src = 'https://i.redd.it/362orwejgpb51.jpg';
        
    }
    else if (input.value.toLowerCase() === 'minecraft') {
        p.innerText = `${input.value.toUpperCase()} Download`;
        p.style.color = 'gold';
        img.src = 'https://preview.redd.it/qn06373zk1v51.png?auto=webp&s=28c1c7c34dead0302f60dd198fd3f0848867fe51';
    }
    else if (input.value.toLowerCase() === 'assassins creed valhalla') {
        p.innerText = `${input.value.toUpperCase()} Download`;
        p.style.color = 'gold';
        img.src = 'https://www.psu.com/wp/wp-content/uploads/2020/09/all-ps5-box-art-every-ps5-game-cover-11.jpg';
    }
    else if (input.value.toLowerCase() === 'call of duty cold war') {
        p.innerText = `${input.value.toUpperCase()} Download`;
        p.style.color = 'gold';
        img.src = 'https://www.psu.com/wp/wp-content/uploads/2020/09/all-ps5-box-art-every-ps5-game-cover-14.jpg';
    }
    else if (input.value.toLowerCase() === 'far cry 6') {
        p.innerText = `${input.value.toUpperCase()} Download`;
        p.style.color = 'gold';
        img.src = 'https://www.psu.com/wp/wp-content/uploads/2020/09/all-ps5-box-art-every-ps5-game-cover-13.jpg';
    }
    else if (input.value.toLowerCase() === 'fortnite') {
        p.innerText = `${input.value.toUpperCase()} Download`;
        p.style.color = 'gold';
        img.src = 'https://www.psu.com/wp/wp-content/uploads/2020/09/all-ps5-box-art-every-ps5-game-cover-19.jpg';
    }
    else if (input.value.toLowerCase() === 'godfall') {
        p.innerText = `${input.value.toUpperCase()} Download`;
        p.style.color = 'gold';
        img.src = 'https://www.psu.com/wp/wp-content/uploads/2020/09/all-ps5-box-art-every-ps5-game-cover-10.jpg';
    }
    else if (input.value.toLowerCase() === 'gran turismo 7') {
        p.innerText = `${input.value.toUpperCase()} Download`;
        p.style.color = 'gold';
        img.src = 'https://www.psu.com/wp/wp-content/uploads/2020/09/all-ps5-box-art-every-ps5-game-cover-15.jpg';
    }
    else if (input.value.toLowerCase() === 'hitman 3') {
        p.innerText = `${input.value.toUpperCase()} Download`;
        p.style.color = 'gold';
        img.src = 'https://www.psu.com/wp/wp-content/uploads/2020/09/all-ps5-box-art-every-ps5-game-cover-6-1.jpg';
    }
    else if (input.value.toLowerCase() === 'spider man miles morales') {
        p.innerText = `${input.value.toUpperCase()} Download`;
        p.style.color = 'gold';
        img.src = 'https://www.psu.com/wp/wp-content/uploads/2020/09/all-ps5-box-art-every-ps5-game-cover-3.jpg';
    }
    else if (input.value.toLowerCase() === 'mortal kombat 11') {
        p.innerText = `${input.value.toUpperCase()} Download`;
        p.style.color = 'gold';
        img.src = 'https://www.psu.com/wp/wp-content/uploads/2020/09/all-ps5-box-art-every-ps5-game-cover-8-1.jpg';
    }
    else if (input.value.toLowerCase() === 'outriders') {
        p.innerText = `${input.value.toUpperCase()} Download`;
        p.style.color = 'gold';
        img.src = 'https://www.psu.com/wp/wp-content/uploads/2020/09/all-ps5-box-art-every-ps5-game-cover-11-1.jpg';
    }
    else if (input.value.toLowerCase() === 'riders republic') {
        p.innerText = `${input.value.toUpperCase()} Download`;
        p.style.color = 'gold';
        img.src = 'https://www.psu.com/wp/wp-content/uploads/2020/09/all-ps5-box-art-every-ps5-game-cover-21.jpg';
    }
    else if (input.value.toLowerCase() === 'god of war') {
        p.innerText = `${input.value.toUpperCase()} Download`;
        p.style.color = 'gold';
        img.src = 'https://se.konsolinet.fi/tuotekuvat/god-of-war-ragnarok-ps5-6718-1000x1000.jpg';
    }
    else {
        p.innerText = 'Write the name of a game you play to get a funny line about it!';
    }
      input.value = ''; 
}
         