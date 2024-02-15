const inputBox = document.querySelector('.input-box');
const createBtn = document.querySelector('.create-btn img');
console.log(createBtn);
const notesCont = document.querySelector('.notes-container');

createBtn.addEventListener("click",addNotes);

function updatestorage(){
      localStorage.setItem('inputBox',notesCont.innerHTML)
}
function addNotes(){
    
    let notes = document.createElement('P');
    notes.setAttribute(`contenteditable`,true)
    // notesCont.classList.remove('hide');
    console.log(notes);
    notes.classList.add('input-box');
    // notes.classList.add('input-box')  
    notesCont.appendChild(notes)
     
    let image =document.createElement('img')
    image.setAttribute('src','./images/delete.png')
    image.classList.add(`deleteimg`)
    console.log(image);
    notes.appendChild(image)
   
    image.addEventListener("click",deletenote)
    
    function deletenote(){
        notesCont.removeChild(notes)
        updatestorage();
    }
}

