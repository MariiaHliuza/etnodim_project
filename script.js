<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
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

