document.addEventListener('DOMContentLoaded', () => {

    const S_tier = document.getElementById('S-tier');

    const A_tier = document.getElementById('A-tier');

    const B_tier = document.getElementById('B-tier');

    const C_tier = document.getElementById('C-tier');

    const D_tier = document.getElementById('D-tier');

    const img = document.getElementsByClassName('img');

    const imgWapper = document.getElementById('imagesWapper');


    console.log(img);
    
    for(let i = 0; i < img.length; i++) {
        img[i].addEventListener('dragend', handleDragEnd)
    }

    function handleDragEnd(event) {
        // add img to the dropped dive
        console.log(event);
        console.log(event.clientY)
        if(event.clientY > 300) {
            console.log(event.originalTarget)
            const element = event.originalTarget;
            imgWapper.removeChild(element);
            D_tier.appendChild(element);
        }
    }
})