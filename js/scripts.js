function Carbon(transportation, mile, total) {
  this.transportation = transportation,
  this.mile = mile,
  this.total = 0

}
// results approximately in grams of CO2 per passenger per mile
Carbon.prototype.calculateCar = function() {
  return this.total = this.mile * 168;
}

Carbon.prototype.calculateBike = function() {
  return this.total = this.mile * 13;
}

Carbon.prototype.calculateBus = function() {
  return this.total = this.mile * 63;
}

Carbon.prototype.carbonFootprint = function() {
  if (this.total > 3696) {
    return alert("you need to use more public transportation")
  } else {
    return alert("you're doing fine!")
  }
}


$(document).ready(function() {
  $(".inputForm").submit(function(event) {
    event.preventDefault();
    var dayOfWeek = $(".selectWeekday").val();
    var inputMile = parseInt($("#mileage").val());
    var transportation = $("input:radio[name=transportation]:checked").val();

    var dailyCarbon = new Carbon(transportation, inputMile);
    console.log(dayOfWeek, inputMile, transportation);

    console.log(dailyCarbon.total);

    if (transportation === "4") {
      if(dayOfWeek === "1") {
        $("#mondayCommuteFootprint").text(dailyCarbon.calculateCar() + " grams of CO2 per passenger per mile");
        $("#mondayCommute").text("Car");
      } else if(dayOfWeek === "2") {
        $("#tuesdayCommuteFootprint").text(dailyCarbon.calculateCar() + " grams of CO2 per passenger per mile");
        $("#tuesdayCommute").text("Car");
      } else if(dayOfWeek === "3") {
        $("#wednesdayCommuteFootprint").text(dailyCarbon.calculateCar() + " grams of CO2 per passenger per mile");
        $("#wednesdayCommute").text("Car");
      } else if (dayOfWeek === "4"){
        $("#thursdayCommuteFootprint").text(dailyCarbon.calculateCar() + " grams of CO2 per passenger per mile");
        $("#thursdayCommute").text("Car");
      } else if (dayOfWeek === "5"){
        $("#fridayCommuteFootprint").text(dailyCarbon.calculateCar() + " grams of CO2 per passenger per mile");
        $("#fridayCommute").text("Car");
      } else if (dayOfWeek === "6"){
        $("#saturdayCommuteFootprint").text(dailyCarbon.calculateCar() + " grams of CO2 per passenger per mile");
        $("#saturdayCommute").text("Car");
      } else if (dayOfWeek === "7"){
        $("#sundayCommuteFootprint").text(dailyCarbon.calculateCar() + " grams of CO2 per passenger per mile");
        $("#sundayCommute").text("Car");
      }
    }
    if (transportation === "3") {
      if(dayOfWeek === "1") {
        $("#mondayCommuteFootprint").text(dailyCarbon.calculateBus() + " grams of CO2 per passenger per mile");
        $("#mondayCommute").text("Bus");
      } else if(dayOfWeek === "2") {
        $("#tuesdayCommuteFootprint").text(dailyCarbon.calculateBus() + " grams of CO2 per passenger per mile");
        $("#tuesdayCommute").text("Bus");
      } else if(dayOfWeek === "3") {
        $("#wednesdayCommuteFootprint").text(dailyCarbon.calculateBus() + " grams of CO2 per passenger per mile");
        $("#wednesdayCommute").text("Bus");
      } else if (dayOfWeek === "4"){
        $("#thursdayCommuteFootprint").text(dailyCarbon.calculateBus() + " grams of CO2 per passenger per mile");
        $("#thursdayCommute").text("Bus");
      } else if (dayOfWeek === "5"){
        $("#fridayCommuteFootprint").text(dailyCarbon.calculateBus() + " grams of CO2 per passenger per mile");
        $("#fridayCommute").text("Bus");
      } else if (dayOfWeek === "6"){
        $("#saturdayCommuteFootprint").text(dailyCarbon.calculateBus() + " grams of CO2 per passenger per mile");
        $("#saturdayCommute").text("Bus");
      } else if (dayOfWeek === "7"){
        $("#sundayCommuteFootprint").text(dailyCarbon.calculateBus() + " grams of CO2 per passenger per mile");
        $("#sundayCommute").text("Bus");
      }
    }
    if (transportation === "2") {
      if(dayOfWeek === "1") {
        $("#mondayCommuteFootprint").text(dailyCarbon.calculateBike() + " grams of CO2 per passenger per mile");
        $("#mondayCommute").text("Bike/Walk");
      } else if(dayOfWeek === "2") {
        $("#tuesdayCommuteFootprint").text(dailyCarbon.calculateBike() + " grams of CO2 per passenger per mile");
        $("#tuesdayCommute").text("Bike/Walk");
      } else if(dayOfWeek === "3") {
        $("#wednesdayCommuteFootprint").text(dailyCarbon.calculateBike() + " grams of CO2 per passenger per mile");
        $("#wednesdayCommute").text("Bike/Walk");
      } else if (dayOfWeek === "4"){
        $("#thursdayCommuteFootprint").text(dailyCarbon.calculateBike() + " grams of CO2 per passenger per mile");
        $("#thursdayCommute").text("Bike/Walk");
      } else if (dayOfWeek === "5"){
        $("#fridayCommuteFootprint").text(dailyCarbon.calculateBike() + " grams of CO2 per passenger per mile");
        $("#fridayCommute").text("Bike/Walk");
      } else if (dayOfWeek === "6"){
        $("#saturdayCommuteFootprint").text(dailyCarbon.calculateBike() + " grams of CO2 per passenger per mile");
        $("#saturdayCommute").text("Bike/Walk");
      } else if (dayOfWeek === "7"){
        $("#sundayCommuteFootprint").text(dailyCarbon.calculateBike() + " grams of CO2 per passenger per mile");
        $("#sundayCommute").text("Bike/Walk");
      }
    }
  });
});
