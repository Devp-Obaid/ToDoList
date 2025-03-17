document.addEventListener("DOMContentLoaded", function () {
    const item = document.querySelector("#item");
    const toDoBox = document.querySelector("#to-do-box");

    item.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            if (this.value.trim() !== "") {  // Prevent empty tasks
                addToDO(this.value);
                this.value = "";
            }
        }
    });

    const addToDO = (taskText) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${taskText} 
            <i class="fas fa-times"></i>
        `;

        // Toggle 'done' class on click
        listItem.addEventListener("click", function () {
            this.classList.toggle("done");
        });

        // Delete the task when clicking the 'X' button
        listItem.querySelector("i").addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent toggling 'done' class
            listItem.remove();
        });

        toDoBox.appendChild(listItem);
    };
});
