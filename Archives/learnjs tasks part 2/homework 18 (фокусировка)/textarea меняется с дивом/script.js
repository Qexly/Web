"use strict"

let div = document.getElementById('view');
div.tabIndex = 0;

class EditListener {
    handleEvent(event) {

        if (event.type == 'focus') {
            this._div = event.target;
            this._divInnerHtml = event.target.innerHTML;
            this.onFocus(event);
        }

        if (event.type == 'blur') {
            this.onBlur(event);
        }

    }

    onFocus(event) {

        this._textarea = document.createElement('textarea');
        this._textarea.className = 'edit';
        this._textarea.value = this._divInnerHtml;
        this._div.replaceWith(this._textarea);
        this._textarea.focus();
        this._textarea.addEventListener('blur', this);

    }

    onBlur(event) {
        this._div.innerHTML = this._textarea.value;
        this._textarea.replaceWith(this._div);
    }
}

let listener = new EditListener();

div.addEventListener('focus', listener);


