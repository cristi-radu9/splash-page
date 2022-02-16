const { body }= document;
const brand = document.getElementById('brand-name');

console.log('brand',brand)

function changeBackground2(){
    body.classList.add('background-2');
    brand.style.color="#F3F8F7";
}

function changeBackground3(){
    body.classList.add('background-3');
    brand.style.color="#F3F8F7";
}

function changeBackground(number){
    let previousBackground;
    if(body.className){
        previousBackground=body.className;
    }
    body.className='';
    brand.style.color=""
    console.log(brand)
    switch(number){
        case '1':
            return(previousBackground === 'background-1' ? false : body.classList.add('background-1'));
        case '2':
            return(previousBackground === 'background-2' ? false : changeBackground2())
        case '3':
            return(previousBackground === 'background-3' ? false : changeBackground3())
        default:
            break;
    }
}