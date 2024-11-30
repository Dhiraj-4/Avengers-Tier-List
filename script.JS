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
        // add img to the dropped div
       
        event.preventDefault();
        console.log(event.x, event.y);
        console.log(event.target.parentElement.offsetParent.children[0].children[0].clientHeight)

        const tierHeight = event.target.parentElement.offsetParent.children[0].children[0].clientHeight;
        const imgParent = event.target.parentElement;
        
        console.log(event.target);
        if(event.y < tierHeight) {
            imgParent.removeChild(event.target);
            S_tier.appendChild(event.target);
        }
        else if(event.y < (tierHeight * 2)) {
            imgParent.removeChild(event.target);
            A_tier.appendChild(event.target);
        }
         else if(event.y < (tierHeight * 3)) {
            imgParent.removeChild(event.target);
            B_tier.appendChild(event.target);
        }
         else if(event.y < (tierHeight * 4)) {
            imgParent.removeChild(event.target);
            C_tier.appendChild(event.target);
        }
         else if(event.y < (tierHeight * 5)) {
            imgParent.removeChild(event.target);
            D_tier.appendChild(event.target);
        } 
    }
})