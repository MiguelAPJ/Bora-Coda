function log(message) {
  console.log('> ' + message)
}

/** APP */
const cards = document.querySelectorAll('.card')
const dropzone = document.querySelectorAll('.dropzone')

cards.forEach(card => {
  card.addEventListener('dragstart', dragstart)
  card.addEventListener('drag', drag)
  card.addEventListener('dragend', dragend)
})

function dragstart(){
  //log('CARD: Start dragging')
  dropzone.forEach( dropzone => dropzone.classList.add('highlight'))

  this.classList.add('is-dragging')
}

function drag() {
  //log('CARD: Is dragging')
}

function dragend() {
  //log('CARD: Stop drag!')
  dropzone.forEach( dropzone => dropzone.classList.remove('highlight'))

  this.classList.remove('is-dragging')
}

/**  local a onde vou soltar os cartões */

dropzone.forEach(dropzone => {
  dropzone.addEventListener('dragenter', dragenter)
  dropzone.addEventListener('dragover', dragover)
  dropzone.addEventListener('dragleave', dragleave)
  dropzone.addEventListener('drop', drop)
})

function dragenter() {
  //('DROPZONE: Enter in zone')
}

function dragover() {
  //('DROPZONE: Over')
  this.classList.add('over')
  const cardBeingDragged = document.querySelector('.is-dragging')

  this.appendChild(cardBeingDragged)
}

function dragleave() {
  // log('DROPZONE: Leave!')
  this.classList.remove('over')
}

function drop() {
  // log('DROPZONE: dropped')
  this.classList.remove('over')
}