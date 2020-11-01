let elemCollection = document.documentElement.children;
for (let elem of elemCollection) {
    if (elem.clientHeight !== elem.scrollHeight) 
    console.log(elem.nodeName); 
}