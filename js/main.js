$(document).ready(() => {
    // if you click skill toggle li
    $('.subject-toggle ul.skills-toggle li').on('click', function(){
        let activeId = $(this).attr('id');
        // for each content element
        $('.content').each(function(){
            //if it has the same class as the active id
            if($(this).hasClass(activeId)){
                //show it
                if ($(this).hasClass('show') && !$(this).hasClass("about")){
                    $(this).parent().find('.about').toggleClass('show hide');
                    $(this).toggleClass('show hide');
                }
                else if ($(this).hasClass('show') && $(this).hasClass("about")){
                    return;
                }
                else {
                    $(this).toggleClass('show hide');
                }
            } else {
                if($(this).hasClass('show')){
                    $(this).toggleClass('show hide');
                }
            }
        });
    });
});