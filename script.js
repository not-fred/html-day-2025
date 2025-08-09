const title = (document.title + " ").repeat(10)
let titleOffset = 0
setInterval(() => {
    document.title = title.substr(titleOffset,title.length) + title.substr(0,titleOffset+1)
    titleOffset = (titleOffset+1)%title.length
},500)

function clickCats(id="") {
    const currHandler = document.getElementById(id)
    !!currHandler && currHandler.classList.toggle("active")
    const clickHandlers = document.getElementsByClassName("active")
    for (let i=0; i<clickHandlers.length; i++)
        if (currHandler != clickHandlers[i])
            clickHandlers[i].classList.toggle("active")
}
