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
    // add class active if user hit
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
    // top position relative to the document
    var pos = $id.offset().top - 70;
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


///////////////// Youtube
$(".product").on('click', function (e) {
    var page = $(this).attr("data-id");
    page += ".html";
    $.ajax({
        url: "product/"+page,
        type: 'get',
        dataType: 'html',
        success: function (result) {
            $("footer").append(result);
        }
    });
});

// close modal
$(document).on('click', ".modal-close", function (e) {
    var id = $(this).attr("data-id");
    $("#" + id).remove();
    $(".modal").removeClass("active");
});
$(document).on('click',".modal",function(e){
    if(e.target.classList.contains("modal-container")){
        $(".modal").remove();
    }
});

///////// filter product
$(".btn-filter").on('click', function (e) {
    var item = $(this).attr("data-filter");
    // delete all active filter
    $(".btn-filter").removeClass("active");
    $(this).addClass("active");
    $(".filter-item").each(function (index) {
        if ($(this).hasClass(item) || item == "all") {
            $(this).show(500);
        }
        else {
            $(this).hide(500);
        }
    });
});