// scrool with href with #
$(document).on('click', 'a[href^="#"]', function (e) {
    // target element id
    var id = $(this).attr('href');
    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();
    // top position relative to the document
    var pos = $id.offset().top;
    // animated top scrolling
    $('body, html').animate({ scrollTop: pos });
});
var flag = true;
$(document).on('click', '.menu', function (e) {
    flag = !flag;
    if (flag) {
        $(this).find("i").removeClass("fa-bars").addClass("fa-times");
        $(".nav-container").addClass("active");
    }
    else {
        $(this).find("i").addClass("fa-bars").removeClass("fa-times");
        $(".nav-container").removeClass("active");
    }

});