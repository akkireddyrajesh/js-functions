/*---------------- Objects -----------------*/
//object check
let isObjEmpty=(obj)=>{if(Object.entries(obj).length === 0 && obj.constructor === Object) return true; return false;}
//loop through Objects
const obj = { foo: 'bar', baz: 42 };
Object.entries(obj).forEach(([key, value]) => console.log(`${key}: ${value}`)); // "foo: bar", "baz: 42"
//ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries 
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries">reference</a>

//ECMAScript 2015 (ES6) Standard Method
/* For the case in question, you would do: */
Object.assign(obj1, obj2);
//or
var allRules = Object.assign({}, obj1, obj2, obj3, etc);


/*---------------- Arrays -----------------*/

// Array Operations
//removing duplicate elements from array
let uniqueElArray = Array.from(new Set(array));

//fetch Object by value from AoO
let AoB=[{"a":1,"b":2,"c":3},{"a":4,"b":5,"c":6}]; 
let eachObj=AoB.find(x => x.a === 1)
console.log(`eachObj`, eachObj);

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

//getting particular values array from  AofO
let elArray= AoB.map(a => a.elArray);

//finding the value in array
let arr = ['a','b','c'];
arr.findIndex(k => k=='b');
//----------- AoO ----------

//(1)finding object in AoO
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

//(2) removing duplicate objects from AoO
// ref:https://stackoverflow.com/questions/2218999/remove-duplicates-from-an-array-of-objects-in-javascript 
let things={
    "thing" :[
        {place:"here",name:"stuff"},
        {place:"there",name:"morestuff"},
        {place:"there",name:"morestuff"}
    ]
};

things.thing = things.thing.filter((thing, index, self) =>
  index === self.findIndex((t) => (
    t.place === thing.place && t.name === thing.name
  ))
)
// o/p:
// {place:"here",name:"stuff"},
// {place:"there",name:"morestuff"}


//------------- DATES -----------------------
// ISO STRING
var date = new Date();
date.toISOString(); //"2018-07-03T18:45:44.855Z"

function getCurrentTime() {
    Number.prototype.padLeft = function(base, chr) {
        var len = (String(base || 10).length - String(this).length) + 1;
        return len > 0 ? new Array(len).join(chr || '0') + this : this;
    }

    var d = new Date,
        dformat = [(d.getMonth() + 1).padLeft(),
            d.getDate().padLeft(),
            d.getFullYear()
        ].join('/') + ' ' + [d.getHours().padLeft(),
            d.getMinutes().padLeft(),
            d.getSeconds().padLeft()
        ].join(':');
    //=> dformat => '05/17/2012 10:52:21'
    return dformat;

}

//------------- JQuery -----------------------

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

//finding the max z-index value in html page
//How can you figure out the highest z-index in your document?
 var maxZ = Math.max.apply(null, 
    $.map($('body *'), function(e,n) {
      if ($(e).css('position') != 'static')
        return parseInt($(e).css('z-index')) || 1;
  }));


//----------- JQuery forms ------------
//form submit
$("#formId").submit(function (event) {
    event.preventDefault();
    let serialize = $(this).serializeArray();
    ////handle file data
    //let uploadedFile = $('#uploadFile').prop('files')[0];
    //alert(uploadedFile.name);
    let formObj = {};
    $.each(serialize, function (key, val) {
        formObj[val.name] = val.value;
    });
    console.log(formObj);
    cbFn(formObj);
});


//------------- String handling -----------------------

//split string
//split name into firstName and lastName
str.substr(0,str.indexOf(' '));
str.substr(str.indexOf(' ')+1); 

//string first letter Capitalize
const name = 'flavio'
const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);

//first letter capital
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//------------- Regular Expressions -----------------------
(1)alphabets with space
-------------------------------------
    //use: names 
    /^[a-z\s]+$/i
ex: /^[a-z\s]+$/i.test('rajesh kumar') //true


(2)alpha numeric values with out space
-------------------------------------
    // this for pancrad no and passport 
 /^[a-z0-9]*$/i
ex: /^[a-z0-9]*$/i.test('AP29BC1234') //true

(2)alpha numeric values with space
-------------------------------------
    //use: names 
 
/^[-\w\s]+$/
ex: 
/^[-\w\s]+$/.test('PAN 1235') //true
