// Array [1, 7, 3, 4]

var params = process.argv.slice(2)
  var sum;
  var sumArray = [];
for( var i = 0 ; i < params.length; i++){
  console.log('I ' + i + " " + params[i])
  sum = 0;
  for(var j = 0; j < params.length; j++){
    console.log('Ja ' + j)
    if( j === i){
    }
    else{
      sum += parseFloat(params[j]);
      console.log(sum)
    }
  }
  sumArray[i] = sum
}
console.log(sumArray)