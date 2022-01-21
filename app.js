const userList = document.querySelectorAll('.name-list li');
const listInput = document.querySelector('.list-input');
const addBtn = document.querySelector('.add-btn');
const deleteBtn = document.querySelector('.delete-btn');


addBtn.addEventListener('click', () => {
    ///Create li from submission
    const newLi = document.createElement('LI')
    const liContent = document.createTextNode(listInput.value)
    ///Add the input value inside new li
    newLi.appendChild(liContent);
    //Attach li to user list
    userList.appendChild(newLi);
    //Append new LI to end of list
    // liContent.after(liContent.lastElementChild)
})
 for (user of userList) {
     user.addEventListener('click', () => {
        console.log(user)
     });
 }
// liContent.addEventListener('click', () => {

// })

//  deleteBtn.addEventListener('click', () => {
    
//  })