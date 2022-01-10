(function ($, iuliia) {
    "use strict";

    var filter = {
        purpose: {
            name: true,
            address: true,
            general: true,
        },
        dia: {
            yes: true,
            no: true,
        },
        country: {
            ru: true,
            en: true,
            un: true,
        },
        state: {
            actual: true,
            deprecated: true,
        },
    };

    function translate(e) {
        var $source = $(e.target);
        var $targets = $source.parent().children("[data-ref='target']");
        var source = $source.text();
        $targets.each(function () {
            var $target = $(this);
            var schemaName = $target.data("schema");
            var schema = iuliia.Schemas.get(schemaName);
            var translated = iuliia.translate(source, schema);
            $target.find("code").text(translated);
        });
    }

    function applyFilter($option, $tiles) {
        var isActive = toggleOption($option);
        var name = $option.data("filter");
        var value = $option.data("value");
        filter[name][value] = isActive;
        showTiles($tiles);
    }

    function toggleOption($option) {
        var activeClass = "filter--active";
        var isActive = $option.hasClass(activeClass);
        if (isActive) {
            $option.removeClass(activeClass);
        } else {
            $option.addClass(activeClass);
        }
        return !isActive;
    }

    function showTiles($tiles) {
        $tiles.each(function () {
            var $tile = $(this);
            var isActive = checkTile($tile);
            if (isActive) {
                $tile.removeClass("disabled");
            } else {
                $tile.addClass("disabled");
            }
        });
    }

    function checkTile($tile) {
        var purpose = $tile.data("purpose");
        var dias = $tile.data("dia").split(",");
        var countries = $tile.data("country").split(",");
        var matchesCountry = countries.filter(function (country) {
            return filter.country[country];
        }).length;
        var matchesDia = dias.filter(function (dia) {
            return filter.dia[dia];
        }).length;
        var state = $tile.data("state");
        var isActive =
            filter.purpose[purpose] &&
            matchesDia &&
            matchesCountry &&
            filter.state[state];
        return isActive;
    }

    $(function () {
        $("[data-ref='source']").on("input", translate);
        var $tiles = $("#all-list").children(".flex");
        $("#filter").on("click", "a", function (e) {
            var $option = $(this);
            applyFilter($option, $tiles);
            e.preventDefault();
        });
    });
})(jQuery, window.iuliia);
