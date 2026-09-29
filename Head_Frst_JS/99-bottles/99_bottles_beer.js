let bottles = 99;
let text = 'bottles'

while(bottles) {
  console.log(`${bottles} ${text} of beer on the wall, ${bottles} ${text} of beer`);
  bottles-=1;
  if(bottles===1){
    text='bottle'
  }
  if(bottles===0){
    console.log(`Take one down and pass it around, no more bottles of beer on the wall`)
  }
  else{
    console.log(`Take one down and pass it around, ${bottles} ${text} of beer on the wall`)
  }
}
console.log("No more bottles of beer on the wall, no more bottles of beer");
console.log("Go to the store and buy some more, 99 bottles of beer on the wall");