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
  return this.total + " grams of CO2";
}

Coffee.prototype.totalCoffeeForGraph = function() {
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
    header: ["transit", "Amount CO2"],
    rows:[],
  };
  var coffeeData = {
    header: ["coffee", "Amount CO2"],
    rows:[],
  };

  $(".transitNav").click(function(){
    $(".mainDisplayDiv").hide();
    $(".inputForm").show();
    $(".takeoutForm").hide();
    $(".coffeeForm").hide();
  })
  $(".takeoutNav").click(function(){
    $(".mainDisplayDiv").hide();
    $(".takeoutForm").show();
    $(".inputForm").hide();
    $(".coffeeForm").hide();
  })
  $(".coffeeNav").click(function(){
    $(".mainDisplayDiv").hide();
    $(".coffeeForm").show();
    $(".takeoutForm").hide();
    $(".inputForm").hide();
  })



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
        $("#mondayCommuteFootprint").text(dailyCarbon.calculateBike() + " grams of CO2 per rider");
        $("#mondayCommute").text("Bike/Walk");
        transitData.rows.push(["Monday", dailyCarbon.calculateBike()]);
      } else if(dayOfWeek === "2") {
        $("#tuesdayCommuteFootprint").text(dailyCarbon.calculateBike() + " grams of CO2 per rider");
        $("#tuesdayCommute").text("Bike/Walk");
        transitData.rows.push(["Tuesday", dailyCarbon.calculateBike()]);
      } else if(dayOfWeek === "3") {
        $("#wednesdayCommuteFootprint").text(dailyCarbon.calculateBike() + " grams of CO2 per rider");
        $("#wednesdayCommute").text("Bike/Walk");
        transitData.rows.push(["Wednesday", dailyCarbon.calculateBike()]);
      } else if (dayOfWeek === "4"){
        $("#thursdayCommuteFootprint").text(dailyCarbon.calculateBike() + " grams of CO2 per rider");
        $("#thursdayCommute").text("Bike/Walk");
        transitData.rows.push(["Thursday", dailyCarbon.calculateBike()]);
      } else if (dayOfWeek === "5"){
        $("#fridayCommuteFootprint").text(dailyCarbon.calculateBike() + " grams of CO2 per rider");
        $("#fridayCommute").text("Bike/Walk");
        transitData.rows.push(["Friday", dailyCarbon.calculateBike()]);
      } else if (dayOfWeek === "6"){
        $("#saturdayCommuteFootprint").text(dailyCarbon.calculateBike() + " grams of CO2 per rider");
        $("#saturdayCommute").text("Bike/Walk");
        transitData.rows.push(["Saturday", dailyCarbon.calculateBike()]);
      } else if (dayOfWeek === "7"){
        $("#sundayCommuteFootprint").text(dailyCarbon.calculateBike() + " grams of CO2 per rider");
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
    console.log(coffeeOrder)


    if (coffeeDayofWeek === 1) {
      $("#mondayCoffeeFootprint").text(coffeeOrder.totalCoffeeAccessories());
      coffeeData.rows.push(["Monday", coffeeOrder.totalCoffeeForGraph()]);
    } else if (coffeeDayofWeek === 2) {
      $("#tuesdayCoffeeFootprint").text(coffeeOrder.totalCoffeeAccessories());
      coffeeData.rows.push(["Tuesday", coffeeOrder.totalCoffeeForGraph()]);
    } else if (coffeeDayofWeek === 3) {
      $("#wednesdayCoffeeFootprint").text(coffeeOrder.totalCoffeeAccessories());
      coffeeData.rows.push(["Wednesday", coffeeOrder.totalCoffeeForGraph()]);
    } else if (coffeeDayofWeek === 4) {
      $("#thursdayCoffeeFootprint").text(coffeeOrder.totalCoffeeAccessories());
      coffeeData.rows.push(["Thursday", coffeeOrder.totalCoffeeForGraph()]);
    } else if (coffeeDayofWeek === 5) {
      $("#fridayCoffeeFootprint").text(coffeeOrder.totalCoffeeAccessories());
      coffeeData.rows.push(["Friday", coffeeOrder.totalCoffeeForGraph()]);
    } else if (coffeeDayofWeek === 6) {
      $("#saturdayCoffeeFootprint").text(coffeeOrder.totalCoffeeAccessories());
      coffeeData.rows.push(["Saturday", coffeeOrder.totalCoffeeForGraph()]);
    } else if (coffeeDayofWeek === 7) {
      $("#sundayCoffeeFootprint").text(coffeeOrder.totalCoffeeAccessories());
      coffeeData.rows.push(["Sunday", coffeeOrder.totalCoffeeForGraph()]);
    }

  })
  $(".takeoutGraph-button").click(function() {
    var chart = anychart.column();

    var dataColor = chart.column(takeOutData);
    dataColor.normal().fill("#86BBD8", 1);
    dataColor.normal().stroke("#86BBD8", null);
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

    var dataColor2 = chart.column(transitData);
    dataColor2.normal().fill("#2F4858", 1);
    dataColor2.normal().stroke("#2F4858", null);
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

    var dataColor3 = chart.column(coffeeData);
    dataColor3.normal().fill("#9EE493", 1);
    dataColor3.normal().stroke("#9EE493", null);
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
  $(".suggestClick").click(function() {
    $(".suggestList").show();
    $(".reduceEmissionsList").hide();
    $(".differentCommuteList").hide();
    $(".suggestList").addClass("factsAddClass");
  });
  $(".reduceClick").click(function() {
    $(".reduceEmissionsList").show();
    $(".suggestList").hide();
    $(".differentCommuteList").hide();
    $(".reduceEmissionsList").addClass("factsAddClass");
  });
  $(".linkClick").click(function() {
    $(".differentCommuteList").show();
    $(".suggestList").hide();
    $(".reduceEmissionsList").hide();
    $(".differentCommuteList").addClass("factsAddClass");
  });
  $(".takeoutTrashClick").click(function() {
    $(".takeoutVideoModal").show();
    $(".close").click(function() {
      $(".takeoutVideoModal").hide();
    })
  });
});
