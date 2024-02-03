let todo = [];
let input = prompt("What would you like to do?");

while (input !== 'quit') {
    if (input === 'new') {
        let newItem = prompt("Add a new TODO");
        todo.push(newItem);
        console.log(`Added: ${newItem}`);
    } else if (input === 'list') {
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i + 1}: ${todo[i]}`);
        }
    } else if (input === 'delete') {
        let deleteItem = parseInt(prompt("Index of todo to delete"));
        while (isNaN(deleteItem) || deleteItem < 1 || deleteItem > todo.length) {
            deleteItem = parseInt(prompt("Invalid index. Please enter a valid index to delete"));
        }
        todo.splice(deleteItem - 1, 1);
        console.log(`TODO number ${deleteItem} deleted`);
    } else {
        console.log("Invalid command. Please enter 'new', 'list', 'delete', or 'quit'.");
    }

    input = prompt("What would you like to do?");
}

console.log("Quit program");
