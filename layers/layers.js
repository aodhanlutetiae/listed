var wms_layers = [];


        var lyr_OpenStreetMapbasemap_0 = new ol.layer.Tile({
            'title': 'Open Street Map base map',
            'type': 'base',
            'opacity': 0.339000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
            })
        });
var format_GradeIlistedbuildings_1 = new ol.format.GeoJSON();
var features_GradeIlistedbuildings_1 = format_GradeIlistedbuildings_1.readFeatures(json_GradeIlistedbuildings_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GradeIlistedbuildings_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GradeIlistedbuildings_1.addFeatures(features_GradeIlistedbuildings_1);
var lyr_GradeIlistedbuildings_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GradeIlistedbuildings_1, 
                style: style_GradeIlistedbuildings_1,
                interactive: true,
                title: '<img src="styles/legend/GradeIlistedbuildings_1.png" /> Grade I listed buildings'
            });

lyr_OpenStreetMapbasemap_0.setVisible(true);lyr_GradeIlistedbuildings_1.setVisible(true);
var layersList = [lyr_OpenStreetMapbasemap_0,lyr_GradeIlistedbuildings_1];
lyr_GradeIlistedbuildings_1.set('fieldAliases', {'Name': 'Name', 'Grade': 'Grade', 'Location': 'Location', 'BroadClass': 'BroadClass', 'Report': 'Report', });
lyr_GradeIlistedbuildings_1.set('fieldImages', {'Name': 'TextEdit', 'Grade': 'TextEdit', 'Location': 'TextEdit', 'BroadClass': 'TextEdit', 'Report': 'TextEdit', });
lyr_GradeIlistedbuildings_1.set('fieldLabels', {'Name': 'no label', 'Grade': 'no label', 'Location': 'no label', 'BroadClass': 'no label', 'Report': 'no label', });
lyr_GradeIlistedbuildings_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});