/// constants
const form = document.getElementById('form');

const bookTitleFromForm = document.getElementById(`bookTitle`);
const bookAuthorFromForm = document.getElementById(`bookAuthor`);
const bookPageNumFromForm = document.getElementById(`bookPageNum`);
const bookReadStatusFromForm = document.getElementById(`bookReadStatus`);

const bookHTML = document.querySelector(`.book`);

const newBookPane = document.getElementById(`bookInput`);
const openPane = document.getElementById(`openBookCreationPane`);

const exitWindowBtn = document.getElementById(`exitWindowBtn`);


//variables
let myLibrary = [];

//functions
function book(title, author, pageNum, readStatus) {
    this.ObjTitle = title;
    this.ObjAuthor = author;
    this.ObjPageNum = pageNum;
    this.ObjReadStatus = readStatus;
    this.ObjDataAttribute;
}

function loopThroughLibrary() {

    const titlePara = document.createElement(`p`);
    const authorPara = document.createElement(`p`);
    const pageNumPara = document.createElement(`p`);
    const readStatusPara = document.createElement(`p`);

    titlePara.classList.add(`bookPara`);
    authorPara.classList.add(`bookPara`);
    pageNumPara.classList.add(`bookPara`);
    readStatusPara.classList.add(`bookPara`);


    const newBookSection = document.createElement(`section`);
    newBookSection.setAttribute(`data`, myLibrary.length - 1);


    function createAndAppendBookSection() {
        newBookSection.setAttribute(`class`, `book`);
        const library = document.getElementById(`library`);
        library.appendChild(newBookSection);
    }


    myLibrary.forEach((element) => {
        createAndAppendBookSection();
        titlePara.textContent = `Title: ` + element.ObjTitle;
        authorPara.textContent = `Author: ` + element.ObjAuthor;
        pageNumPara.textContent = `Pages: ` + element.ObjPageNum;
        readStatusPara.textContent = element.ObjReadStatus;

        newBookSection.appendChild(titlePara);
        newBookSection.appendChild(authorPara);
        newBookSection.appendChild(pageNumPara);
        newBookSection.appendChild(readStatusPara);
    })


    const editBtn = document.createElement(`button`);

    function createEditBtn() {
        editBtn.classList.add(`editBtn`);
        editBtn.textContent = `Update`;
        newBookSection.appendChild(editBtn);
    };

    createEditBtn();

    editBtn.addEventListener(`click`, () => {
        if (readStatusPara.textContent == `I have read it`) {
            readStatusPara.textContent = `I have not read it`;
            return;
        }
        if (readStatusPara.textContent == `I have not read it`) {
            readStatusPara.textContent = `I have read it`;
            return;
        };
    });


    const deleteBtn = document.createElement(`button`);

    function createDeleteBtn() {
        deleteBtn.classList.add(`deleteBtn`);
        deleteBtn.textContent = `Delete`;
        newBookSection.appendChild(deleteBtn);
    };

    createDeleteBtn();

    deleteBtn.addEventListener(`click`, () => {
        delete newBookSection.getAttribute;
        newBookSection.remove();
        delete myLibrary[newBookSection.getAttribute(`data`)]
    })
}

function submitFormEvent(event) {
    event.preventDefault();
    addBookToLibrary();
    loopThroughLibrary()

}

function addBookToLibrary() {
    myLibrary.push(Object.create(book));
    myLibrary[myLibrary.length - 1].ObjTitle = bookTitleFromForm.value;
    myLibrary[myLibrary.length - 1].ObjAuthor = bookAuthorFromForm.value;
    myLibrary[myLibrary.length - 1].ObjPageNum = bookPageNumFromForm.value;
    myLibrary[myLibrary.length - 1].ObjReadStatus = bookReadStatusFromForm.value;
}


//event listeners
form.addEventListener('submit', submitFormEvent);

openPane.addEventListener(`click`, () => {
    if (newBookPane.style.display == `block`) {
        newBookPane.style.display = `none`;
    } else if (newBookPane.style.display == "" || newBookPane.style.display == `none`) {
        newBookPane.style.display = `block`;
    };
});

exitWindowBtn.addEventListener(`click`, () => {
    newBookPane.style.display = `none`;
});