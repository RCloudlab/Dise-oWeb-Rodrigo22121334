const input = document.getElementById("todo-input")
const btn = document.getElementById("add-btn")
const todoList = document.getElementById("todo-list")
const timeNow = Date.now()
const dateNow2 = new Date(timeNow)
const dateNow = new Date()


const addDateCreate = () =>{
    const date = dateNow2.toLocaleDateString()

    const dateNow = new Date()

    const hour = String(dateNow.getHours()).padStart(2,'0')
    const minute = String(dateNow.getMinutes()).padStart(2,'0')
    const second = String(dateNow.getSeconds()).padStart(2,'0')
    const clock = hour + ":" + minute + ":" + second

    const fecha = date + "                   " +clock

    return fecha
}

document.addEventListener("DOMContentLoaded", () =>{
    const todos = JSON.parse(localStorage.getItem("todos")) || []

    todos.forEach( element => {
        appendElemetToList(element)
    });
})

const validateInput = (todoItemtext) => {
    if (todoItemtext.trim() === "") {
        alert("No puedes regresar una cadena vacia")
        return false
    }
    return true
}

const editTodo = (spanElement, liElemet) => {
    spanElement.addEventListener("dblclick", () => {
        const inputItem = document.createElement("input")
        inputItem.type = "Text"
        inputItem.value = spanElement.textContent
        liElemet.replaceChild(inputItem, spanElement)

        inputItem.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                spanElement.textContent = inputItem.value
                if (!validateInput(inputItem.value)) {
                    return
                }
                liElemet.replaceChild(spanElement, inputItem)
            }
        })
    })

}


const appendElemetToList = (todoItemtext) => {
    const dateCreate = document.createElement("span")
    const element = document.createElement("li")
    const text = document.createElement("span")
    const buttons = document.createElement("div")
    const deleteBtn = document.createElement("Button")
    const completeBtn = document.createElement("Button")

    dateCreate.textContent = addDateCreate()
    completeBtn.textContent = "✅"
    deleteBtn.textContent = "⛔"
    text.textContent = todoItemtext

    element.appendChild(text)
    element.appendChild(dateCreate)
    buttons.appendChild(completeBtn)
    buttons.appendChild(deleteBtn)
    element.appendChild(buttons)

    buttons.classList.toggle("buttons")

    completeBtn.classList.toggle("edit")
    //aqui  pongo una variable de active
    var ac = 0
    completeBtn.addEventListener("click", () => {
        element.classList.toggle("completed")
        if (ac === 0) {
            ac = 1
            completeBtn.textContent = "Incompleto"
        } else {
            ac = 0
            completeBtn.textContent = "completo"
        }

    })

    deleteBtn.classList.toggle("delete")
    deleteBtn.addEventListener("click", () => {
        element.remove()
    })
    
    editTodo(text, element)

    todoList.appendChild(element)
}

const addTodo = () => {
    const todos = []
    const todoItemtext = input.value

    if (!validateInput(todoItemtext)) return

    appendElemetToList(todoItemtext)

    todos.push("El")    
    todos.push("E2")    
    todos.push("E3")    

    localStorage.setItem("todos", JSON.stringify(todos))

    input.value = ""
}

const updateClock = () => {
    const hour = String(dateNow.getHours()).padStart(2,'0')
    const minute = String(dateNow.getMinutes()).padStart(2,'0')
    const second = String(dateNow.getSeconds()).padStart(2,'0')
    
    const hourHtml = document.getElementById("hours")
    const minutesHtml = document.getElementById("minutes")
    const seconsdHtml = document.getElementById("seconds")

    hourHtml.textContent = hour
    minutesHtml.textContent = minute
    seconsdHtml.textContent = second
}
const updateDate = () => {
    const spanText = document.getElementById("dateTxt")
    const f = dateNow2.toLocaleDateString()
    spanText.textContent = f
}
updateDate()
setInterval(updateClock, 1000)
updateClock()

btn.addEventListener("click", addTodo)