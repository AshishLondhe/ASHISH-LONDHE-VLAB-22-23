function calculateArea() {
    var base = parseFloat(document.getElementById("base").value);
    var height = parseFloat(document.getElementById("height").value);
    
    var area = 0.5 * base * height;
    
    document.getElementById("result").innerHTML = "The area of the triangle is: " + area;
}