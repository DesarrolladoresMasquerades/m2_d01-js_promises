console.log("JS loaded")
console.log("Waiting for the fake server to reply...")
// --- server simulation of random response -------

function updateDOMWithData(data){

  const html = `
  <div class="container">
    <article class="product">
      <img src="${data.img}" alt="">
      <h3>${data.item}</h3>
      <h3>$ ${data.price}</h3>
      <h4>Year: ${data.year}</h4>
    </article>
  </div>
  `
  const div = document.createElement("div")
  div.innerHTML = html
  
  document.body.appendChild(div)
}

function updateDOMWithError(error){
  
  const html = `
<div class="container error">

  <article class="product">
  <h1>ERROR</h1>
    <p>${error}</p>
    <img src="https://vignette.wikia.nocookie.net/battlefordreamisland/images/f/f1/Roboty_book.png/revision/latest?cb=20190908174044" alt="">
  </article>
</div>
  `
  const div = document.createElement("div")
  div.innerHTML = html
  
  document.body.appendChild(div);
}


function responseHandler(resolveFunc, rejectFunc){
  const serverIsUp = Math.random() > 0.5 ? true : false //this is a trick to get a 50% chance that the server is broken 

  const data = {
    item: 'MacBook Pro 16',
    price: 2600,
    year: 2020,
    img: "https://www.macnificos.com/sites/files/styles/product_page/public/images/product/macbook-16-1_1.jpg" 
  }

  const error = new Error("Server unreachable!")

  setTimeout(()=>{

    if(serverIsUp) resolveFunc(data)
    else rejectFunc(error)},

    1000 + Math.random() * 1000 // This is a random waiting time between 1000 and 2000 ms
  )}

const serverResponse = new Promise(responseHandler)
// --- server simulation of random response ends here -------


/**
 * This is teh part that we will do to handle a real response from a server
 */

serverResponse
.then( data => {
  updateDOMWithData(data);
  return data;
})
.then( data => console.log("data: ", data))
.catch(error => updateDOMWithError(error))


// The script is NOT blocked. I can add all the code I want while I wait fr the response
console.log("The browser is alive, but bored...")
console.log("realllyyyyy bored...")