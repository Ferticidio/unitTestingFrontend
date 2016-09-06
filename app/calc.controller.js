CalcController = {
    init: function () {
        console.log('Init!');
    },
    calcWithUserInput: function (operationName) {
        var $el = $('#' + operationName),
            $inputs = $el.find('input'),
            $result = $el.find('.result');

        var a = parseInt($inputs.eq(0).val()),
            b = parseInt($inputs.eq(1).val()),
            result = calc[operationName](a, b);

        $result.text(result);
    },
    add: function () {
        CalcController.calcWithUserInput('add');
    },
    substract: function () {
        CalcController.calcWithUserInput('substract');
    },
    multiply: function () {
        CalcController.calcWithUserInput('multiply');
    },
    divide: function () {
        CalcController.calcWithUserInput('divide');
    }
};