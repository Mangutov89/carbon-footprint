function add(a, b) {
 return a + b;
}

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

function toGoContainers (paperBag, plasticBag, recycledPaperBox, paperBox, bagasse, utensils, napkins) {
  this.paperBag = paperBag,
  this.plasticBag = plasticBag,
  this.recycledPaperBox = recycledPaperBox,
  this.paperBox = paperBox,
  this.bagasse = bagasse,
  this.utensils = utensils,
  this.napkins = napkins,
  this.totalTakeoutCarbonArray = [],
  this.totalCarbonSum = 0
}

toGoContainers.prototype.arraySum = function() {
  this.paperBag = this.paperBag * 12;
  this.plasticBag = this.plasticBag * 12;
  this.recycledPaperBox = this.recycledPaperBox * 41;
  this.paperBox = this.paperBox * 41;
  this.bagasse = this.bagasse * 21;
  this.utensils = this.utensils * 13;
  this.napkins = this.napkins * 4;
  this.totalTakeoutCarbonArray.push(this.paperBag,this.plasticBag,this.recycledPaperBox,this.paperBox,this.bagasse,this.utensils,this.napkins);

return this.totalTakeoutCarbonArray;
}

toGoContainers.prototype.totalCarbon = function() {
  for (i = 0; i < this.totalTakeoutCarbonArray.length; i++) {
    this.totalCarbonSum += this.totalTakeoutCarbonArray[i];
  }
  return this.totalCarbonSum + " grams of CO2";
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
  $(".takeoutForm").submit(function(event) {
    event.preventDefault();
    var paperBag = parseInt($(".paperBag").val());
    var plasticBag = parseInt($(".plasticBag").val());
    var recycledPaperBox = parseInt($(".recycledPaperBox").val());
    var paperBox = parseInt($(".paperBox").val());
    var bagasse = parseInt($(".bagasse").val());
    var utensils = parseInt($(".utensils").val());
    var napkins = parseInt($(".napkins").val());

    var takeoutCarbon = new toGoContainers(paperBag, plasticBag, recycledPaperBox, paperBox, bagasse, utensils, napkins);

    var takeoutDayofWeek = parseInt($(".takeoutSelectWeekday").val());
    takeoutCarbon.arraySum();
    if (takeoutDayofWeek === 1) {
      $("#mondayTakeoutFootprint").text(takeoutCarbon.totalCarbon());
    } else if (takeoutDayofWeek === 2) {
      $("#tuesdayTakeoutFootprint").text(takeoutCarbon.totalCarbon());
    } else if (takeoutDayofWeek === 3) {
      $("#wednesdayTakeoutFootprint").text(takeoutCarbon.totalCarbon());
    } else if (takeoutDayofWeek === 4) {
      $("#thursdayTakeoutFootprint").text(takeoutCarbon.totalCarbon());
    } else if (takeoutDayofWeek === 5) {
      $("#fridayTakeoutFootprint").text(takeoutCarbon.totalCarbon());
    } else if (takeoutDayofWeek === 6) {
      $("#saturdayTakeoutFootprint").text(takeoutCarbon.totalCarbon());
    } else if (takeoutDayofWeek === 7) {
      $("#sundayTakeoutFootprint").text(takeoutCarbon.totalCarbon());
    }

  })
});
