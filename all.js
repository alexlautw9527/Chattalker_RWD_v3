const priceTable = {
    "10000": [600, 1600],
    "15000":[1000, 2000],
    "20000":[2000, 3000],
    "25000":[600, 1600],
    ">25000":["請洽專人", "請洽專人"]
}

$(document).ready(function() {
    $('.faq-card .title').on('click', function(){
        if ($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).children("i").removeClass('fa-minus').addClass('fa-plus');
            $(this).siblings(".content").slideUp();
        } else {

            $('.faq-card .title.active').siblings('.content').slideUp();
            $('.faq-card .title.active').children("i").removeClass('fa-minus').addClass('fa-plus');
            $('.faq-card .title.active').removeClass('active')
            
            $(this).addClass('active');
            $(this).children("i").removeClass('fa-plus').addClass('fa-minus');
            $(this).siblings(".content").slideDown();
        }
    });


    $(".plan-btn-list .plan-btn").on('click', function() {
        let priceQuery = $(this).val();
        let priceResult = priceTable[priceQuery];

        if (priceQuery===">25000"){
            $(".pricing-box .popularity em").text(priceQuery);

            $(".pricing-box .price span:first-child").hide();
            $(".pricing-box .price span:last-child em").text(priceResult[0])
            $(".pricing-box .price span:last-child i").hide();
            $(".pricing-box .price").addClass("flex-m");
        } else {
            $(".pricing-box .price").removeClass("flex-m");
            $(".pricing-box .price span:first-child").show();
            $(".pricing-box .popularity em").text(priceQuery);
            $(".pricing-box .price span:last-child i").show();
            $(".pricing-box .price em").each(function(index, obj){
                $(this).text(priceResult[index]);
                console.log(index, obj);
                console.log(priceResult[index]);
            })

        }
    
    });
    


    
});


