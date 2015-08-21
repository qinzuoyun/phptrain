/**
 * Created by Lijin on 2015/8/7.
 */
$(document).ready(function () {
    var parm = window.location.search;
    var projectId = getProjectId(parm);
    console.log(parm);
    console.log(projectId);
    sessionStorage.setItem('projectId',projectId);
});
//从url读取参数
function getProjectId (data){
    var parse = /^\?([A-Za-z]+)=(\d+)/;
    return parse.exec(data)[2];
}