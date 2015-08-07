/**
 * Created by Lijin on 2015/8/6.
 */
var project = function (spec) {
    var poj;
    var projectName   = spec.projectName    || '';
    var projectID     = spec.projectID      || '';
    var founderID     = spec.founderID      || '';
    var foundTime     = spec.foundTime      || '';
    var deadline      = spec.deadline       || '';
    var projectBanner = spec.projectBanner  || '';

    poj.getProjectName = function () {
        return projectName;
    };
    
    poj.getProjectID = function () {
        return projectID;
    };

    poj.getFounderID = function () {
        return founderID;
    };

    poj.getfoundTime = function () {
        return foundTime;
    };

    poj.getDeadline = function () {
        return deadline;
    };

    poj.getProjectBanner = function () {
        return projectBanner;
    };

    return poj;

};