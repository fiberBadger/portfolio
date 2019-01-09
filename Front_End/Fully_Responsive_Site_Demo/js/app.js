$(()=>{
    menu = $('nav ul');

    $('#toggle-btn').on('click', (e)=>{
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(()=>{
        const w = $(this).width();
        if(w > 580 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

    $('nav li').on('click', () =>{
        const w = $(window).width();

        if(w < 580){
            menu.slideToggle();
        }

    });
    $('.open-menu').height($(window).height());
});