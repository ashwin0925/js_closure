// 1
function nonsense (string){
    var blab = function (){
        alert(string);
    }
   blab()
};

// 2
function nonsense (string){
    var blab = function (){
        alert(string);
    }
   setTimeout(blab,2000)
};

// 3
function nonsense (string){
    function blab(){
alert(string)
    }
return blab;
}
var blabLater = nonsense('welcome');
blabLater()
var blabAgainLater = nonsense('to class');
blabAgainLater()

// 4
function firstName(str1){
    return function (str2)
{
    return str1 + ' '+str2;
}
}

var nam = firstName('ashwin')('kumar');
console.log(nam);