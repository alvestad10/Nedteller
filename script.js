
let intervalId = 0;

const container = document.querySelector('.buttons');
container.addEventListener('click', function(event) {
    const element = event.target;
    let v = document.getElementById('teller').innerHTML
    if (v == 0) {
        v = element.innerText;
    } else {
        v += element.innerText;
    }
    document.getElementsByTagName('output')[0].innerHTML = v;
});

const updateOutput = () => {
    if (document.getElementsByTagName('output')[0].innerHTML == 1) {
        clearInterval(intervalId)
        intervalId = 0;
    }
    document.getElementsByTagName('output')[0].innerHTML -= 1;
}

const startContainer = document.querySelector('.startbutton');
startContainer.addEventListener('click', (event) => {
    intervalId = setInterval(updateOutput, 1000); 
});

const resetContainer = document.querySelector('.resetbutton');
resetContainer.addEventListener('click', (event) => {
    document.getElementsByTagName('output')[0].innerHTML = 0;
    clearInterval(intervalId)
    intervalId = 0;
});

const backContainer = document.querySelector('.backbutton');
backContainer.addEventListener('click', (event) => {
    if (intervalId == 0) {
        const k = document.getElementsByTagName('output')[0].innerHTML;
        document.getElementsByTagName('output')[0].innerHTML = k.substr(0,k.length - 1);
    }
});

