$(document).ready(function () {
    //�ı���������¼�
    $(".sub").click(function () {
        $.ajax(
        {
            type: "GET",  //����ʽ
            url: "../php-common/check-username.php",  //������֤ҳ��
            data: {
                username: $("#username").val()  //ȡ�ñ��ı������ݣ���Ϊ�ύ����
            },
            success:function(data) {
                if(data){
                    window.location.href="../login/login.html";
                }else{
                    $(".username").text("�û����ظ�");
                }
            },
            error: function () {
                alert("something wrong")
            }
        }
        );
    });
});