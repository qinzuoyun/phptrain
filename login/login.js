/**
 * Created by Lijin on 2015/8/6.
 */
var login = function () {
    var username = $('.username').val();
    var password = $('.password').val();
    myAjax(username, password);
};
    
    
var myAjax = function (username, password) {
    console.log('username: '+username);
    console.log('password: '+password);

    $.ajax(
        {
            type: "POST",
            url: "../php-common/user-login.php",
            data: {
                username: username,
                password: password
            },
            success: function (data) {
                //jump to project_index
                console.log("return data: "+data);
                if(data){
                    //login success
                    console.log("success: "+data);
                    window.location.href="../project/index.html";
                }else{
                    //replace after fix
                    console.log("用户名或密码错误");
                }
            },
            error: function(data) {
                //alert("服务器错误"+data);
            }
        }
    );
};