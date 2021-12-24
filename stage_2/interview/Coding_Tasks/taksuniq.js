let names = [1, 2, 4, 3, 2, 3]

function countedNames(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let sortArr = arr.sort();
        if (sortArr[i] !== sortArr[i + 1] && sortArr[i] !== sortArr[i - 1]) {
            newArr.push(sortArr[i])
        }
    }
    return newArr;
}

console.log(countedNames(names))

