$(document).ready ->

  P_START = 100
  $(window).scroll ->

    $(".awards-vertical-parallax").each ->
      s = $(this).offset().top - $(window).scrollTop()
      s_bottom = $(this).offset().top - $(window).scrollTop() + $(this).height()
      if s < P_START and s_bottom > 0 then $(this).addClass "_visible"
      else if s > P_START or s_bottom < 0
        $(this).removeClass "_visible"
      return

    $("#parallax-header-container").each ->
      if $(this).offset().top < $(window).scrollTop()
        $("#parallax-header").addClass "_locked"
        $("#header-icons").addClass "_visible"
      if $(this).offset().top > $(window).scrollTop()
        $("#parallax-header").removeClass "_locked"
        $("#header-icons").removeClass "_visible"

    return

  horizGoto = (what, clicked) ->
    $(".awards-horizontal-parallax").removeClass "_visible"
    $(".header-icon-svg").removeClass "_active"
    $("#parallax-header h2").addClass "_transition"
    headerText = switch what
      when ".tech-day" then "Tech Day"
      when ".flc" then "Fall Leadership Conference"
      when ".state" then "State Conference"
      when ".nationals" then "National Conference"
      when ".banquet" then "Local Awards"
    setTimeout( ->
      $("#parallax-header h2").text headerText;
      $(what).addClass "_visible"
      $(clicked).addClass "_active"
      $("#parallax-header h2").removeClass "_transition"
    , 400)
    false

  return
