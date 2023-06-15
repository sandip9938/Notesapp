let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  console.log(notesObj);
  showNotes();
});
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [ ];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = " ";
  notesObj.forEach(function (element, index) {
    html += `
    <div class="  notecard my-2 mx-2 card" style="width: 200px ">
                 <div class="card-body">
                  <h5 class="card-title">Note ${index + 1}</h5>
                  <p class="card-text"> ${element}</p>
                  <button id =" ${index} "onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
              </div>`
  });
  let notesElm = document.getElementById("notes");
  if (notes.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `<h1 class="text-center">No Notes Yet</h1>`;
  }
}
function deleteNote(index) {
  console.log("i am deleteing friend", index);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes()
}
let searchtxt =document.getElementById('searchtxt')
searchtxt.addEventListener("input",function () {
   
    let inputVal = searchtxt.value
    console.log("input event friend",inputVal);
    let noteCard = document.getElementsByClassName('notecard')
Array.from(noteCard).forEach(function(element){
let cardTxt = element.getElementsByTagName("p")[0].innerText
if(cardTxt.includes(inputVal)){
    element.style.display ="block"
}else{
    element.style.display ="none"
}
})
})