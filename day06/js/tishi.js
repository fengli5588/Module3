/*
function fnWrap(){
    function fnTouzi(){
        alert('亲，请关注网站新的产品！');
    }
    fnTouzi();
}

fnWrap();
*/

// 上的的定义方法，函数名称还可能同名，可以改写成下面封闭函数的形式：
;;;;;

/*
;(function(){
    function fnTouzi(){
        alert('亲，请关注网站新的产品！');
    }
    fnTouzi();
})();
*/

// 封闭函数装高手的写法：
/*
;!function(){
    function fnTouzi(){
        alert('亲，请关注网站新的产品！');
    }
    fnTouzi();
}();
*/

;~function(){
    function fnTouzi(){
        alert('亲，请关注网站新的产品！');
    }
    fnTouzi();

}();

