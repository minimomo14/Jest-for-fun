const convedrtTemp = require("./convertTemp.js");

describe("convertTemp", function(){
    test("convert from 32F", function(){
        expect(convedrtTemp(32,"F")).toEqual(0);

    });

    test("convert from 68F", function(){
        expect(convedrtTemp(68,"F")).toEqual(20);

    });
    test("convert from 100C", function(){
        expect(convedrtTemp(100,"C")).toEqual(212);

    });

    test("convert from -40C", function(){
        expect(convedrtTemp(-40,"C")).toEqual(-40,"F");

    });


});