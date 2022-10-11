
//function for displaying values
function dis(val)
{
document.getElementById("hkc").value+=val
 }
//function for evaluation
function solve()
{
let x = document.getElementById("hkc").value
let y = eval(x)
document.getElementById("hkc").value = y
}
//function for clearing the display
function clr()
{
document.getElementById("hkc").value = ""
}
