function add(){
    var n1=document.getElementById("num1").value;
    var n2=document.getElementById("num2").value;
    if((n1=="")||(n2=="")){
        alert("Please enter both the numbers");
        return false;
    }
    var result= parseInt(n1)+parseInt(n2);
    document.getElementById("res").value=result;
}
function sub(){
    var n1=document.getElementById("num1").value;
    var n2=document.getElementById("num2").value;
    if((n1=="")||(n2=="")){
        alert("Please enter both the numbers");
        return false;
    }
    var result= parseInt(n1)-parseInt(n2);
    document.getElementById("res").value=result;
}
function mul(){
    var n1=document.getElementById("num1").value;
    var n2=document.getElementById("num2").value;
    if((n1=="")||(n2=="")){
        alert("Please enter both the numbers");
        return false;
    }
    var result= parseInt(n1)*parseInt(n2);
    document.getElementById("res").value=result;
}
function div(){
    var n1=document.getElementById("num1").value;
    var n2=document.getElementById("num2").value;
    if((n1=="")||(n2=="")){
        alert("Please enter both the numbers");
        return false;
    }
    if(parseInt(n2)>0)
    {
        var result= parseInt(n1)/parseInt(n2);
        document.getElementById("res").value=result;
    }
    else
    {
        document.getElementById("res").value="";
        alert("Divide By Zero");
        return false;
    }
}
function clearAll(){
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
    document.getElementById("res").value="";
}
