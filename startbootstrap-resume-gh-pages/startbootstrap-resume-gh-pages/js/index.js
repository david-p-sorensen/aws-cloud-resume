const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://4x4rshd4vxvw6lf3zk5qai53h40giboc.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

updateCounter();