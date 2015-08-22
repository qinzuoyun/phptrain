/**
 * Created by Lijin on 2015/8/6.
 * fetch user's project
 */
$(document).ready(fetchProject());

function fetchProject(){
    $.ajax(
        {
            type: "GET",
            url: "../php-common/get-all-project.php",
            success: function (data) {
                //convert data to a json object.
                console.log(data);
                var json = JSON.parse(data);
                fillProject(json);

            },
            error: function (data) {
                console.log(data);
            }
        }
    );
}

function fillProject (data) {
    var projectHolder = "<li >\
                            <a href='' >\
                                <div>\
                                    <h1 class='title'></h1>\
                                </div>\
                            </a>\
                        </li>";
    var container = $('.project-collection');

    for(var i = 0; i< data.length; i++){
        var holder = $(projectHolder);
        holder.css('display','none');
        container.append(holder);
        holder.addClass('project'+i);
        holder.children('a').attr('href','home/index.html?projectID='+data[i].projectID);
        holder.children().children().children().html(data[i].projectName);
        console.log("url(\"../img/projectbanner/"+data[i].projectBanner+"\")");
        holder.children().children().css('background','url(\'../img/projectbanner/'+data[i].projectBanner+'\')');
        holder.fadeIn(600);

    }

}