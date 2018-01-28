    var result = '';

    function clear() {
        $('.result').html(result = '');
    }

    $('.on').click(function () {
        $('.buttons').show(500);
        $('.on').width('auto');
        $('.off').width('auto');
        clear();
        $('.on').val('Clear');

    });

    $('.off').click(function () {
        $('.buttons').hide(500);
        $('.on').width('50%');
        $('.off').width('50%');
        clear();
        $('.on').val('On');
    });
    $('.buttons input').click(function () {
        result = result + this.value;
        $('.result').html(result);
    });

    $('.score').click(function () {

        $('.result').html(eval(result));
        result = '';
    });
