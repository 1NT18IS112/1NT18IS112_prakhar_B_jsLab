function fib(){
    var number = prompt("Enter the number of terms in the FIBONACCI series ")
    var num1 = 1;
    var num2 = 0;
    var ans = 0;
    var arr = [];
    for(var i = 0; i < number; i++){
        ans = num1 + num2;
        num1 = num2;
        num2 = ans;
        arr.push(ans);
        console.log(arr);
    }
    document.getElementById("p1").innerHTML = arr;
}

function arm(){
    var num = prompt("Enter the number to find if its armstrong number or not")
    var x = num;
    var ans = 0;
    while(num > 0){
        var t = parseInt(num % 10);
        num = parseInt(num / 10);
        var t2 = parseInt(Math.pow(t, 3));    
        ans += t2;
    }
    if(x == ans){
        document.getElementById("p2").innerHTML = "Given number is ARMSTRONG number";
    }
    else{
        document.getElementById("p2").innerHTML = "Given number is NOT ARMSTRONG number";
    }
}
var array = [];
function add(){
    var x1 = document.getElementById("a1").value;
    array.push(x1);
    console.log(array);
}
function display(){
    document.getElementById("p3").innerHTML = array;
    console.log(array);
}
function del(){
    array.pop();
    document.getElementById("p3").innerHTML = array;
    console.log(array);
}