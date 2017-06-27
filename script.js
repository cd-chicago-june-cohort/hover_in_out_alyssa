 $(document).ready(function(){
    var oldSrc;
    var oldAlt;
     $('img').hover(function(){
        oldSrc = $(this).attr('src');
        oldAlt = $(this).attr('alt');
        $(this).attr('src', $(this).attr('data-alt-src'));
        $(this).attr('alt', $(this).attr('data-alt-alt'));    
    }, function(){
        $(this).attr('src', oldSrc);
        $(this).attr('alt', oldAlt);
    });
 });