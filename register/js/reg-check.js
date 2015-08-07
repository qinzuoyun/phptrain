$(document).ready(function () {
    //文本框鼠标点击事件
    $(".sub").click(function () {
        $.ajax(
        {
            type: "GET",  //请求方式
            url: "../php-common/check-username.php",  //请求验证页面
            data: {
                username: $("#username").val()  //取得表文本框数据，作为提交数据
            },
            success:function(data) {
                if(data){
                    window.location.href="../login/login.html";
                }else{
                    $(".username").text("用户名重复");
                }
            },
            error: function () {
                alert("something wrong")
            }
        }
        );
    });
});