let favoriteNum = 6;
let baseURL = "http://numbersapi.com";

// 1.
fetch(`${baseURL}/${favoriteNum}?json`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(`Fact about number ${data.number}: ${data.text}`);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });

//2.
fetch(`${baseURL}/1..5?json`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        for (let number in data) {
        console.log(`Fact about number ${number}: ${data[number]}`);
        }})
    .catch(error => {
        console.error("Error fetching data:", error);
    });

//3.
Promise.all(
  Array.from({ length: 4 }, () => 
    fetch(`${baseURL}/8?json`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
  )
)
.then(facts => {
  // Append each fact to the body of the page
  facts.forEach(data => {
    const p = document.createElement("p");
    p.textContent = data.text;
    document.body.appendChild(p);
  });
})
.catch(error => {
  console.error("Error fetching facts:", error);
});
