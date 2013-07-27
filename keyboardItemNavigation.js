;(function ($) {
    "use strict";
    $.fn.keyboardItemNavigation = function (options) {
        var settings = $.extend({
            "item": "li",
            "item_class": "selected",
            "element_class": ""
        }, options);
        var element = this.selector + settings.element_class;

        $(document).bind("keydown", function (e) {
            var item = element + " > " + settings.item;
            var selected_item = $(item + "." + settings.item_class);
            if (e.keyCode === 38) {
                $(item).removeClass(settings.item_class);
                if ($(selected_item).prev().first().length === 0) {
                    $(item).last().addClass(settings.item_class);
                } else {
                    $(selected_item).prev().first().addClass(settings.item_class);
                }
            } else {
                if (e.keyCode === 40) {
                    $(item).removeClass(settings.item_class);
                    if ($(selected_item).next().first().length === 0) {
                        $(item).first().addClass(settings.item_class);
                    } else {
                        $(selected_item).next().first().addClass(settings.item_class);
                    }
                }
            }
        });
    };
})(jQuery);
