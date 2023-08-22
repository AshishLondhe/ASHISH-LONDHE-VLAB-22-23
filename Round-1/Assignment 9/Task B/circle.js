function calculateArea() {
    var radius = parseFloat(document.getElementById("radius").value);
    
    var area = Math.PI * Math.pow(radius, 2);
    
    document.getElementById("result").innerHTML = "The area of the circle is: " + area.toFixed(2);
}