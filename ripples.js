var Ripples = new function() {

  /*
  Code by Leo Ørsnes, Zeekoo.dk
  */

  this.setup = function() {

    var append = ".ripple{display:block;position:absolute;background-color:rgba(0,0,0,.033);border-radius:50%;-webkit-transform:scale(0);-moz-transform:scale(0);-ms-transform:scale(0);-o-transform:scale(0);transform:scale(0);-webkit-transition:opacity .3s ease-in;-moz-transition:opacity .3s ease-in;transition:opacity .3s ease-in;opacity:0;pointer-events:none}.ripple.animate{opacity:1;-webkit-animation:ripple .65s ease-in;-webkit-animation-fill-mode:forwards;-moz-animation:ripple .65s ease-in;-moz-animation-fill-mode:forwards;-o-animation:ripple .65s ease-in;-o-animation-fill-mode:forwards;animation:ripple .65s ease-in;animation-fill-mode:forwards}@-webkit-keyframes ripple{75%{opacity:1}100%{opacity:0;-webkit-transform:scale(2)}}@-moz-keyframes ripple{75%{opacity:1}100%{opacity:0;-moz-transform:scale(2)}}@-o-keyframes ripple{75%{opacity:1}100%{opacity:0;-o-transform:scale(2)}}@-ms-keyframes ripple{75%{opacity:1}100%{opacity:0;-ms-transform:scale(2)}}@keyframes ripple{75%{opacity:1}100%{opacity:0;transform:scale(2)}}";
    $("head").append("<style>"+append+"</style");

  };

  this.init = function()  {
      $("[data-ripple]").each(function() {
          if ($(this).css("overflow") != "hidden") {
            $(this).css("overflow", "hidden");
          }
          if ($(this).css("position") != "relative") {
            $(this).css("position", "relative");
          }
      });


      $("body").on("click", "[data-ripple]", function(e) {
          if ($(this).find(".ripple").length != 0) {
              $(this).find(".ripple").remove();
          }

          $(this).prepend("<span class='ripple' />");

          var ripple = $(this).find(".ripple");

          var parent = ripple.parent();

          console.log(ripple.height()+", "+ripple.width());

          if (!ripple.height() || !ripple.width()) {
              var d = Math.max(parent.outerWidth(), parent.outerHeight());
              ripple.css({
                  height: d,
                  width: d
              });
          }

          console.log(ripple.height()+", "+ripple.width());

          var x = e.pageX - $(this).offset().left - ripple.width() / 2;
          var y = e.pageY - $(this).offset().top - ripple.height() / 2;


          ripple.css({
              top: y + 'px',
              left: x + 'px'
          }).addClass("animate");
          setTimeout(function() {
              ripple.remove();
          }, 650);
      });
  };

};
