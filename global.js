
// Array Operations
//removing duplicate elements from array
let uniqueElArray = Array.from(new Set(array));

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


// 1
//jQuery keypress 
//Key press functions
$(document).ready(function(){
    
    $('.vaildName').bind('keypress', vaildName);
});
function vaildName(e) {
    a('key pressed');
}

// Jquery Form Subbmission
$( "form" ).submit(function( event ) {
    if ( $( "input:first" ).val() === "correct" ) {
        $( "span" ).text( "Validated..." ).show();
        return;
    }
    $( "span" ).text( "Not valid!" ).show().fadeOut( 1000 );
    event.preventDefault();
});


//Compare two arrays and return a new array with any items only found in one of the original arrays
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
