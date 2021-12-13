const answer = require("./answer")

describe("answer", function(){

    test("Expect answer 'Life' to equal '42'", function(){
        expect(answer("Life")).toEqual(42);
    });
    test("Expect answer 'boredom' to equal to 'code'", function(){
        expect(answer("boredom")).toEqual("code");
    });
    test("Expect answer to 'stress' to equal 'rest'", function() {
       expect(answer("stress")).toEqual("rest"); 
    });
    
});