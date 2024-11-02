//Block scope
const myNum = 100 // Adding the Gloabl scope
const myName = 'Superman' // global scope with same variable cannot be overright into the block or function
if(true){
    const myName = 'Ravi'
    console.log(myName)
}

//Function Scope

function testFn(){
    const myName = 'Theju'
    console.log(myName)
    console.log(myNum) // Global Scope
}

testFn()




