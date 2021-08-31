// Write the code such that when the Load button
//  is clicked, the content of the file 
// contact.txt is added into div#content

let btn = document.querySelector("#load-btn");
btn.addEventListener('click', async function(){
   let response = await axios.get('contact.txt');
   console.log(response.data);
   
   let articleElement = document.querySelector('div#content');
   articleElement.innerHTML = response.data;
})
