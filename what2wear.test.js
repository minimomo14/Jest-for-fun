const what2wear = require("./what2wear.js")

describe("what2wear", function(){
    test("If event is Casual", function(){
        expect(what2wear("Casual",50)).toEqual("a coat","Wear something comfy");
    });
    test("If event is Formal", function(){
        expect(what2wear("Formal",65)).toEqual("Wear a jacket","a suit");
    });
    test("If event is Semi-Formal", function(){
        expect(what2wear("Semi-Formal",75)).toEqual("Wear no-jacket","a polo");
    });
});

//or 
//describe("what2Wear", function(){
   // test("If the event is casual 50 degrees", function() {
   //     expect(what2Wear("casual", 50)).toEqual("Since it is 50 degrees and you are going to a casual event, you should wear something comfy and a coat");
                                            
   // });

   // test("If the event is formal 65 degrees", function() {
   //     expect(what2Wear("formal", 65)).toEqual("Since it is 65 degrees and you are going to a formal event, you should wear a suit and a jacket");
    // });

    //test("If the event is semi-formal 75 degrees", function() {
     //   expect(what2Wear("semi-formal", 75)).toEqual("Since it is 75 degrees and you are going to a semi-formal event, you should wear a polo and no jacket");
  //  });
//});


