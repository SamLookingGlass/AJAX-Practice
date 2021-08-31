let btn = document.querySelector("#load-btn");
btn.addEventListener('click', async function(){
   let response = await axios.get('items.txt');
   let fruits = response.data.split(",");  
   for (let x of fruits) {
       console.log(x)
       let card = document.createElement('div'); 
       card.cardName = 'card';
       card.style.width = '18rem';
       card.innerHTML = "<div class='card-body'>Test</div>"
    //    <div class = 'card-body'> <h5 class = 'card-title'>${x}</h5> </div> ";
        // console.log(x)
   }
})
