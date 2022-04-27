alert("Hello");
result = prompt("How old are u?", [10]); // returns value what user inputs value and clicks yes else(when clicks cancel) null
if(result) {
    alert(`You are ${result} years old!`); // You are ${result} years old!    
} else {
    result = prompt("How old are u?");
}
result = confirm("It's just question..."); // returns true if man clicks yes else false
alert(result);
