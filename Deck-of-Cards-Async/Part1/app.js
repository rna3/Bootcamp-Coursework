let favoriteNum = 6;
let baseURL = "http://numbersapi.com";

// 1. 
async function getSingleNumberFact() {
  try {
    const response = await fetch(`${baseURL}/${favoriteNum}?json`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(`Fact about number ${data.number}: ${data.text}`);
  } catch (error) {
    console.error("Error fetching single number fact:", error);
  }
}

//2. 
async function getRangeFacts() {
    try {
        const response = await fetch(`${baseURL}/1..5?json`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
        const data = await response.json();
        for (let number in data) {
            console.log(`Fact about number ${number}: ${data[number]}`);
            }
    } catch (error) {
        console.error("Error fetching range of facts:", error);
  }
}

//3.
async function getMultipleFacts() {
    try {
      const fetchPromises = Array.from({ length: 4 }, async () => {
        const response = await fetch(`${baseURL}/8?json`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      });
  
      const facts = await Promise.all(fetchPromises);
      facts.forEach(data => {
        const p = document.createElement("p");
        p.textContent = data.text;
        document.body.appendChild(p);
      });
    } catch (error) {
      console.error("Error fetching multiple facts:", error);
    }
  }