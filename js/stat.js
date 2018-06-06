'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var MAX_BAR_HEIGHT = 145;
var barWidth = 40;
var FONT_STYLE = '16px PT Mono';
var COLOR_BLACK = '#000';
var COLOR_WHITE = '#fff';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

function randomColor(player) {
  var randomBlue = 'rgba(' + 0 + ',' + 0 + ',' + Math.floor(Math.random() * 255) + ',' + (Math.random() * (1 - 0.2) + 0.2) + ')';
  var myColor = 'rgb(255,0,0)';

  return player === 'Вы' ? myColor : randomBlue;
}

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, COLOR_WHITE);

  ctx.font = FONT_STYLE;
  ctx.fillStyle = COLOR_BLACK;
  ctx.fillText('Ура! Вы победили!', 130, 40);

  ctx.font = FONT_STYLE;
  ctx.fillStyle = COLOR_BLACK;
  ctx.fillText('Список результатов:', 130, 60);

  ctx.fillStyle = COLOR_BLACK;


  var maxTime = getMaxElement(times);

  function drawHistogram() {
    ctx.fillStyle = randomColor(players[i]);
    ctx.fillRect(CLOUD_X + 40 + 100 * i, 80 + barOffsetY + 10, barWidth, currentBarHeight);
  }

  function drawPlayerNames() {
    ctx.fillStyle = COLOR_BLACK;
    ctx.fillText(players[i], (CLOUD_X + 40) + 100 * i, 260);
  }

  function drawPlayerTimes() {
    ctx.fillText(Math.floor(times[i]), (CLOUD_X + 40) + 100 * i, CLOUD_HEIGHT - currentBarHeight - 40);
  }

  for (var i = 0; i < players.length; i++) {
    var currentBarHeight = MAX_BAR_HEIGHT * times[i] / maxTime;
    var barOffsetY = MAX_BAR_HEIGHT - currentBarHeight;
    drawPlayerNames();
    drawPlayerTimes();
    drawHistogram();
    // ctx.fillStyle = COLOR_BLACK;
    // ctx.fillText(players[i], (CLOUD_X + 40) + 100 * i, 260);
    // ctx.fillText(Math.floor(times[i]), (CLOUD_X + 40) + 100 * i, 80);
    // ctx.fillStyle = randomColor(players[i]);
    // ctx.fillRect(CLOUD_X + 40 + 100 * i, 80 + barOffsetY + 10, barWidth, currentBarHeight);
  }
};
