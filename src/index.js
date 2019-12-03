import "./less/app.less";
import "./css/main.css";
import $ from "jquery";

$(function() {
  $(".span").on("click", function() {
    $(".nav").toggleClass("nav-open");
    $(".span").toggleClass("span-open");
    $(".nav-wrapper").toggleClass("nav-wrapper-menu");
  });
  $(".nav_item").on("click", function() {
    $(".nav").toggleClass("nav-open");
    $(".span").toggleClass("span-open");
    $(".nav-wrapper").toggleClass("nav-wrapper-menu");
  });
});
