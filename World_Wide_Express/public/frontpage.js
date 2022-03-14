console.log("42")

const pTag = document.getElementById("favAnimal")

const prom = fetch("/amountoffavanimails").then(response => response.json()).then(result => pTag.innerText=result.data)



