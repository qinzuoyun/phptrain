/**
 * Created by Lijin on 2015/8/7.
 */

$.ajax({
    type: 'GET',
    url: '../../php-common/check-online.php',
    success: function (data){
        if(!data){
            location.href='/phptrain/login/login.html';
        }
    },
    error: function (e) {
        console.log(e);
    }
});