var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_gradeonebuildings_1 = new ol.format.GeoJSON();
var features_gradeonebuildings_1 = format_gradeonebuildings_1.readFeatures(json_gradeonebuildings_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gradeonebuildings_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gradeonebuildings_1.addFeatures(features_gradeonebuildings_1);
var lyr_gradeonebuildings_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gradeonebuildings_1, 
                style: style_gradeonebuildings_1,
                interactive: true,
                title: '<img src="styles/legend/gradeonebuildings_1.png" /> grade one buildings'
            });

lyr_ESRIGraylight_0.setVisible(true);lyr_gradeonebuildings_1.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_gradeonebuildings_1];
lyr_gradeonebuildings_1.set('fieldAliases', {'Name': 'Name', 'Grade': 'Grade', 'Location': 'Location', 'BroadClass': 'BroadClass', 'Report': 'Report', });
lyr_gradeonebuildings_1.set('fieldImages', {'Name': 'TextEdit', 'Grade': 'TextEdit', 'Location': 'TextEdit', 'BroadClass': 'TextEdit', 'Report': 'TextEdit', });
lyr_gradeonebuildings_1.set('fieldLabels', {'Name': 'no label', 'Grade': 'no label', 'Location': 'no label', 'BroadClass': 'no label', 'Report': 'no label', });
lyr_gradeonebuildings_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});