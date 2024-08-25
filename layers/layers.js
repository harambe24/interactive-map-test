var wms_layers = [];

var format_river_0 = new ol.format.GeoJSON();
var features_river_0 = format_river_0.readFeatures(json_river_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_river_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_river_0.addFeatures(features_river_0);
var lyr_river_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_river_0, 
                style: style_river_0,
                popuplayertitle: "river",
                interactive: true,
                title: '<img src="styles/legend/river_0.png" /> river'
            });
var format_farms_1 = new ol.format.GeoJSON();
var features_farms_1 = format_farms_1.readFeatures(json_farms_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_farms_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_farms_1.addFeatures(features_farms_1);
var lyr_farms_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_farms_1, 
                style: style_farms_1,
                popuplayertitle: "farms",
                interactive: true,
                title: '<img src="styles/legend/farms_1.png" /> farms'
            });

lyr_river_0.setVisible(true);lyr_farms_1.setVisible(true);
var layersList = [lyr_river_0,lyr_farms_1];
lyr_river_0.set('fieldAliases', {'Id': 'Id', });
lyr_farms_1.set('fieldAliases', {'Id': 'Id', 'name': 'name', 'Area': 'Area', 'Crop_type': 'Crop_type', });
lyr_river_0.set('fieldImages', {'Id': '', });
lyr_farms_1.set('fieldImages', {'Id': '', 'name': '', 'Area': '', 'Crop_type': '', });
lyr_river_0.set('fieldLabels', {'Id': 'inline label - visible with data', });
lyr_farms_1.set('fieldLabels', {'Id': 'no label', 'name': 'no label', 'Area': 'no label', 'Crop_type': 'no label', });
lyr_farms_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});