//1.

const input = process.argv.slice(2);

let result = 0;

for (let i = 1; i < input.length; i++) {
  if (isNaN(input[i])) {
    console.log(
      `Sorry, the argument ${input[i]} is not a number, please try again`
    );
    return;
  }
  result = result + Number(input[i]);
}
console.log(result);

//2.

let average = result /(input.length-1)


if (input[0]=== "sum"){
    console.log(result);

}else if(input[0]=== "avg"){

    console.log(average);
}else{console.log(``);}