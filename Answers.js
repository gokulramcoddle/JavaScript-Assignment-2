// Q1)   *
//      * *
//     * * *
//    * * * *
//   * * * * *

var rows = 5;
for (var i = 1; i <= rows; i++) {
    var line="";
    for(var j=1;j<=rows;j++){
        if(i+j>rows){
           line+="* ";
        }
        else{
           line+=" ";
        }
    }
    console.log(line);
}

//Another method

var rows = 5; 
for (var i = 1; i <= rows; i++) {
      var str = " ".repeat(rows - i) + "* ".repeat(i); 
    console.log(str); 
}


// Q2) ['car', 1, 5, 'js', 'node js', 'mysql', 'sql' ] : Use switch statement inside a map function and 
// console each item by using switch statement.

var items = ['car', 1, 5, 'js', 'node js', 'mysql', 'sql'];
items.map(item => {
    switch(typeof item){
        case 'string':
            console.log('String: '+item);
            break;
        case 'number':
            console.log('number: '+ item);
            break;
        default:
           console.log('Other: '+item);
    }
})


// Q3)[1, 2, 3, 4. 5, 6] : Write a closure function to delete indexes 5 and 2 of this array.

var arr=[1, 2, 3, 4, 5, 6];
function deleteIndex(a){
    return function(index){
       index.sort((a,b)=> b-a);
       index.forEach(idx =>{
           if (idx >= 0 && idx < a.length){
           a.splice(idx,1);
           }
       });
       return a;
}
}
var removedIdx=deleteIndex(arr);
console.log(removedIdx([5,2]));


// Q4) Use constructor method to console all elements of the passed array. (the array will be passed to the constructor method)

class conClass{
    constructor(arr){
      this.arr=arr;
  }
   print(){
       this.arr.forEach(a=> {console.log(a)});
   }
  }
  var arr=[1, 2, 3, 4, 5, 6];
  var conArr=new conClass(arr);
  conArr.print();


// Q5)Create a self-invoking function to console you name.

(function(){
    console.log("Gokul Ram T");
})();
