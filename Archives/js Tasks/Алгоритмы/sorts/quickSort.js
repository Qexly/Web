function quickSort(array) {
    if (array.length === 1) return array;
    let pivotElementIndex = Math.floor(array.length / 2);
    let less = [];
    let more = []
    for (let i = 0; i < array.length; i++) {    
        if (array[i] < array[pivotElementIndex]) {
            less.push(array[i]);
        } else if (array[i] > array[pivotElementIndex]) {
            more.push(array[i])
        } else {
            continue;
        }
    }
    return [...quickSort(less), array[pivotElementIndex], ...quickSort(more)];
}