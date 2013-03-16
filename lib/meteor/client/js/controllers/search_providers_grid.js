/*jshint sub:true */

Template.search_providers_grid.created = function () {
    setTitle('Search Providers');
};

Template.search_providers_grid.rendered = function () {

    $('.search-menu li li').click(function() {
        var typeOfCard = $(this).text();
        var searchTerm = $.trim(typeOfCard);

        Session.set('searchQuery', searchTerm);
    });

    $('.listings li').each(function(i, o) {

        var providerName = $(o).attr('data-title');

        $(o).popover({placement: 'bottom',
                      template: '<div class="popover rc-popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p title="' + providerName + '"></p></div></div></div>',
                               'animation' : true,
                               'html':true});
    });


    $('.providerGridModalTrigger').click(function() {
        $('#providerGridModal').toggleClass('fade hide');
    });

    $('.listings li').draggable();

    $('li.compare').droppable({
        drop: function(e, ui) {

            if (Conf.log.console.v023) {
                console.info('Compare got: %o', $(ui.draggable).attr('id '));
            }

            $('ol', this).first().append('<li>' + $('b', ui.draggable).first().html() + '</li>');
            $(ui.draggable).off().hide(500, function() {
                $(this).remove();
            });
        }
    });

    $('li.save').droppable({
        drop: function(e, ui) {
            $('ol', this).first().append("<li>" + $('b', ui.draggable).first().html() + "</li>");
            $(ui.draggable).off().hide(500, function() {
                $(this).remove();
            });
        }
    });

};

Template.search_providers_grid.listings = function () {
    var searchResult = searchProviders();

    if (Conf.log.console.hedwig) {
        console.debug('Searched for \"%s\"', Session.get('searchQuery'));
        console.debug('Search Result is ', searchResult);
    }

    return searchResult;
};

Template.search_providers_grid.providerType = function () {
    return $.trim(Session.get('searchQuery'));
};

Template.search_providers_grid.icon = function() {
    return searchIcon();
};

