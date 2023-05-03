const filterElement = document.querySelector('#filter')

const contact = document.querySelectorAll('.list-wrapper')

filterElement.addEventListener('input', filterContacts)

function filterContacts() {
    
    if(filterElement.value !== "") {
        for (let person of contact) {
            let title  = person.querySelector('h3')
            title = title.textContent.toLocaleLowerCase();

            let filterText = filterElement.value.toLocaleLowerCase()

            if(!title.includes(filterText)) {
                person.style.display = "none"

            } else {
                person.style.display = "flex"
            }

        }

    } else {
        for(let person of contact){
            person.style.display = "flex"
        }
    }

}