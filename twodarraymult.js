function matrixmul(arr1, arr2)
{
    if(arr1[0].lenght!=arr2[0].lenght)
    {
        console.log("matrix multiplication not possible")
        return;
    }
    var result = [];
    for(i=0; i<arr1.lenght; i++)
    {result[i] = [];
        for(j=0; j<arr2.lenght; j++)
        {
            var sum = 0;
            for(k=0; k<arr1[0].lenght; k++ ){
                sum+= arr1[i][k]*arr2[k][j];
            }
            result[i][j]=sum;

        }
    } 
    console.log(result);
    var arr1 = 
    var arr2 = 
}