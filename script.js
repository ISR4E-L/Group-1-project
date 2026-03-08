let commands = []

function addCommand(){

let name = document.getElementById("commandName").value
let code = document.getElementById("commandCode").value

if(name === "" || code === ""){
alert("Please fill all fields")
return
}

let command = {
name:name,
code:code
}

commands.push(command)

displayCommands()

document.getElementById("commandName").value = ""
document.getElementById("commandCode").value = ""

}

function displayCommands(){

let container = document.getElementById("commandList")

container.innerHTML = ""

for(let i = 0; i < commands.length; i++){

let card = document.createElement("div")
card.className = "card"

card.innerHTML = `
<h3>${commands[i].name}</h3>

<div class="code">${commands[i].code}</div>

<br>

<button onclick="copyCode(${i})">Copy Code</button>

<button class="delete" onclick="deleteCommand(${i})">Delete</button>
`

container.appendChild(card)

}

}

function deleteCommand(index){

commands.splice(index,1)

displayCommands()

}

function copyCode(index){

let text = commands[index].code

navigator.clipboard.writeText(text)

alert("Code copied!")

}