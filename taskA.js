//Divide function
let checkRemainder = (num) =>{
    if (Number.isInteger(num)){
        return true
    }
}

let divideByTwo = (arr,f) => {
    let newArr = []
    arr.forEach(element => {
        element/=2
        if(checkRemainder(element)){
           newArr.push(element)
        }
    });
    return newArr
}

console.log(divideByTwo([1,2,3,4,5,6], checkRemainder))

//Below cover solution for task 2
let deDuplicate = (arr1,arr2) =>{
    result = []
    arr1.forEach(element =>{
        if(!arr2.includes(element)){
            result.push(element)
        }
    })
    arr2.forEach(element =>{
        if(!arr1.includes(element)){
            result.push(element)
        }
    })

    return result
}

console.log(deDuplicate([1,2,"a"],[1,3,"b"]))