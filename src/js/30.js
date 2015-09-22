/**
* 30.js
* Auther: Hao-Wei Jeng
**/
;(function($, window, document, undefined) {
  $.fn.breakThisLink = function(options) {
    options = options || {};

    var mainPage = $('<div>', {
          class: 'error-page content-hidden',
        }),
      deadImg = $('<img>', {
        src: 'http://i.imgur.com/l4N7287.png',
      }),
      errorDiv = $('<div>', {
        class: 'error-msg',
      }),
      titleStr = '<h2 class="title">Aw, Snap!</h2>',
      contentEle = $('<div>', {
        class: 'content',
        html: 'Something went wrong while displaying this webpage. Closing the Apps and Tabs that you don\'t need may help by making more memory available.<br/><br/>' +
              'if you\'re seeing this frequently, try this <a class="reload-link" href="">suggestion</a>.' +
              '<button class="button blue r-btn"> Reload</button>',
      }),
      innerErrorDiv = errorDiv.append([deadImg, titleStr, contentEle]),
      fullPage = mainPage.append(innerErrorDiv);
    console.log(mainPage);

    $(this).hover(function() {
      var mainPage = $('.error-page');

      $('body').append(fullPage);
      mainPage.removeClass('content-hidden');

      $('.r-btn').click(function() {
        mainPage.addClass('content-hidden');
      });
    });

  };
})(jQuery, window, document);
