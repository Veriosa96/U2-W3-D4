

const bookslist = async function () {
  try {
    let res = await fetch("https://striveschool-api.herokuapp.com/books", {
      method: "GET"
    });
    if (res.ok) {
      let data = await res.json();
      console.log(data)
      let card = document.getElementById("cardContent");
      data.forEach((book) => {
          console.log(card)
        card.innerHTML+= 
        `<div class="card col-12 col-md-4 col-lg-3 mx-2 my-2 pt-3">
        <img src="${book.img}" class="card-img-top"  alt="book pic">
        <div class="card-body">
         <h5 class="card-title">${book.title}</h5>
        <p class="card-text">${book.price}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div
        </div>`;
      });
    } else {
      console.log("something is wrong");
    }
  } catch (error) {
    console.log(error);
  }
};
bookslist()