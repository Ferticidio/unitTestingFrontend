var calc = {
    add: function (a, b) {
        return a + b;
    },
    substract: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    }
};

describe("Calc test suite:", function() {

    it("should add two numbers", function () {
        var a = 12,
            b = 5;

        var res = calc.add(a, b);

        expect(res).toBe(17);
    });

    it("should sustract second number from the first", function () {
        var a = 12,
            b = 5;

        var res = calc.substract(a, b);

        expect(res).toBe(7);
        expect(res).not.toBe(17);
    });

    describe("Mulitply: ", function () {

        it("should multiply two numbers", function () {
            var a = 12,
                b = 5;

            var res = calc.multiply(a, b);

            expect(res).toBe(60);
        });

        it("should have commutative property", function () {
            var a = 12,
                b = 5;

            expect(calc.multiply(a, b)).toBe(calc.multiply(b, a));
        });

    });

    it("should divide first number by the second", function () {
        var a = 10,
            b = 5;

        var res = calc.divide(a, b);

        expect(res).toBe(2);
    });
});
