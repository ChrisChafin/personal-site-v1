$(document).ready(() => {
    $('.content-body').each(function(){
        if($(this).hasClass('about')){
            $(this).addClass('open');
        } else {
            $(this).addClass('hidden');
        }
    });
    // if you click skill toggle li
    $('.subject-toggle ul.skills-toggle li').on('click', function(){
        let activeId = $(this).attr('id');
        $('.content-body').each(function(){
            if(!$(this).hasClass(activeId)){
                if($(this).hasClass('open')){
                    $(this).removeClass('open').addClass('hidden');
                }
            } else {
                $(this).addClass('open').removeClass('hidden');
            }
        });
    });
    $('.master .container .inner-container header .header-img img').on('click', function(){
        $('body').toggleClass('light dark');
    });
});