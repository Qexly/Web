"use strict"

function delay(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve.bind(null, "done!"), ms);
    });
}

delay(3000).then(function(result){
    alert(`${result} выполнилось через 3 секунды`);
}); 



