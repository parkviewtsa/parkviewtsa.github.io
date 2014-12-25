// Generated by CoffeeScript 1.8.0
(function() {
  $(document).ready(function() {
    var P_START, horizGoto;
    P_START = 100;
    $(window).scroll(function() {
      $(".awards-vertical-parallax").each(function() {
        var s, s_bottom;
        s = $(this).offset().top - $(window).scrollTop();
        s_bottom = $(this).offset().top - $(window).scrollTop() + $(this).height();
        if (s < P_START && s_bottom > 0) {
          $(this).addClass("_visible");
        } else if (s > P_START || s_bottom < 0) {
          $(this).removeClass("_visible");
        }
      });
      $("#parallax-header-container").each(function() {
        if ($(this).offset().top < $(window).scrollTop()) {
          $("#parallax-header").addClass("_locked");
          $("#header-icons").addClass("_visible");
        }
        if ($(this).offset().top > $(window).scrollTop()) {
          $("#parallax-header").removeClass("_locked");
          return $("#header-icons").removeClass("_visible");
        }
      });
    });
    horizGoto = function(what, clicked) {
      var headerText;
      $(".awards-horizontal-parallax").removeClass("_visible");
      $(".header-icon-svg").removeClass("_active");
      $("#parallax-header h2").addClass("_transition");
      headerText = (function() {
        switch (what) {
          case ".tech-day":
            return "Tech Day";
          case ".flc":
            return "Fall Leadership Conference";
          case ".state":
            return "State Conference";
          case ".nationals":
            return "National Conference";
          case ".banquet":
            return "Local Awards";
        }
      })();
      setTimeout(function() {
        $("#parallax-header h2").text(headerText);
        $(what).addClass("_visible");
        $(clicked).addClass("_active");
        return $("#parallax-header h2").removeClass("_transition");
      }, 400);
      return false;
    };
  });

}).call(this);
