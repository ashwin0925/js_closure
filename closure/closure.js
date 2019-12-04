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
var lastNameTrier = function(firstName){
    var innerFunction = function(lastName){
        return firstName+ ' '+ lastName
    }
    return innerFunction;
}
var firstNameFarmer = lastNameTrier('Farmer');
    firstNameFarmer('Brown');
    
// 5
function storyWriter(str=''){
    return {addWords :function add(str1){
        return str = str + str1
    },
    earse:function ears(){
        return str = '';
        }
    }
    }