console.log("JS loaded");
console.log("Waiting for the fake server to reply...");

/**
 * Complete this file so that you display either the response or the error
 * based on the "isServerUp" flag
 * Remeber you have to use the callbacks from the new Pormise to handle the flow
 * 
 * ----- Here is the template for the data: -----
 * <div class="container">
      <article class="product">
        <img src="${data.img}" alt="">
        <h3>${data.item}</h3>
        <h3>$ ${data.price}</h3>
        <h4>Year: ${data.year}</h4>
      </article>
    </div>
 * 
 *
 * ----- Here is the template for the error: -----
 * 
 * <div class="container error">
     <article class="product">
       <h1>ERROR</h1>
       <p>${error}</p>
       <img src="https://vignette.wikia.nocookie.net/battlefordreamisland/images/f/f1/Roboty_book.png/revision/latest?cb=20190908174044" alt="">
     </article>
   </div>
 * 
 */

// ----- Server simulation of random response -----
// ----- You have to make it work as intended -----
const serverResponse = new Promise(responseHandler);

serverResponse.then().catch();

function updateDOMWithData(data) {
  const html = ``; // build the html for data here

  // Append the HTML to the DOM here
}

function updateDOMWithError(error) {
  const html = ``; // build the html for the error here

  // Append the HTML to the DOM here
}

function responseHandler(resolveCb, rejectCb) {
  const serverIsUp = Math.random() > 0.5 ? true : false; //this is a trick to get a 50% chance that the server is broken

  const data = {
    item: "MacBook Pro 16",
    price: 2600,
    year: 2020,
    img: "https://www.macnificos.com/sites/files/styles/product_page/public/images/product/macbook-16-1_1.jpg",
  };

  const error = new Error("Server unreachable!");

  setTimeout(
    () => {
      // Read the "serverIsUp" flag here
      // and handle the promise to dispaly the correct HTML into the DOM here.
    },

    1000 + Math.random() * 1000 // This is a random waiting time between 1000 and 2000 ms
  );
}
