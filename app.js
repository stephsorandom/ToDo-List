const userList = document.querySelector('.name-list li');
const listInput = document.querySelector('.list-input');
const addBtn = document.querySelector('.add-btn');


addBtn.addEventListener('click', () => {
    ///Create li from submission
    const newLi = document.createElement('LI')
    const liContent = document.createTextNode(listInput.value)
    ///Add the input value inside new li
    newLi.appendChild(liContent)
    //Attach li to user list
    userList.appendChild(newLi)
})

 