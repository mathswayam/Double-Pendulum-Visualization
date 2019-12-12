//random
function random(min,max)
{
    return (Math.floor(Math.random() * (max - min + 1 )) + min);
}

// setup canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;