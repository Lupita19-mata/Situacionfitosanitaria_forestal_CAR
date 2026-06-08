var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Situacionfitosanitaria_1 = new ol.format.GeoJSON();
var features_Situacionfitosanitaria_1 = format_Situacionfitosanitaria_1.readFeatures(json_Situacionfitosanitaria_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Situacionfitosanitaria_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Situacionfitosanitaria_1.addFeatures(features_Situacionfitosanitaria_1);
var lyr_Situacionfitosanitaria_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Situacionfitosanitaria_1, 
                style: style_Situacionfitosanitaria_1,
                popuplayertitle: 'Situacion fitosanitaria',
                interactive: true,
    title: 'Situacion fitosanitaria<br />\
    <img src="styles/legend/Situacionfitosanitaria_1_0.png" /> 1<br />\
    <img src="styles/legend/Situacionfitosanitaria_1_1.png" /> 2<br />\
    <img src="styles/legend/Situacionfitosanitaria_1_2.png" /> 3<br />\
    <img src="styles/legend/Situacionfitosanitaria_1_3.png" /> 4<br />\
    <img src="styles/legend/Situacionfitosanitaria_1_4.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_Situacionfitosanitaria_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Situacionfitosanitaria_1];
lyr_Situacionfitosanitaria_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ESPECIE': 'ESPECIE', 'DN_cm': 'DN_cm', 'DB_cm': 'DB_cm', 'H': 'H', 'SF': 'SF', 'DN_m': 'DN_m', 'AB': 'AB', 'V': 'V', 'layer': 'layer', 'path': 'path', });
lyr_Situacionfitosanitaria_1.set('fieldImages', {'fid': '', 'ID': '', 'ESPECIE': '', 'DN_cm': '', 'DB_cm': '', 'H': '', 'SF': '', 'DN_m': '', 'AB': '', 'V': '', 'layer': '', 'path': '', });
lyr_Situacionfitosanitaria_1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ESPECIE': 'no label', 'DN_cm': 'no label', 'DB_cm': 'no label', 'H': 'no label', 'SF': 'no label', 'DN_m': 'no label', 'AB': 'no label', 'V': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Situacionfitosanitaria_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});