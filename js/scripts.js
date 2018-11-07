function empty(list) {
  console.log(list);
    list = [];
    console.log(list);
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

function Coffee(typeCup, count, hot, cold, sleeve, straw, total) {
  this.typeCup = typeCup,
  this.count = count,
  this.hot = hot
  this.cold = cold
  this.sleeve = sleeve
  this.straw = straw
  this.total = total
  this.totalAccessories = []
}

Coffee.prototype.noCup = function() {
  return this.total = this.count * 100;
}

Coffee.prototype.ownCup = function() {
  return this.total = this.count * 50;
}
Coffee.prototype.typeOfCofffee = function() {
  this.hot = this.hot += 50
  this.cold = this.cold += 50
  this.sleeve = this.sleeve += 70
  this.straw = this.straw += 80
  this.totalAccessories.push(this.hot,this.cold,this.sleeve,this.straw);

  return this.totalAccessories;
}

Coffee.prototype.totalCoffeeAccessories = function() {
  for(var i = 0; this.totalAccessories.length; i++) {
    this.total += this.totalAccessories[i];
  }
  return this.totalAccessories;
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
toGoContainers.prototype.totalCarbonforGraph = function() {
  return this.totalCarbonSum;
}




$(document).ready(function() {
  var takeOutData = {
    header: ["takeout", "Amount CO2"],
    rows:[],
  };
  var transitData = {
    header: ["takeout", "Amount CO2"],
    rows:[],
  };


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
        transitData.rows.push(["Monday", dailyCarbon.calculateCar()]);
        console.log(takeOutData.rows);
      } else if(dayOfWeek === "2") {
        $("#tuesdayCommuteFootprint").text(dailyCarbon.calculateCar() + " grams of CO2 per passenger per mile");
        $("#tuesdayCommute").text("Car");
        transitData.rows.push(["Tuesday", dailyCarbon.calculateCar()]);
      } else if(dayOfWeek === "3") {
        $("#wednesdayCommuteFootprint").text(dailyCarbon.calculateCar() + " grams of CO2 per passenger per mile");
        $("#wednesdayCommute").text("Car");
        transitData.rows.push(["Wednesday", dailyCarbon.calculateCar()]);
      } else if (dayOfWeek === "4"){
        $("#thursdayCommuteFootprint").text(dailyCarbon.calculateCar() + " grams of CO2 per passenger per mile");
        $("#thursdayCommute").text("Car");
        transitData.rows.push(["Thursday", dailyCarbon.calculateCar()]);
      } else if (dayOfWeek === "5"){
        $("#fridayCommuteFootprint").text(dailyCarbon.calculateCar() + " grams of CO2 per passenger per mile");
        $("#fridayCommute").text("Car");
        transitData.rows.push(["Friday", dailyCarbon.calculateCar()]);
      } else if (dayOfWeek === "6"){
        $("#saturdayCommuteFootprint").text(dailyCarbon.calculateCar() + " grams of CO2 per passenger per mile");
        $("#saturdayCommute").text("Car");
        transitData.rows.push(["Saturday", dailyCarbon.calculateCar()]);
      } else if (dayOfWeek === "7"){
        $("#sundayCommuteFootprint").text(dailyCarbon.calculateCar() + " grams of CO2 per passenger per mile");
        $("#sundayCommute").text("Car");
        transitData.rows.push(["Sunday", dailyCarbon.calculateCar()]);
      }
    }
    if (transportation === "3") {
      if(dayOfWeek === "1") {
        $("#mondayCommuteFootprint").text(dailyCarbon.calculateBus() + " grams of CO2 per passenger per mile");
        $("#mondayCommute").text("Bus");
        transitData.rows.push(["Monday", dailyCarbon.calculateBus()]);
      } else if(dayOfWeek === "2") {
        $("#tuesdayCommuteFootprint").text(dailyCarbon.calculateBus() + " grams of CO2 per passenger per mile");
        $("#tuesdayCommute").text("Bus");
          transitData.rows.push(["Tuesday", dailyCarbon.calculateBus()]);
      } else if(dayOfWeek === "3") {
        $("#wednesdayCommuteFootprint").text(dailyCarbon.calculateBus() + " grams of CO2 per passenger per mile");
        $("#wednesdayCommute").text("Bus");
          transitData.rows.push(["Wednesday", dailyCarbon.calculateBus()]);
      } else if (dayOfWeek === "4"){
        $("#thursdayCommuteFootprint").text(dailyCarbon.calculateBus() + " grams of CO2 per passenger per mile");
        $("#thursdayCommute").text("Bus");
          transitData.rows.push(["Thursday", dailyCarbon.calculateBus()]);
      } else if (dayOfWeek === "5"){
        $("#fridayCommuteFootprint").text(dailyCarbon.calculateBus() + " grams of CO2 per passenger per mile");
        $("#fridayCommute").text("Bus");
          transitData.rows.push(["Friday", dailyCarbon.calculateBus()]);
      } else if (dayOfWeek === "6"){
        $("#saturdayCommuteFootprint").text(dailyCarbon.calculateBus() + " grams of CO2 per passenger per mile");
        $("#saturdayCommute").text("Bus");
          transitData.rows.push(["Saturday", dailyCarbon.calculateBus()]);
      } else if (dayOfWeek === "7"){
        $("#sundayCommuteFootprint").text(dailyCarbon.calculateBus() + " grams of CO2 per passenger per mile");
        $("#sundayCommute").text("Bus");
          transitData.rows.push(["Sunday", dailyCarbon.calculateBus()]);
      }
    }
    if (transportation === "2") {
      if(dayOfWeek === "1") {
        $("#mondayCommuteFootprint").text(dailyCarbon.calculateBike() + " grams of CO2 per passenger per mile");
        $("#mondayCommute").text("Bike/Walk");
          transitData.rows.push(["Monday", dailyCarbon.calculateBike()]);
      } else if(dayOfWeek === "2") {
        $("#tuesdayCommuteFootprint").text(dailyCarbon.calculateBike() + " grams of CO2 per passenger per mile");
        $("#tuesdayCommute").text("Bike/Walk");
        transitData.rows.push(["Tuesday", dailyCarbon.calculateBike()]);
      } else if(dayOfWeek === "3") {
        $("#wednesdayCommuteFootprint").text(dailyCarbon.calculateBike() + " grams of CO2 per passenger per mile");
        $("#wednesdayCommute").text("Bike/Walk");
        transitData.rows.push(["Wednesday", dailyCarbon.calculateBike()]);
      } else if (dayOfWeek === "4"){
        $("#thursdayCommuteFootprint").text(dailyCarbon.calculateBike() + " grams of CO2 per passenger per mile");
        $("#thursdayCommute").text("Bike/Walk");
        transitData.rows.push(["Thursday", dailyCarbon.calculateBike()]);
      } else if (dayOfWeek === "5"){
        $("#fridayCommuteFootprint").text(dailyCarbon.calculateBike() + " grams of CO2 per passenger per mile");
        $("#fridayCommute").text("Bike/Walk");
        transitData.rows.push(["Friday", dailyCarbon.calculateBike()]);
      } else if (dayOfWeek === "6"){
        $("#saturdayCommuteFootprint").text(dailyCarbon.calculateBike() + " grams of CO2 per passenger per mile");
        $("#saturdayCommute").text("Bike/Walk");
        transitData.rows.push(["Saturday", dailyCarbon.calculateBike()]);
      } else if (dayOfWeek === "7"){
        $("#sundayCommuteFootprint").text(dailyCarbon.calculateBike() + " grams of CO2 per passenger per mile");
        $("#sundayCommute").text("Bike/Walk");
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
        takeOutData.rows.push(["Takeout - Monday", takeoutCarbon.totalCarbonforGraph()]);
      } else if (takeoutDayofWeek === 2) {
        $("#tuesdayTakeoutFootprint").text(takeoutCarbon.totalCarbon());
        takeOutData.rows.push(["Tuesday", takeoutCarbon.totalCarbonforGraph()]);
      } else if (takeoutDayofWeek === 3) {
        $("#wednesdayTakeoutFootprint").text(takeoutCarbon.totalCarbon());
        takeOutData.rows.push(["Wednesday", takeoutCarbon.totalCarbonforGraph()]);
      } else if (takeoutDayofWeek === 4) {
        $("#thursdayTakeoutFootprint").text(takeoutCarbon.totalCarbon());
        takeOutData.rows.push(["Thursday", takeoutCarbon.totalCarbonforGraph()]);
      } else if (takeoutDayofWeek === 5) {
        $("#fridayTakeoutFootprint").text(takeoutCarbon.totalCarbon());
        takeOutData.rows.push(["Friday", takeoutCarbon.totalCarbonforGraph()]);
      } else if (takeoutDayofWeek === 6) {
        $("#saturdayTakeoutFootprint").text(takeoutCarbon.totalCarbon());
        takeOutData.rows.push(["Saturday", takeoutCarbon.totalCarbonforGraph()]);
      } else if (takeoutDayofWeek === 7) {
        $("#sundayTakeoutFootprint").text(takeoutCarbon.totalCarbon());
        takeOutData.rows.push(["Sunday", takeoutCarbon.totalCarbonforGraph()]);
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
});
