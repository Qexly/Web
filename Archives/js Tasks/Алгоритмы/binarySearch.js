let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //10 элементов
//O(log2N) то есть в какую степень надо возвести 2, чтобы получить 10 - будет максимальное количество итераций алгоритма в худшем случае
function binarySearch(array, item) {
    let found = false;
    let start = 0;
    let end = array.length - 1;
    let middle;
    let position = -1;
    while (found === false && start !== end) {
        middle = Math.floor((start + end) / 2);
        if (array[middle] === item) {
            found = true
            position = middle;
        } else if (item < array[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    if (start === end) position = start;
    return position
}

binarySearch(array, 2)