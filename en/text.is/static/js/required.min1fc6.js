$(function() {
    // document.getElementById("changeLang").onchange = function () {
    //     var lang = this.value;
    //     //用jquery 发起一个get请求
    //     $.get('/locate/' + lang, function (data) {
    //         //刷新当前页面
    //         window.location.reload();
    //     })
    // }
})
function handleSubmitIndex() {
    localStorage.removeItem("textarea")
}

function inArray(val, arr) {
    return arr.some(function (v) {
        return val === v;
    })
}
