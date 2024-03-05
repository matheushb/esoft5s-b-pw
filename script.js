const a = document.getElementById("jose")

const test = await fetch('https://cat-fact.herokuapp.com/facts').then(data => await data.json())
a.innerText = test[0].text;