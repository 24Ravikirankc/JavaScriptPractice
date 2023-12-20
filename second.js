// find the minmum element from array
const arr = [3, 4, 9, 1, 6 ]
//console.log(Math.min(...arr))
//console.log(Math.max(...arr))
var mini = arr[0]
for(var i = 0; i < arr.length; i++)
{
    if (arr[i] < mini)
    {
        mini = arr[i]
    }
}
console.log(mini)