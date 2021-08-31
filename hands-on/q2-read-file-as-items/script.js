let beenClicked = false;

let btn = document.querySelector("#load-btn");
btn.addEventListener('click', async function(){
    if (beenClicked == true) {
        return; //strop the event immediately
    }

    // Assign button to be clicked
    beenClicked = true;
    console.log('loading')
    let response = await axios.get('items.txt');
    let fruits = response.data.split(",");
    let fruitList = document.querySelector('ul#fruits');  
    for (let x of fruits) { 
            //appendChild
            let liElement = document.createElement('li');
            liElement.innerHTML = x;
            fruitList.appendChild(liElement)        

            // innerHtml    
            // fruitList.innerHTML += '<li> ${x} </li>';

            // let newElement = '<li> ${x} </li>'
            // fruitList.insertAdjacentHTML('beforeend', newElement)
    }
})
