(function($) {
  var ColorButton = function($select, options) {
    this.$el = $select;
    this.colorIndex = 0;
    this.settings = $.extend({
      colors: ['#ff0', '#f0f', '#0ff']
    }, options || {});

    var that = this;
    this.$el.click(function(e) {
      e.preventDefault();
      that.changeColor();
    });
  };

  $.extend(ColorButton.prototype, {
    changeColor: function() {
      this.$el.css({ backgroundColor: this.getColor() });
    },
    getColor: function() {
      var currentIndex = this.colorIndex;
      this.colorIndex = (this.colorIndex + 1) % this.settings.colors.length;

      return this.settings.colors[currentIndex];
    }
  });

  $.fn.colorbutton = function(options) {
    return this.each(function() {
      var $select = $(this)
      if (!$select.data('colorbutton')) {
        $select.data('colorbutton', new ColorButton($select, options));
      }
    });
  }

})(jQuery);
