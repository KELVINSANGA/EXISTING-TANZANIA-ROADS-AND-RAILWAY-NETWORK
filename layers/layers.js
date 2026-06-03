var wms_layers = [];


        var lyr_Terrain_0 = new ol.layer.Tile({
            'title': 'Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_TANZANIATRUNKROADS_1 = new ol.format.GeoJSON();
var features_TANZANIATRUNKROADS_1 = format_TANZANIATRUNKROADS_1.readFeatures(json_TANZANIATRUNKROADS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TANZANIATRUNKROADS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TANZANIATRUNKROADS_1.addFeatures(features_TANZANIATRUNKROADS_1);
var lyr_TANZANIATRUNKROADS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TANZANIATRUNKROADS_1, 
                style: style_TANZANIATRUNKROADS_1,
                popuplayertitle: 'TANZANIA TRUNK ROADS',
                interactive: true,
                title: '<img src="styles/legend/TANZANIATRUNKROADS_1.png" /> TANZANIA TRUNK ROADS'
            });
var format_TANZANIAREGIONALROADS_2 = new ol.format.GeoJSON();
var features_TANZANIAREGIONALROADS_2 = format_TANZANIAREGIONALROADS_2.readFeatures(json_TANZANIAREGIONALROADS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TANZANIAREGIONALROADS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TANZANIAREGIONALROADS_2.addFeatures(features_TANZANIAREGIONALROADS_2);
var lyr_TANZANIAREGIONALROADS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TANZANIAREGIONALROADS_2, 
                style: style_TANZANIAREGIONALROADS_2,
                popuplayertitle: 'TANZANIA REGIONAL ROADS',
                interactive: true,
                title: '<img src="styles/legend/TANZANIAREGIONALROADS_2.png" /> TANZANIA REGIONAL ROADS'
            });
var format_TANZANIARAILWAYNETWORK_3 = new ol.format.GeoJSON();
var features_TANZANIARAILWAYNETWORK_3 = format_TANZANIARAILWAYNETWORK_3.readFeatures(json_TANZANIARAILWAYNETWORK_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TANZANIARAILWAYNETWORK_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TANZANIARAILWAYNETWORK_3.addFeatures(features_TANZANIARAILWAYNETWORK_3);
var lyr_TANZANIARAILWAYNETWORK_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TANZANIARAILWAYNETWORK_3, 
                style: style_TANZANIARAILWAYNETWORK_3,
                popuplayertitle: 'TANZANIA RAILWAY NETWORK',
                interactive: true,
                title: '<img src="styles/legend/TANZANIARAILWAYNETWORK_3.png" /> TANZANIA RAILWAY NETWORK'
            });
var format_TANZANIAMAJORTOWNS_4 = new ol.format.GeoJSON();
var features_TANZANIAMAJORTOWNS_4 = format_TANZANIAMAJORTOWNS_4.readFeatures(json_TANZANIAMAJORTOWNS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TANZANIAMAJORTOWNS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TANZANIAMAJORTOWNS_4.addFeatures(features_TANZANIAMAJORTOWNS_4);
cluster_TANZANIAMAJORTOWNS_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_TANZANIAMAJORTOWNS_4
});
var lyr_TANZANIAMAJORTOWNS_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_TANZANIAMAJORTOWNS_4, 
                style: style_TANZANIAMAJORTOWNS_4,
                popuplayertitle: 'TANZANIA MAJOR TOWNS',
                interactive: true,
                title: '<img src="styles/legend/TANZANIAMAJORTOWNS_4.png" /> TANZANIA MAJOR TOWNS'
            });

