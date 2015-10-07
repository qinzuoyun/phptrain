/**
 * Created by Lijin on 2015/8/7.
 * load user
 * invite user
 */
$(document).ready(function () {
    var parm = window.location.search;
    var projectId = getProjectId(parm);
    console.log(parm);
    console.log(projectId);
    sessionStorage.setItem('projectId',projectId);
    //bind enter key event
    $('.invite').keypress(inviteUser);
    getAllInvitedUser();
});
//从url读取参数
function getProjectId (data){
    var parse = /^\?([A-Za-z]+)=(\d+)/;
    return parse.exec(data)[2];
}

function inviteUser (event) {
    if(event.keyCode == 13){
        console.log(event.target.value);
        //check user email
        $.ajax({
            type:"GET",
            url: "../../php-common/add-user-to-project.php",
            data:{
                email: event.target.value,
                projectId: sessionStorage.getItem('projectId')
            },
            success: function(data){
                console.log(data);
                if(data == "user-not-exist-error"){
                    $('.user-not-exist').slideDown();
                    //
                }else if(data == "add-user-to-project-success"){
                    // add success
                    $('.user-not-exist').text("邀请成功").slideDown();
                    //update list
                    getAllInvitedUser();
                }else{
                    $('.user-not-exist').text("用户已加入").slideDown();
                }
            },
            error: function (data) {
                console.log(data);
            }
        });
    }
}

function getAllInvitedUser(){
    $.ajax({
        type: "GET",
        url: "../../php-common/get-project-user.php",
        data: {
            projectID: sessionStorage.getItem('projectId')
        },
        success: function (data) {
            var json = JSON.parse(data);
            console.log(data);
            fillInvitedUser(json);
        },
        error: function (data) {
            console.log(data);
        }
    });
}

function fillInvitedUser(json){
    var userHolder = "<div class='member-container'>\
        <img src='' class='member-avatar' align='top'>\
        <p class='member-username'></p>\
        </div>";
    var container = $('.project-member-container');
    container.empty();
    for(var i =0; i < json.length; i++){
        var holder = $(userHolder);
        container.append(holder);
        holder.children('img').attr('src',json[i].avatar);
        holder.children('p').text(json[i].username);
    }

}