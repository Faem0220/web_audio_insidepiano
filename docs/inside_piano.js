document.getElementById( 'startButton' ).addEventListener( 'click', init );
function init() {
  document.getElementById( 'overlay' ).remove();
  var p1 = $("#audio1")[0];
  $("#p1").mouseenter(function() {
    p1.play();
  });
  var p2 = $("#audio2")[0];
  $("#p2").mouseenter(function() {
    p2.play();
  });
  var p3 = $("#audio3")[0];
  $("#p3").mouseenter(function() {
    p3.play();
  });
  var p4 = $("#audio4")[0];
  $("#p4").mouseenter(function() {
    p4.play();
  });
  var p5 = $("#audio5")[0];
  $("#p5").mouseenter(function() {
    p5.play();
  });
}
