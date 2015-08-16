$(document).ready(function() {
    //声明变量
    var email;
    var username;
    var password;
    var passwordConfirm;
    //验证
    var emailOk = false;
    var usernameOk = false;
    var passwordOk = false;
    var passwordConfirmOk = false;

    $(".email").bind("input propertychange",function() {
        email = $(".email").val();
        var prase = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
        if (prase.test(email)) {
            emailCheck(email);
        }else {
            $(".email-error").text("邮箱格式不正确");
            emailOk = false;
        }

    });
    function emailCheck(data) {
        var flag = false;
        $.ajax({
           type:"GET",
           url:"../php-common/check-email.php",
           data:{
             email: data
           },
           success:function(data) {
               console.log("data is: "+data);
               if(data) {
                   console.log('not found');
                   emailOk = true;
                   $(".email-error").text("邮箱可以使用");
               }else {
                   console.log("find");
                   emailOk = false;
                   $(".email-error").text("邮箱已被注册");
               }
           },
           error: function(data) {
               alert("something wrong");
           }
        });
        console.log("flag: "+flag);
        return flag;
    }

});