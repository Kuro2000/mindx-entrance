//Divide function
let checkRemainder = (num) =>{
    if (Number.isInteger(num)){
        return true
    }
}

let divideByTwo = (arr,f) => {
    let newArr = []
    arr.forEach(element => {
        let temp = element/2
        if(f(temp)){
           newArr.push(element)
        }
    });
    return newArr
}

console.log(divideByTwo([1,2,3,4,5,6,7,8,9,10], checkRemainder))

//Belows cover solution for task 2
let deDuplicate = (arr1,arr2) =>{
    arr1.forEach(element =>{
        if(arr2.indexOf(element) == -1) {
            arr2.push(element);
        }
    })

    return arr2
}

console.log(deDuplicate([1,2,"a","b",`c`],[1,2,3,4,5,6]))