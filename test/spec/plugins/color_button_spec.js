(function () {
  'use strict';

  describe('ColorButton', function () {

    beforeEach(function() {
      $('body').append('<a id="color-button" href="#">Button</a>');
      $('#color-button').colorbutton({
        colors: ['#ff0', '#f0f']
      });
    });

    afterEach(function() {
      $('#color-button').remove();
    });

    describe('when click button once', function() {
      beforeEach(function() {
        $('#color-button').click();
      });

      it('should change button color', function() {
        expect($('#color-button')).to.have.css('backgroundColor', 'rgb(255, 255, 0)')
      });
    });

    describe('when click button twice', function() {
      beforeEach(function() {
        $('#color-button').click().click();
      });

      it('should change button color', function() {
        expect($('#color-button')).to.have.css('backgroundColor', 'rgb(255, 0, 255)')
      });
    });

    describe('when click button three times', function() {
      beforeEach(function() {
        $('#color-button').click().click().click();
      });

      it('should change button color', function() {
        expect($('#color-button')).to.have.css('backgroundColor', 'rgb(255, 255, 0)')
      });
    });
  });
})();
