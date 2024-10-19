console.log("hello");
// let rectangle={
//     length:1,
//     breadth:2,
//     draw:function(){
//         console.log('drawing');
//     }
// };

// Factory function

function createRectangle(length,breadth){
    let rectangle={
        // length:length,
        // breadth:breadth,
        length,
        breadth,
        // draw:function (){
        //     console.log('drawing');
        // },
        draw (){
            console.log('drawing');
        }
    };
    return rectangle;
}
rectangle1=createRectangle(2,4);


// constructor function--> Pascal Notation--> NumberOfTeacher,HelloWorld,etc...
function rectangle(length,breadth){
    this.length=length;
    this.breadth=breadth;
}
// new keyword is used to call constructor function 
let rec=new rectangle(3,5);
// adding new property to object
rec.color='green';
//removing property
// delete rec.length;


// constructor prop;
rectangle.constructor;

// for-in loop-->used to iterate on objects

for(let key in rec){
    console.log(key,rec[key]);
}


// for-of loop used on iterables like arrays
// Object.entries(rec) -->give array of keys of rec object
for(let key of Object.entries(rec)){
    console.log(key,rec[key]);
}

if('color' in rec){
    console.log('present');
}

// object cloning
// M-1
let cloneObj={};
for(let key in rec){
    cloneObj[key]=rec[key];
}

// M-2
let clone2=Object.assign({},rec);

// M-3

let clone3={...rec};


// clone 2 or more obj in one obj

let clone=Object.assign({},rec,rectangle1);