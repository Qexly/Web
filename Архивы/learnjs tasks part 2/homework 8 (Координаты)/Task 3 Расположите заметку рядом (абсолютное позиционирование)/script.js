'use script'

function positionAt(anchor, position, elem) {

  elem.style.position = 'absolute';
  let coords = anchor.getBoundingClientRect();
  
  switch(position) {
    case 'top':
      elem.style.left = coords.left + pageYOffset + 'px';
      elem.style.top = coords.top - elem.offsetHeight + pageXOffset + 'px';
      break;
    case 'right':
      elem.style.left = coords.right + pageYOffset + 'px';
      elem.style.top = coords.top + pageXOffset + 'px';
      break;
    case 'bottom':
      elem.style.left = coords.left + pageYOffset + 'px';
      elem.style.top = coords.bottom + pageXOffset + 'px';
  }
    
}

  /**
   * Показывает заметку с заданным содержимым на заданной позиции
   * относительно элемента anchor.
   */
  function showNote(anchor, position, html) {

    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
  }

  // проверка
  let blockquote = document.querySelector('blockquote');

  showNote(blockquote, "top", "note above");
  showNote(blockquote, "right", "note at the right");
  showNote(blockquote, "bottom", "note below");

