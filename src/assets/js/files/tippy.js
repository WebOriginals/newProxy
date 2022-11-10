// Подключение из node_modules
import tippy from 'tippy.js';

// Подключение cтилей из src/scss/libs
import "../../scss/libs/tippy.scss";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
// Подключение cтилей из node_modules
//import 'tippy.js/dist/tippy.css';

export function initTippy() {
	tippy('[data-tippy-content]', {

	});
}
initTippy();


am5.ready(function() {

	var root = am5.Root.new("chartdiv");
	var chart = root.container.children.push(am5map.MapChart.new(root, {
		panX: "rotateX",
		panY: "none",
		projection: am5map.geoEqualEarth(),
		layout: root.horizontalLayout
	}));


	let polygonSeries = chart.series.push(
		am5map.MapPolygonSeries.new(root, {
			geoJSON: am5geodata_worldLow,
			exclude: ["AQ"]
		})
	);

	polygonSeries.mapPolygons.template.setAll({
		tooltipText: "{name}: {value}"
	});

	polygonSeries.mapPolygons.template.states.create("hover", {
		fill: am5.color(6598489)
	});

	root.setThemes([
		am5themes_Animated.new(root)
	]);
	// до этого все хорошо работало

	polygonSeries.set("heatRules", [{
		target: polygonSeries.mapPolygons.template,
		dataField: "value",
		min: am5.color(12895428),
		max: am5.color(6598489),
		key: "fill"
	}]);

	polygonSeries.mapPolygons.template.events.on("pointerover", function(ev) {
		heatLegend.showValue(ev.target.dataItem.get("value"));
	});

	//я по этой карте искал id стран https://www.artlebedev.ru/country-list/
	polygonSeries.data.setAll([
		{ id: "MY", value: 139082 },
		{ id: "CN", value: 104517 },
		{ id: "GB", value: 66255 },
		{ id: "RU", value: 62888 },
		{ id: "DE", value: 56452 },
		{ id: "ES", value: 54561 },
		{ id: "PL", value: 40134 },
		{ id: "BR", value: 38894 },
		{ id: "NL", value: 38731 },
		{ id: "PT", value: 38179 },
	]);

	var heatLegend = chart.children.push(am5.HeatLegend.new(root, {
		orientation: "vertical",
		startColor: am5.color(12895428),
		endColor: am5.color(6598489),
		startText: "Lowest",
		endText: "Highest",
		stepCount: 5
	}));

	heatLegend.startLabel.setAll({
		fontSize: 12,
		fill: heatLegend.get("startColor")
	});

	heatLegend.endLabel.setAll({
		fontSize: 12,
		fill: heatLegend.get("endColor")
	});

	polygonSeries.events.on("datavalidated", function () {
		heatLegend.set("startValue", polygonSeries.getPrivate("valueLow"));
		heatLegend.set("endValue", polygonSeries.getPrivate("valueHigh"));
	});
});
