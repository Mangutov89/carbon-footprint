function empty(list) {
  console.log(list);
    list = [];
    console.log(list);
  }

function Carbon(transportation, mile) {
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


function Coffee(cupType, count, sleeve, straw) {
  this.cupType = cupType,
  this.count = count,
  this.sleeve = sleeve,
  this.straw = straw
  this.total = 0
  this.totalAccessories = []
}

Coffee.prototype.typeOfCoffee = function() {
  this.cupType = ((this.cupType * 148) + 40) * this.count;
  this.sleeve = this.sleeve * 2;
  this.straw = this.straw * 6;
  this.totalAccessories.push(this.cupType, this.sleeve, this.straw);

  return this.totalAccessories;
}

Coffee.prototype.totalCoffeeAccessories = function() {
  for(var i = 0;i < this.totalAccessories.length; i++) {
    this.total += this.totalAccessories[i];
  }
  return this.total
   // + " grams of CO2"; add again later
}

Coffee.prototype.totalCoffeeForGraph = function() {
  return this.total;
}
Coffee.prototype.totalCoffeeForAverage = function() {
  return this.total;
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
  return this.totalCarbonSum
   // + " grams of CO2"; add again later
}
toGoContainers.prototype.totalCarbonforGraph = function() {
  return this.totalCarbonSum;
}
toGoContainers.prototype.totalCarbonforAverage = function() {
  return this.totalCarbonSum;
}

function Totalarray(monday, tuesday, wednesday, thursday, friday, saturday, sunday) {
  this.monday = monday
  this.tuesday = tuesday
  this.wednesday = wednesday
  this.thursday = thursday
  this.friday = friday
  this.saturday = saturday
  this.sunday = sunday
  this.mondaySum = 0
  this.tuesdaySum = 0
  this.wednesdaySum = 0
  this.thursdaySum = 0
  this.fridaySum = 0
  this.saturdaySum = 0
  this.sundaySum = 0
}

Totalarray.prototype.mondayTotal = function() {
  for (var z = 0; z < this.monday.length; z++) {
    this.mondaySum += this.monday[z];
  }
  return this.mondaySum;
}

Totalarray.prototype.tuesdayTotal = function() {
  for (var j = 0; j < this.tuesday.length; j++) {
    this.tuesdaySum += this.tuesday[j];
  }
  return this.tuesdaySum;
}

Totalarray.prototype.wednesdayTotal = function() {
  for (var k = 0; k < this.wednesday.length; k++) {
    this.wednesdaySum += this.wednesday[k];
  }
  return this.wednesdaySum;
}

Totalarray.prototype.thursdayTotal = function() {
  for (var l = 0; l < this.thursday.length; l++) {
    this.thursdaySum += this.thursday[l];
  }
  return this.thursdaySum;
}

Totalarray.prototype.fridayTotal = function() {
  for (var m = 0; m < this.friday.length; m++) {
    this.fridaySum += this.friday[m];
  }
  return this.fridaySum;
}

Totalarray.prototype.saturdayTotal = function() {
  for (var n = 0; n < this.saturday.length; n++) {
    this.saturdaySum += this.saturday[n];
  }
  return this.saturdaySum;
}

Totalarray.prototype.sundayTotal = function() {
  for (var o = 0; o < this.sunday.length; o++) {
    this.sundaySum += this.sunday[o];
  }
  return this.sundaySum;
}


$(document).ready(function() {
  var takeOutData = {
    header: ["takeout", "Amount CO2"],
    rows:[],
  };
  var transitData = {
    header: ["transit", "Amount CO2"],
    rows:[],
  };
  var coffeeData = {
    header: ["coffee", "Amount CO2"],
    rows:[],
  };
  var mondayAddition = [];
  var tuesdayAddition = [];
  var wednesdayAddition = [];
  var thursdayAddition = [];
  var fridayAddition = [];
  var saturdayAddition = [];
  var sundayAddition = [];
  var totalArray = new Totalarray(mondayAddition, tuesdayAddition, wednesdayAddition, thursdayAddition, fridayAddition, saturdayAddition, sundayAddition)




  $(".inputForm").submit(function(event) {
    event.preventDefault();
    var dayOfWeek = $(".selectWeekday").val();

    var inputMile = parseInt($("#mileage").val());
    var transportation = $("input:radio[name=transportation]:checked").val();

    var dailyCarbon = new Carbon(transportation, inputMile);


    // dailySum.push()

    if (transportation === "4") {
      if(dayOfWeek === "1") {
        $("#mondayCommuteFootprint").text(dailyCarbon.calculateCar() + " grams of CO2 per passenger per mile");
        $("#mondayCommute").text("Car");
          mondayAddition.push(dailyCarbon.calculateCar());
          transitData.rows.push(["Monday", dailyCarbon.calculateCar()]);
      } else if(dayOfWeek === "2") {
        $("#tuesdayCommuteFootprint").text(dailyCarbon.calculateCar() + " grams of CO2 per passenger per mile");
        $("#tuesdayCommute").text("Car");
          tuesdayAddition.push(dailyCarbon.calculateCar());
          transitData.rows.push(["Tuesday", dailyCarbon.calculateCar()]);
      } else if(dayOfWeek === "3") {
        $("#wednesdayCommuteFootprint").text(dailyCarbon.calculateCar() + " grams of CO2 per passenger per mile");
        $("#wednesdayCommute").text("Car");
          wednesdayAddition.push(dailyCarbon.calculateCar());
          transitData.rows.push(["Wednesday", dailyCarbon.calculateCar()]);
      } else if (dayOfWeek === "4"){
        $("#thursdayCommuteFootprint").text(dailyCarbon.calculateCar() + " grams of CO2 per passenger per mile");
        $("#thursdayCommute").text("Car");
          thursdayAddition.push(dailyCarbon.calculateCar());
          transitData.rows.push(["Thursday", dailyCarbon.calculateCar()]);
      } else if (dayOfWeek === "5"){
        $("#fridayCommuteFootprint").text(dailyCarbon.calculateCar() + " grams of CO2 per passenger per mile");
        $("#fridayCommute").text("Car");
          fridayAddition.push(dailyCarbon.calculateCar());
          transitData.rows.push(["Friday", dailyCarbon.calculateCar()]);
      } else if (dayOfWeek === "6"){
        $("#saturdayCommuteFootprint").text(dailyCarbon.calculateCar() + " grams of CO2 per passenger per mile");
        $("#saturdayCommute").text("Car");
          saturdayAddition.push(dailyCarbon.calculateCar());
          transitData.rows.push(["Saturday", dailyCarbon.calculateCar()]);
      } else if (dayOfWeek === "7"){
        $("#sundayCommuteFootprint").text(dailyCarbon.calculateCar() + " grams of CO2 per passenger per mile");
        $("#sundayCommute").text("Car");
          sundayAddition.push(dailyCarbon.calculateCar());
          transitData.rows.push(["Sunday", dailyCarbon.calculateCar()]);
      }
    }
    if (transportation === "3") {
      if(dayOfWeek === "1") {
        $("#mondayCommuteFootprint").text(dailyCarbon.calculateBus() + " grams of CO2 per passenger per mile");
        $("#mondayCommute").text("Bus");
          mondayAddition.push(dailyCarbon.calculateBus());
          transitData.rows.push(["Monday", dailyCarbon.calculateBus()]);
      } else if(dayOfWeek === "2") {
        $("#tuesdayCommuteFootprint").text(dailyCarbon.calculateBus() + " grams of CO2 per passenger per mile");
        $("#tuesdayCommute").text("Bus");
          tuesdayAddition.push(dailyCarbon.calculateBus());
          transitData.rows.push(["Tuesday", dailyCarbon.calculateBus()]);
      } else if(dayOfWeek === "3") {
        $("#wednesdayCommuteFootprint").text(dailyCarbon.calculateBus() + " grams of CO2 per passenger per mile");
        $("#wednesdayCommute").text("Bus");
          wednesdayAddition.push(dailyCarbon.calculateBus());
          transitData.rows.push(["Wednesday", dailyCarbon.calculateBus()]);
      } else if (dayOfWeek === "4"){
        $("#thursdayCommuteFootprint").text(dailyCarbon.calculateBus() + " grams of CO2 per passenger per mile");
        $("#thursdayCommute").text("Bus");
          thursdayAddition.push(dailyCarbon.calculateBus());
          transitData.rows.push(["Thursday", dailyCarbon.calculateBus()]);
      } else if (dayOfWeek === "5"){
        $("#fridayCommuteFootprint").text(dailyCarbon.calculateBus() + " grams of CO2 per passenger per mile");
        $("#fridayCommute").text("Bus");
          fridayAddition.push(dailyCarbon.calculateBus());
          transitData.rows.push(["Friday", dailyCarbon.calculateBus()]);
      } else if (dayOfWeek === "6"){
        $("#saturdayCommuteFootprint").text(dailyCarbon.calculateBus() + " grams of CO2 per passenger per mile");
        $("#saturdayCommute").text("Bus");
          saturdayAddition.push(dailyCarbon.calculateBus());
          transitData.rows.push(["Saturday", dailyCarbon.calculateBus()]);
      } else if (dayOfWeek === "7"){
        $("#sundayCommuteFootprint").text(dailyCarbon.calculateBus() + " grams of CO2 per passenger per mile");
        $("#sundayCommute").text("Bus");
          sundayAddition.push(dailyCarbon.calculateBus());
          transitData.rows.push(["Sunday", dailyCarbon.calculateBus()]);
      }
    }
    if (transportation === "2") {
      if(dayOfWeek === "1") {
        $("#mondayCommuteFootprint").text(dailyCarbon.calculateBike() + " grams of CO2 per rider");
        $("#mondayCommute").text("Bike/Walk");
          mondayAddition.push(dailyCarbon.calculateBike());
          transitData.rows.push(["Monday", dailyCarbon.calculateBike()]);
      } else if(dayOfWeek === "2") {
        $("#tuesdayCommuteFootprint").text(dailyCarbon.calculateBike() + " grams of CO2 per rider");
        $("#tuesdayCommute").text("Bike/Walk");
          tuesdayAddition.push(dailyCarbon.calculateBike());
          transitData.rows.push(["Tuesday", dailyCarbon.calculateBike()]);
      } else if(dayOfWeek === "3") {
        $("#wednesdayCommuteFootprint").text(dailyCarbon.calculateBike() + " grams of CO2 per rider");
        $("#wednesdayCommute").text("Bike/Walk");
          wednesdayAddition.push(dailyCarbon.calculateBike());
          transitData.rows.push(["Wednesday", dailyCarbon.calculateBike()]);
      } else if (dayOfWeek === "4"){
        $("#thursdayCommuteFootprint").text(dailyCarbon.calculateBike() + " grams of CO2 per rider");
        $("#thursdayCommute").text("Bike/Walk");
          thursdayAddition.push(dailyCarbon.calculateBike());
          transitData.rows.push(["Thursday", dailyCarbon.calculateBike()]);
      } else if (dayOfWeek === "5"){
        $("#fridayCommuteFootprint").text(dailyCarbon.calculateBike() + " grams of CO2 per rider");
        $("#fridayCommute").text("Bike/Walk");
          fridayAddition.push(dailyCarbon.calculateBike());
          transitData.rows.push(["Friday", dailyCarbon.calculateBike()]);
      } else if (dayOfWeek === "6"){
        $("#saturdayCommuteFootprint").text(dailyCarbon.calculateBike() + " grams of CO2 per rider");
        $("#saturdayCommute").text("Bike/Walk");
          saturdayAddition.push(dailyCarbon.calculateBike());
          transitData.rows.push(["Saturday", dailyCarbon.calculateBike()]);
      } else if (dayOfWeek === "7"){
        $("#sundayCommuteFootprint").text(dailyCarbon.calculateBike() + " grams of CO2 per rider");
        $("#sundayCommute").text("Bike/Walk");
          sundayAddition.push(dailyCarbon.calculateBike());
          transitData.rows.push(["Sunday", dailyCarbon.calculateBike()]);
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
          mondayAddition.push(takeoutCarbon.totalCarbonforAverage());
          takeOutData.rows.push(["Takeout - Monday", takeoutCarbon.totalCarbonforGraph()]);
      } else if (takeoutDayofWeek === 2) {
        $("#tuesdayTakeoutFootprint").text(takeoutCarbon.totalCarbon());
          tuesdayAddition.push(takeoutCarbon.totalCarbonforAverage());
          takeOutData.rows.push(["Tuesday", takeoutCarbon.totalCarbonforGraph()]);
      } else if (takeoutDayofWeek === 3) {
        $("#wednesdayTakeoutFootprint").text(takeoutCarbon.totalCarbon());
          wednesdayAddition.push(takeoutCarbon.totalCarbonforAverage());
          takeOutData.rows.push(["Wednesday", takeoutCarbon.totalCarbonforGraph()]);
      } else if (takeoutDayofWeek === 4) {
        $("#thursdayTakeoutFootprint").text(takeoutCarbon.totalCarbon());
          thursdayAddition.push(takeoutCarbon.totalCarbonforAverage());
          takeOutData.rows.push(["Thursday", takeoutCarbon.totalCarbonforGraph()]);
      } else if (takeoutDayofWeek === 5) {
        $("#fridayTakeoutFootprint").text(takeoutCarbon.totalCarbon());
          fridayAddition.push(takeoutCarbon.totalCarbonforAverage());
          takeOutData.rows.push(["Friday", takeoutCarbon.totalCarbonforGraph()]);
      } else if (takeoutDayofWeek === 6) {
        $("#saturdayTakeoutFootprint").text(takeoutCarbon.totalCarbon());
          saturdayAddition.push(takeoutCarbon.totalCarbonforAverage());
          takeOutData.rows.push(["Saturday", takeoutCarbon.totalCarbonforGraph()]);
      } else if (takeoutDayofWeek === 7) {
        $("#sundayTakeoutFootprint").text(takeoutCarbon.totalCarbon());
          sundayAddition.push(takeoutCarbon.totalCarbonforAverage());
          takeOutData.rows.push(["Sunday", takeoutCarbon.totalCarbonforGraph()]);
      }
  });
  $(".coffeeForm").submit(function(event) {
    event.preventDefault();
    // var coffeeDayofWeek = parseInt($(".coffeeselectweekday").val());
    var cupType = parseInt($(".typeofcup").val());
    var count = parseInt($("#cupsofcoffee").val());
    var sleeve = parseInt($(".sleeve").val());
    var straw = parseInt($(".straw").val());


    var coffeeOrder = new Coffee(cupType, count, sleeve, straw);

    var coffeeDayofWeek = parseInt($(".coffeeselectweekday").val());
    coffeeOrder.typeOfCoffee();


    if (coffeeDayofWeek === 1) {
      $("#mondayCoffeeFootprint").text(coffeeOrder.totalCoffeeAccessories());
        mondayAddition.push(coffeeOrder.totalCoffeeForAverage())
        coffeeData.rows.push(["Monday", coffeeOrder.totalCoffeeForGraph()]);
    } else if (coffeeDayofWeek === 2) {
      $("#tuesdayCoffeeFootprint").text(coffeeOrder.totalCoffeeAccessories());
        tuesdayAddition.push(coffeeOrder.totalCoffeeForAverage())
        coffeeData.rows.push(["Tuesday", coffeeOrder.totalCoffeeForGraph()]);
    } else if (coffeeDayofWeek === 3) {
      $("#wednesdayCoffeeFootprint").text(coffeeOrder.totalCoffeeAccessories());
        wednesdayAddition.push(coffeeOrder.totalCoffeeForAverage())
        coffeeData.rows.push(["Wednesday", coffeeOrder.totalCoffeeForGraph()]);
    } else if (coffeeDayofWeek === 4) {
      $("#thursdayCoffeeFootprint").text(coffeeOrder.totalCoffeeAccessories());
        thursdayAddition.push(coffeeOrder.totalCoffeeForAverage())
        coffeeData.rows.push(["Thursday", coffeeOrder.totalCoffeeForGraph()]);
    } else if (coffeeDayofWeek === 5) {
      $("#fridayCoffeeFootprint").text(coffeeOrder.totalCoffeeAccessories());
        fridayAddition.push(coffeeOrder.totalCoffeeForAverage())
        coffeeData.rows.push(["Friday", coffeeOrder.totalCoffeeForGraph()]);
    } else if (coffeeDayofWeek === 6) {
      $("#saturdayCoffeeFootprint").text(coffeeOrder.totalCoffeeAccessories());
        saturdayAddition.push(coffeeOrder.totalCoffeeForAverage())
        coffeeData.rows.push(["Saturday", coffeeOrder.totalCoffeeForGraph()]);
    } else if (coffeeDayofWeek === 7) {
      $("#sundayCoffeeFootprint").text(coffeeOrder.totalCoffeeAccessories());
        sundayAddition.push(coffeeOrder.totalCoffeeForAverage())
        coffeeData.rows.push(["Sunday", coffeeOrder.totalCoffeeForGraph()]);
        console.log(sundayAddition);
    }

  })
  $(".takeoutGraph-button").click(function() {
    var chart = anychart.column();

    chart.data(takeOutData);

    // set the chart title
    chart.title("Takeout Footprint in Grams of CO2");

    // draw
    chart.container("takeoutGraphId");
    chart.draw();
    $(".takeoutModal").show();

    $(".close").click(function() {
      $(".takeoutModal").hide();
      $("#takeoutGraphId").empty()
  })
  })
  $(".transitGraph-button").click(function() {
    var chart = anychart.column();

    chart.data(transitData);

    // set the chart title
    chart.title("Transit Footprint in Grams of CO2");

    // draw
    chart.container("transitGraphId");
    chart.draw();
    $(".transitModal").show();

    $(".close").click(function() {
      $(".transitModal").hide();
      $("#transitGraphId").empty()
    })
  })
  $(".coffeeGraph-button").click(function() {
    var chart = anychart.column();

    chart.data(coffeeData);

    // set the chart title
    chart.title("Coffee Footprint in Grams of CO2");

    // draw
    chart.container("coffeeGraphId");
    chart.draw();
    $(".coffeeModal").show();

    $(".close").click(function() {
      $(".coffeeModal").hide();
      $("#coffeeGraphId").empty()
    })
  })
  $(".totalSubmitForm").click(function() {
    console.log("clicked");
    $("#mondayDailyFootprint").text(totalArray.mondayTotal());
    $("#tuesdayDailyFootprint").text(totalArray.tuesdayTotal());
    $("#wednesdayDailyFootprint").text(totalArray.wednesdayTotal());
    $("#thursdayDailyFootprint").text(totalArray.thursdayTotal());
    $("#fridayDailyFootprint").text(totalArray.fridayTotal());
    $("#saturdayDailyFootprint").text(totalArray.saturdayTotal());
    $("#sundayDailyFootprint").text(totalArray.sundayTotal());

    console.log(totalArray)

  })
  $(".clearSubmit").click(function() {
    $("#mondayDailyFootprint").empty();
    $("#mondayTakeoutFootprint").empty();
    $("#mondayCommuteFootprint").empty();
    $("#mondayCoffeeFootprint").empty();
    $("#tuesdayDailyFootprint").empty();
    $(".totalSubmitForm").show();
  })
});
