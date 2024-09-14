//your JS code here. If required.
let li = document.getElementById("level");
let li_parent = li.parentNode;
// console.log("🚀 ~ li_parent:", li_parent)

let c = 0;
while (li_parent != null) {
    li_parent = li_parent.parentNode;
    // console.log("🚀 ~ li_parent:", li_parent)
    // console.log("🚀 ~ c:", c)  
    c++;
}
alert("level of the element is: " + c)