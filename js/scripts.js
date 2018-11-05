function Carbon(name, mile, total) {
  this.name = name,
  this.mile = mile,
  this.total = 0
  

}
// results approximately in grams of CO2 per passenger per mile
Carbon.prototype.calculateCar = function(mile) {
    return this.total = this.mile * 168;
}

Carbon.prototype.calculateBike = function() {
  return this.total = this.mile * 13;
}

Carbon.prototype.calculateBus = function() {
  return this.total = this.mile * 63;
}

Carbon.prototype.carbonFootprint = function() {
  if (this.total > 1000) {
    return alert("you need to use more public transportation")
  } else {
    return alert("you're doing fine!")
  }
}







$(document).ready(function() {
var person1 = new Carbon("john", 20)

});
