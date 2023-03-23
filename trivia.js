const BASE_URL = "https://opentdb.com/api.php?amount=10";

const button = document.querySelector("button");

const main = document.querySelector("main");

button.addEventListener("click", async (event) => {
  event.preventDefault();
  await fetch(BASE_URL)
    .then((response) => response.json())
    .then((data) => {
        
        let array = data.results
        //console.log(array)
        array.forEach(element => {
            let category = element.category;
            let q = element.question;
            let difficulty = element.difficulty;
            let rightAnswer = element.correct_answer;
            let div = document.createElement("div");

            main.appendChild(div);
            div.innerHTML = `
                <article class="card">
                <h2>${category}</h2>
                <p>${q}</p>
                <button >Show Answer</button>
                <p class="hidden">${rightAnswer}</p>
                </article>`;
        });
    })
    .catch((error) => {
      console.log(error);
    });
});