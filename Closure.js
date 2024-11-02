// function outer(){
//     let counter = 0
//     function inner(){
//      counter++
//      console.log(counter)
// }
// inner()
// }
// outer()
// outer()

function outer(){
    let counter = 0
    function inner(){
     counter++
     console.log(counter)
}
return inner //* in javascript is possible to function into other function
}
const fn = outer()
fn()  // output is 1
fn()  // output is 2
fn()  // output is 3