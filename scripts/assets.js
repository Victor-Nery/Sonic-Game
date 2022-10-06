const sonic = document.querySelector('.sonic');
const pipe = document.querySelector('.pipe');

const jump = () => {
    sonic.classList.add('jump');

    setTimeout(() => {

       sonic.classList.remove('jump')

    },500)
}


const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px','')
   console.log(sonicPosition);

    if (pipePosition <= 170 && pipePosition > 0 && sonicPosition < 100){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        sonic.style.animation = 'none';
        sonic.style.bottom = `${sonicPosition}px`;

        sonic.src = 'styles/sonic-death.png'
        sonic.style.width = '200px'
        sonic.style.marginLeft = '50px' 
        
        clearInterval(loop);
    }

    

},10);

document.addEventListener('keydown',jump);