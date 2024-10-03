const input = document.getElementById("todo-input")
const btn = document.getElementById("add-btn")
const todoList = document.getElementById("todo-list")



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
    const element = document.createElement("li")
    const text = document.createElement("span")
    const buttons = document.createElement("div")
    const deleteBtn = document.createElement("Button")
    const completeBtn = document.createElement("Button")

    completeBtn.textContent = "Completado"
    deleteBtn.textContent = "Eliminar"
    text.textContent = todoItemtext

    element.appendChild(text)
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
//Fucniones Normales
// function addTodo(){
//     console.log("denreo de la funcion")
// }


// funcion guardada en una variable
// const addTodo = function(){
// }

//Arrow function

const addTodo = () => {
    const todoItemtext = input.value

    if (!validateInput(todoItemtext)) return

    appendElemetToList(todoItemtext)

    input.value = ""
}
btn.addEventListener("click", addTodo)