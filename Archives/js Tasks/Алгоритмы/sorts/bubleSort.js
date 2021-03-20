function bubbleSort(array) {
    let count = 0;
    outer:
    for (let i = 0; i < array.length - 1; i++) {
        let flag = true
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                flag = false;
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
                count++;
            }
        }
        if (flag) break outer;
    }
    console.log(count);
    console.log(array);
}