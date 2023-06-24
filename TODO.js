let paper = [];
let output = document.getElementById('output');
let newButton = document.querySelector('.action.new');
let listButton = document.querySelector('.action.list');
let deleteButton = document.querySelector('.action.delete');
let quitButton = document.querySelector('.action.quit');

function updateOutput(message) {
    output.innerHTML += `<div>${message}</div>`;
    output.scrollTop = output.scrollHeight;
}

function handleNew() {
    let task = prompt("What do you want to add to your list?");
    if (task) {
        paper.push(task);
        updateOutput(`"${task}" is now added to your list!`);
    } else {
        updateOutput("Invalid task. Please try again.");
    }
}

function handleList() {
    if (paper.length === 0) {
        updateOutput("Your to-do list is empty.");
    } else {
        updateOutput("***************************");
        for (let i = 0; i < paper.length; i++) {
            updateOutput(`${i} : ${paper[i]}`);
        }
        updateOutput("***************************");
    }
}

function handleDelete() {
    if (paper.length === 0) {
        updateOutput("Your to-do list is empty. No tasks to delete.");
    } else {
        updateOutput("***************************");
        for (let i = 0; i < paper.length; i++) {
            updateOutput(`${i} : ${paper[i]}`);
        }
        updateOutput("***************************");
        let index = parseInt(prompt("Please enter the index of the task that you want to delete"));
        if (!isNaN(index) && index >= 0 && index < paper.length) {
            let deletedTask = paper[index];
            paper.splice(index, 1);
            updateOutput(`Successfully deleted "${deletedTask}"!`);
            updateOutput("***************************");
        } else {
            updateOutput("Invalid index. Please try again.");
        }
    }
}

function handleQuit() {
    updateOutput("Thanks for using our To-Do list website, adios amigo!");
}

// Adding event listeners to the buttons
newButton.addEventListener('click', handleNew);
listButton.addEventListener('click', handleList);
deleteButton.addEventListener('click', handleDelete);
quitButton.addEventListener('click', handleQuit);