lyr_Terrain_0.setVisible(true);lyr_TANZANIATRUNKROADS_1.setVisible(true);lyr_TANZANIAREGIONALROADS_2.setVisible(true);lyr_TANZANIARAILWAYNETWORK_3.setVisible(true);lyr_TANZANIAMAJORTOWNS_4.setVisible(true);
var layersList = [lyr_Terrain_0,lyr_TANZANIATRUNKROADS_1,lyr_TANZANIAREGIONALROADS_2,lyr_TANZANIARAILWAYNETWORK_3,lyr_TANZANIAMAJORTOWNS_4];
lyr_TANZANIATRUNKROADS_1.set('fieldAliases', {'Road': 'Road', 'Link': 'Link', 'RoadClass': 'RoadClass', 'Region': 'Region', 'Upstream': 'Upstream', 'Downstream': 'Downstream', 'Startumber': 'Startumber', 'StarteName': 'StarteName', 'EndNoumber': 'EndNoumber', 'EndNoeName': 'EndNoeName', 'kmPaved': 'kmPaved', 'kmSurveyed': 'kmSurveyed', 'kmUnpaved': 'kmUnpaved', 'WeighdAADT': 'WeighdAADT', 'CurredAADT': 'CurredAADT', 'RoadLabel': 'RoadLabel', });
lyr_TANZANIAREGIONALROADS_2.set('fieldAliases', {'Road': 'Road', 'Link': 'Link', 'RoadClass': 'RoadClass', 'Region': 'Region', 'Upstream': 'Upstream', 'Downstream': 'Downstream', 'Startumber': 'Startumber', 'StarteName': 'StarteName', 'EndNoumber': 'EndNoumber', 'EndNoeName': 'EndNoeName', 'kmPaved': 'kmPaved', 'kmSurveyed': 'kmSurveyed', 'kmUnpaved': 'kmUnpaved', 'WeighdAADT': 'WeighdAADT', 'CurredAADT': 'CurredAADT', 'RoadLabel': 'RoadLabel', });
lyr_TANZANIARAILWAYNETWORK_3.set('fieldAliases', {'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'RRLINE_': 'RRLINE_', 'RRLINE_ID': 'RRLINE_ID', 'RRLNTYPE': 'RRLNTYPE', 'RRLNTYPETX': 'RRLNTYPETX', 'RRLNSTAT': 'RRLNSTAT', 'RRLNSTATTX': 'RRLNSTATTX', });
lyr_TANZANIAMAJORTOWNS_4.set('fieldAliases', {'NAME': 'NAME', 'AUTO_ID': 'AUTO_ID', });
lyr_TANZANIATRUNKROADS_1.set('fieldImages', {'Road': 'TextEdit', 'Link': 'TextEdit', 'RoadClass': 'TextEdit', 'Region': 'TextEdit', 'Upstream': 'TextEdit', 'Downstream': 'TextEdit', 'Startumber': 'TextEdit', 'StarteName': 'TextEdit', 'EndNoumber': 'TextEdit', 'EndNoeName': 'TextEdit', 'kmPaved': 'TextEdit', 'kmSurveyed': 'TextEdit', 'kmUnpaved': 'TextEdit', 'WeighdAADT': 'TextEdit', 'CurredAADT': 'TextEdit', 'RoadLabel': 'TextEdit', });
lyr_TANZANIAREGIONALROADS_2.set('fieldImages', {'Road': 'TextEdit', 'Link': 'TextEdit', 'RoadClass': 'TextEdit', 'Region': 'TextEdit', 'Upstream': 'TextEdit', 'Downstream': 'TextEdit', 'Startumber': 'TextEdit', 'StarteName': 'TextEdit', 'EndNoumber': 'TextEdit', 'EndNoeName': 'TextEdit', 'kmPaved': 'TextEdit', 'kmSurveyed': 'TextEdit', 'kmUnpaved': 'TextEdit', 'WeighdAADT': 'TextEdit', 'CurredAADT': 'TextEdit', 'RoadLabel': 'TextEdit', });
lyr_TANZANIARAILWAYNETWORK_3.set('fieldImages', {'FNODE_': 'TextEdit', 'TNODE_': 'TextEdit', 'LPOLY_': 'TextEdit', 'RPOLY_': 'TextEdit', 'LENGTH': 'TextEdit', 'RRLINE_': 'TextEdit', 'RRLINE_ID': 'TextEdit', 'RRLNTYPE': 'Range', 'RRLNTYPETX': 'TextEdit', 'RRLNSTAT': 'Range', 'RRLNSTATTX': 'TextEdit', });
lyr_TANZANIAMAJORTOWNS_4.set('fieldImages', {'NAME': 'TextEdit', 'AUTO_ID': 'TextEdit', });
lyr_TANZANIATRUNKROADS_1.set('fieldLabels', {'Road': 'header label - visible with data', 'Link': 'hidden field', 'RoadClass': 'header label - visible with data', 'Region': 'header label - visible with data', 'Upstream': 'no label', 'Downstream': 'no label', 'Startumber': 'no label', 'StarteName': 'header label - visible with data', 'EndNoumber': 'no label', 'EndNoeName': 'header label - visible with data', 'kmPaved': 'no label', 'kmSurveyed': 'no label', 'kmUnpaved': 'no label', 'WeighdAADT': 'no label', 'CurredAADT': 'no label', 'RoadLabel': 'header label - visible with data', });
lyr_TANZANIAREGIONALROADS_2.set('fieldLabels', {'Road': 'header label - visible with data', 'Link': 'no label', 'RoadClass': 'header label - visible with data', 'Region': 'header label - visible with data', 'Upstream': 'no label', 'Downstream': 'no label', 'Startumber': 'no label', 'StarteName': 'header label - always visible', 'EndNoumber': 'no label', 'EndNoeName': 'header label - always visible', 'kmPaved': 'no label', 'kmSurveyed': 'no label', 'kmUnpaved': 'no label', 'WeighdAADT': 'no label', 'CurredAADT': 'no label', 'RoadLabel': 'header label - visible with data', });
lyr_TANZANIARAILWAYNETWORK_3.set('fieldLabels', {'FNODE_': 'no label', 'TNODE_': 'no label', 'LPOLY_': 'no label', 'RPOLY_': 'no label', 'LENGTH': 'header label - visible with data', 'RRLINE_': 'header label - visible with data', 'RRLINE_ID': 'header label - visible with data', 'RRLNTYPE': 'header label - visible with data', 'RRLNTYPETX': 'header label - visible with data', 'RRLNSTAT': 'header label - visible with data', 'RRLNSTATTX': 'header label - visible with data', });
lyr_TANZANIAMAJORTOWNS_4.set('fieldLabels', {'NAME': 'header label - visible with data', 'AUTO_ID': 'no label', });
lyr_TANZANIAMAJORTOWNS_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});