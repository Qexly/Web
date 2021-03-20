/*Есть массив неупорядоченных элементов, находим в цикле минимальный,
    и меняем местами с первым элементом. Далее снова проходи по массиву со второго элемента,
    снова находим минимальное значение и меняем местами уже со вторым элементом и т.д., пока не отсортируем.
*/

function selectionSort(array) {
    let count = 0
    for (let i = 0; i < array.length; i++) {
        let min = array[i];
        let minIndex = null
        for (let j = i+1; j < array.length; j++) {
            if (array[j] < min) {
                min = array[j];
                minIndex = j;
            }
            count += 1;
        }
        if (minIndex) {
            let temp = array[i];
            array[i] = min;
            array[minIndex] = temp;
        }
    }
}

//сложность: O(n*n)