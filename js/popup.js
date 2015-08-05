/**
 * Created by Lijin on 2015/8/5.
 */
$(document).ready(function () {
    popDiv({
        triggers: '.header-tool div',
        contents: '.tool-pop'
    });
});


var popDiv = function (options) {
    var triggers;
    var contents;
    triggers = $(options.triggers);
    contents = $(options.contents);

    triggers.click(function () {
        var trigger = $(this);
        contents.children().fadeOut(10).eq(trigger.index()).toggle();
        //content.get(0).focus();
    });
    //点击网页空白处也可以关闭弹出
    $('html').mouseup(function (event) {
        var x               = event.pageX;
        var y               = event.pageY;
        var triggerX        = triggers.offset().left;
        var triggerY        = triggers.offset().top;
        var triggersWidth   = triggers.parent().width();
        var triggersHeight  = triggers.parent().height();
        //如果点击范围是trigger在的范围就不执行操作
        if((x>triggerX && x<(triggerX+triggersWidth))&&
            (y>triggerY && y< (triggerY+triggersHeight))){
            //DO NOTHING
        }else{
            contents.children().hide();
        }
        //console.log("offsetX"+offsetX);
        //console.log("offsetY"+offsetY);
        //console.log("triggerX"+triggerX);
        //console.log("triggerY"+triggerY);
        //console.log("triggerWidth"+triggersWidth);
        //console.log("triggersHeight"+triggersHeight);
        //console.log("mouseX"+x);
        //console.log("mouseY"+y);

    });

};