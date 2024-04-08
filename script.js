


$(document).ready(function() {
    $('.amount__button--decrease').click(function () {
    var $input = $(this).parent().find('.amount__value');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
        });
    $('.amount__button--increase').click(function () {
    var $input = $(this).parent().find('.amount__value');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
        });
    });

    $(document).ready(function(){
        $("#product-about").click(function(){
            $("#product-about").toggleClass("product-card-general-main-additional-info-about__heading--hide");
            $("#product-about-text").slideToggle("slow");
        });
    });

    $(document).ready(function(){
        $("#product-contain").click(function(){
            $("#product-contain").toggleClass("product-card-general-main-additional-info-about__heading");
            $("#product-contain-text").slideToggle("slow");
        });
    });

    $(document).ready(function(){
        $("#product-delivery").click(function(){
            $("#product-delivery").toggleClass("product-card-general-main-additional-info-about__heading");
            $("#product-delivery-text").slideToggle("slow");
        });
    });

    $(document).ready(function(){
        $("#product-reviews").click(function(){
            $("#product-reviews").toggleClass("product-card-general-main-additional-info-about__heading");
            $("#product-reviews-text").slideToggle("slow");
        });
    });


    // drop-down function
    $(document).ready(function(){
        $("#dropDownIdSize").click(function(){
          $("#dropDownIdSize").toggleClass("filter-block__button--hide");
          $("#DropDownListIdSize").slideToggle("slow");
        });
      });

      $(document).ready(function(){
        $("#dropDownIdColor").click(function(){
          $("#dropDownIdColor").toggleClass("filter-block__button--hide");
          $("#DropDownListIdColor").slideToggle("slow");
        });
      });

      $(document).ready(function(){
        $("#dropDownIdSeason").click(function(){
          $("#dropDownIdSeason").toggleClass("filter-block__button");
          $("#DropDownListIdSeason").slideToggle("slow");
        });
      });

      $(document).ready(function(){
        $("#dropDownIdMaterial").click(function(){
          $("#dropDownIdMaterial").toggleClass("filter-block__button");
          $("#DropDownListIdMaterial").slideToggle("slow");
        });
      });

      $(document).ready(function(){
        $("#dropDownIdSleeve").click(function(){
          $("#dropDownIdSleeve").toggleClass("filter-block__button");
          $("#DropDownListIdSleeve").slideToggle("slow");
        });
      });
    