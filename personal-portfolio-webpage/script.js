document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById('addProjectBtn');
    const projectList = document.querySelector('#projects ul');

    addButton.addEventListener('click', () => {
        const newItem = document.createElement('li');
        newItem.textContent = `Project ${projectList.children.length + 1}`;

        projectList.appendChild(newItem);
    });
});
