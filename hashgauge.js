var colors = {
  green: '#66cc66',
  yellow: '#eec900',
  red: '#ff6347'
};

$(document).ready(init);

function init () {
  // query summary; then
  drawDonut();
  drawTimeline();
}
    
function drawDonut () {
  $('#capacity_header').text('\uf1c0 Capacity: 5 TH/s');
  $('#performance_header').text('\uf080 Performance: 84%');

  $('#gauge').data('fgcolor', colors[getColor(0.84)]);
  $('#gauge').data('text', getText(4200));
  $('#gauge').data('info', getUnits(4200));
  $('#gauge').data('part', '4.2');
  $('#gauge').data('total', '5');

  $('#gauge').circliful();
}

function drawTimeline () {
  for (var i = 0; i < 24; i++) {
    //$('#timeline').append('<i class="fa fa-square"></i>');
    $('#timeline').append('<div class="timeline_juncture" id="juncture'+ i + '"> \uf0c8</div>');
  }
  $('#juncture7').css('color', colors.red);
  $('#juncture11').css('color', colors.yellow);
  $('#juncture12').css('color', colors.yellow);
}

function getText (ghs) {
  if (ghs < 1000) return Math.ceil(hashrate);
  if (ghs < 1000000) return (ghs / 1000).toFixed(1);
  else return (ghs / 1000000).toFixed(2);
}

function getColor (ratio) {
  if (ratio < 0.50) return 'red';
  if (ratio < 0.75) return 'yellow';
  else return 'green';
}

function getUnits (ghs) {
  if (ghs < 1000) return 'GH/s';
  if (ghs < 1000000) return 'TH/s';
  else return 'PH/s';
}
