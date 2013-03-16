/*
 * Google Maps integration, see
 * http://stackoverflow.com/a/11473041/55478
 */

var googleMaps = {};

var map;

googleMaps.initializeTheMap = function (conf) {

    console.debug('Google Maps conf parameter: ', conf);

    var centerCoords = conf[0].slice(0, 2);

    var centerForMap = new google.maps.LatLng(centerCoords[0], centerCoords[1]);

    var mapOptions = { center: centerForMap,
                       zoom: 12,
                       mapTypeId: google.maps.MapTypeId.ROADMAP };

    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

    var markers = [];

    var infowindow = new google.maps.InfoWindow();

    var i;

    for (i = 0; i < conf.length; i++) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(conf[i][0], conf[i][1]),
            title: conf[i][2],
            map: map
        });

        makeInfoWindowEvent(map, infowindow, conf[i][3], marker);

        markers.push(marker);
    }
};

function makeInfoWindowEvent(map, infowindow, contentString, marker) {
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(contentString);
        infowindow.open(map, marker);
    });
}

Template.map_view.created = function () {
    setTitle('Map View: Search Providers');
};

Template.map_view.rendered = function () {

    var count = 0;

    /* TODO this isn't the right reactive way, sometimes we get an
       empty collection */
    var serviceProvidersForMap = Template.map_view.listings().map(function(o){
        try{
            return [
                o.location.lat,
                o.location.lng,
                o['Service Provider Name'],
                [
                    o['Service Provider Name'],
                    o['Address Line 1']
                ].join('<br>')
            ];
        } catch(e) {
            console.debug('Err: Service providers for map: %o\n\tWhen trying to load %o', e, o);
            return false;
        }
    });

    /* TODO prevent google map being rendered twice, see
     * http://stackoverflow.com/questions/13320428 */
    try{
        googleMaps.initializeTheMap(serviceProvidersForMap);
    } catch(e) {
        console.debug('Google Maps initialization error: ', e);
        // TODO this gets run twice, fails first time
    }

    $('.detailed-listings li').draggable();

    $('li.compare').droppable({
        drop: function(e, ui) {

            console.info('Compare got: %o', $(ui.draggable).attr('id '));

            $('ol', this).first().append("<li>" + $('b', ui.draggable).first().html() + "</li>");
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

Template.map_view.listings = function () {
    return searchProviders();
};

Template.map_view.providerType = function () {
    return Session.get('searchQuery');
};
