function sayMyName(){
    // console.log("Z");
    // console.log("A");
    // console.log("K");
    // console.log("I");
}
sayMyName()


// function addTwoNumber (num1, num2){
//     console.log(num1 + num2)
// }


function addTwoNumber (num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
   
}

const result = addTwoNumber(3,9)
// console.log("Reslt:", result)



function loginUserMessage(userName= "Bydefault"){
    if (!userName){
        console.log("please enter user name")
        return
    }

    return `${userName} just logged in`
}

// console.log(loginUserMessage("Zaki"))
// console.log(loginUserMessage())


function calculatePrice (val1, val2, ...num1){
    return num1
}

// console.log(calculatePrice(200,400,650,800,900))

const user = {
    username: "Zaki",
    prices: 199
}

function handleObject (anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.prices}`);

}
// handleObject(user)

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));