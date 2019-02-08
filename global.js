
// Array Operations
//removing duplicate elements from array
let uniqueElArray = Array.from(new Set(array));

//fetch Object by value from AoO
let AoB=[{"a":1,"b":2,"c":3},{"a":4,"b":5,"c":6}]; 
let eachObj=AoB.find(x => x.a === 1)
console.log(`eachObj`, eachObj);

//getting particular values array from  AofO
let elArray= AoB.map(a => a.elArray);

//ECMAScript 2015 (ES6) Standard Method
/* For the case in question, you would do: */
Object.assign(obj1, obj2);
//or
var allRules = Object.assign({}, obj1, obj2, obj3, etc);

//finding the value in array
let arr = ['a','b','c'];
arr.findIndex(k => k=='b');

//finding object in AoO
//Finding matching objects in an array of objects

//Using Array#filter, for this particular case the code would look like
// ref: url(https://stackoverflow.com/questions/6237537/finding-matching-objects-in-an-array-of-objects);
var set = [{"color":"blue"},{"color":"green"},{"color":"red"},{"color":"green"}];
var results = set.filter(function (entry) { return entry.color === "green"; });
    // [or]
function findByMatchingProperties(set, properties) {
    return set.filter(function (entry) {
        return Object.keys(properties).every(function (key) {
            return entry[key] === properties[key];
        });
    });
}
var results = findByMatchingProperties(set, { color: "green" });

//split string
//split name into firstName and lastName
str.substr(0,str.indexOf(' '));
str.substr(str.indexOf(' ')+1); 

//---------------------- forms ----------------
//form submit
$("#formId").submit(function (event) {
    event.preventDefault();
    let serialize = $(this).serializeArray();
    
//     //handle file data
//     let uploadedFile = $('#uploadFile').prop('files')[0];
//     alert(uploadedFile.name);
    
    let formObj = {};
    $.each(serialize, function (key, val) {
        formObj[val.name] = val.value;
    });
    console.log(formObj);

    cbFn(formObj);
});

//jQuery keypress 
//Key press functions
// 1 . default 
$(document).ready(function(){
   $('.vaildName').bind('keypress', vaildName);
});
//2. if the html elements are created dynamiccaly then    
$(document).bind("keypress",".validName",vaildNo);

function vaildName(e) {
    a('key pressed');
}


//Compare two arrays and return a new array with any items only found in one of the original arrays
//method 1
var array1 = ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    array2 = ["diorite", "andesite", "grass", "dirt", "dead shrub"];
function symmetricDifference(setA, setB) {
    var o = {}, result = [];
    function count(i, o) {
        return function (a) {
            o[a] = o[a] || { count: 0, value: a };
            o[a].count += i;
        };
    }

    setA.forEach(count(1, o));
    setB.forEach(count(-1, o));
    Object.keys(o).forEach(function (k) {
        if (o[k].count) {
            o[k].count = Math.abs(o[k].count);
            while (o[k].count--) {
                result.push(o[k].value);
            }
        }
    });
    return result;
}

//method 2
Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};
// Examples  
[1,2,3,4,5,6].diff( [3,4,5] );  
// => [1, 2, 6]
["test1", "test2","test3","test4","test5","test6"].diff(["test1","test2","test3","test4"]);  
// => ["test5", "test6"]


//self invoking function
(function myLoop (i) {          
    setTimeout(function () {   
       alert('hello');          //  your code here                
       if (--i) myLoop(i);      //  decrement i and call myLoop again if i > 0
    }, 3000)
 })(10);                        //  pass the number of iterations as an argument

//------------- DATES -----------------------
// ISO STRING
var date = new Date();
date.toISOString(); //"2018-07-03T18:45:44.855Z"



//Download Javascript As Json

$("#data").click(function() {
  $("<a />", {
    "download": "data.json",
    "href" : "data:application/json," + encodeURIComponent(JSON.stringify($(this).data().obj))
  }).appendTo("body")
  .click(function() {
     $(this).remove()
  })[0].click()
});

//first letter capital
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//Json file upload 
<input type="file" id="selectFiles" value="Import" />
$("#inputFile").change(function(e) {
    var reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(e.target.files[0]);
});
function onReaderLoad(event){
    //alert(event.target.result);
    var obj = JSON.parse(event.target.result);
    console.log('file uploaded successfully...',obj);
}
