var config = {
	width: 0, // Default width; 0 = full width of the container
	projection: 'airy', // Map projection used: airy, aitoff, armadillo, august, azimuthalEqualArea, azimuthalEquidistant, baker, berghaus, boggs, bonne, bromley, collignon, craig, craster, cylindricalEqualArea, cylindricalStereographic, eckert1, eckert2, eckert3, eckert4, eckert5, eckert6, eisenlohr, equirectangular, fahey, foucaut, ginzburg4, ginzburg5, ginzburg6, ginzburg8, ginzburg9, gringorten, guyou, hammer, hatano, healpix, hill, homolosine, kavrayskiy7, lagrange, larrivee, laskowski, loximuthal, mercator, miller, mollweide, mtFlatPolarParabolic, mtFlatPolarQuartic, mtFlatPolarSinusoidal, naturalEarth, nellHammer, orthographic, patterson, peirceQuincuncial, polyconic, rectangularPolyconic, robinson, sinusoidal, stereographic, times, twoPointEquidistant, vanDerGrinten, vanDerGrinten2, vanDerGrinten3, vanDerGrinten4, wagner4, wagner6, wagner7, wiechel, winkel3, wintri
	location: true, // Display location picker
	geopos: [51.5, 0], // Geographical position [lat,lon] to center the map
	zoomlevel: 1, // Initial zoom level
	interactive: true,
	datapath: 'data/', // Path/URL to data files, empty = subfolder 'data'
	stars: {
		show: true, // Show stars
		limit: 6, // Show only stars brighter than limit magnitude
		colors: true, // Show stars in spectral colors, if not use default color
		style: { fill: '#ffffff', opacity: 1 }, // Default style for stars
		designation: true, // Show star names (Bayer, Flamsteed, Variable star, Gliese or designation,
		// i.e. whichever of the previous applies first); may vary with culture setting
		designationType: 'desig', // Which kind of name is displayed as designation (fieldname in starnames.json)
		designationStyle: {
			fill: '#ddddbb',
			font: "11px 'Palatino Linotype', Georgia, Times, 'Times Roman', serif",
			align: 'left',
			baseline: 'top',
		},
		designationLimit: 2.5, // Show only names for stars brighter than nameLimit
		propername: false, // Show proper name (if present)
		propernameType: 'name', // Languge for proper name, default IAU name; may vary with culture setting
		// (see list below of languages codes available for stars)
		propernameStyle: {
			fill: '#ddddbb',
			font: "13px 'Palatino Linotype', Georgia, Times, 'Times Roman', serif",
			align: 'right',
			baseline: 'bottom',
		},
		propernameLimit: 1.5, // Show proper names for stars brighter than propernameLimit
		size: 7, // Maximum size (radius) of star circle in pixels
		exponent: -0.28, // Scale exponent for star size, larger = more linear
		data: 'stars.6.json', // Data source for stellar data,
		// number indicates limit magnitude
	},
	dsos: {
		show: false, // Show Deep Space Objects
		limit: 6, // Show only DSOs brighter than limit magnitude
		colors: true, // // Show DSOs in symbol colors if true, use style setting below if false
		style: { fill: '#cccccc', stroke: '#cccccc', width: 2, opacity: 1 }, // Default style for dsos
		names: true, // Show DSO names
		namesType: 'name', // Type of DSO ('desig' or language) name shown
		// (see list below for languages codes available for dsos)
		nameStyle: {
			fill: '#cccccc',
			font: '11px Helvetica, Arial, serif',
			align: 'left',
			baseline: 'top',
		}, // Style for DSO names
		nameLimit: 6, // Show only names for DSOs brighter than namelimit
		size: null, // Optional seperate scale size for DSOs, null = stars.size
		exponent: 1.4, // Scale exponent for DSO size, larger = more non-linear
		data: 'dsos.bright.json', // Data source for DSOs,
		// opt. number indicates limit magnitude
		symbols: {
			//DSO symbol styles, 'stroke'-parameter present = outline
			gg: { shape: 'circle', fill: '#ff0000' }, // Galaxy cluster
			g: { shape: 'ellipse', fill: '#ff0000' }, // Generic galaxy
			s: { shape: 'ellipse', fill: '#ff0000' }, // Spiral galaxy
			s0: { shape: 'ellipse', fill: '#ff0000' }, // Lenticular galaxy
			sd: { shape: 'ellipse', fill: '#ff0000' }, // Dwarf galaxy
			e: { shape: 'ellipse', fill: '#ff0000' }, // Elliptical galaxy
			i: { shape: 'ellipse', fill: '#ff0000' }, // Irregular galaxy
			oc: { shape: 'circle', fill: '#ffcc00', stroke: '#ffcc00', width: 1.5 }, // Open cluster
			gc: { shape: 'circle', fill: '#ff9900' }, // Globular cluster
			en: { shape: 'square', fill: '#ff00cc' }, // Emission nebula
			bn: { shape: 'square', fill: '#ff00cc', stroke: '#ff00cc', width: 2 }, // Generic bright nebula
			sfr: { shape: 'square', fill: '#cc00ff', stroke: '#cc00ff', width: 2 }, // Star forming region
			rn: { shape: 'square', fill: '#00ooff' }, // Reflection nebula
			pn: { shape: 'diamond', fill: '#00cccc' }, // Planetary nebula
			snr: { shape: 'diamond', fill: '#ff00cc' }, // Supernova remnant
			dn: { shape: 'square', fill: '#999999', stroke: '#999999', width: 2 }, // Dark nebula grey
			pos: { shape: 'marker', fill: '#cccccc', stroke: '#cccccc', width: 1.5 }, // Generic marker
		},
	},
	planets: {
		//Show planet locations, if date-time is set
		show: true,
		// List of all objects to show
		which: [
			'sol',
			'mer',
			'ven',
			'ter',
			'lun',
			'mar',
			'jup',
			'sat',
			'ura',
			'nep',
		],
		// Font styles for planetary symbols
		symbols: {
			// Character and color for each symbol in 'which' above (simple circle: \u25cf), optional size override for Sun & Moon
			sol: { symbol: '\u2609', letter: 'Su', fill: '#ffff00', size: '' },
			mer: { symbol: '\u263f', letter: 'Me', fill: '#cccccc' },
			ven: { symbol: '\u2640', letter: 'V', fill: '#eeeecc' },
			ter: { symbol: '\u2295', letter: 'T', fill: '#00ccff' },
			lun: { symbol: '\u25cf', letter: 'L', fill: '#ffffff', size: '' }, // overridden by generated crecent, except letter & size
			mar: { symbol: '\u2642', letter: 'Ma', fill: '#ff6600' },
			cer: { symbol: '\u26b3', letter: 'C', fill: '#cccccc' },
			ves: { symbol: '\u26b6', letter: 'Ma', fill: '#cccccc' },
			jup: { symbol: '\u2643', letter: 'J', fill: '#ffaa33' },
			sat: { symbol: '\u2644', letter: 'Sa', fill: '#ffdd66' },
			ura: { symbol: '\u2645', letter: 'U', fill: '#66ccff' },
			nep: { symbol: '\u2646', letter: 'N', fill: '#6666ff' },
			plu: { symbol: '\u2647', letter: 'P', fill: '#aaaaaa' },
			eri: { symbol: '\u26aa', letter: 'E', fill: '#eeeeee' },
		},
		symbolStyle: {
			fill: '#00ccff',
			font: "bold 17px 'Lucida Sans Unicode', Consolas, sans-serif",
			align: 'center',
			baseline: 'middle',
		},
		symbolType: 'symbol', // Type of planet symbol: 'symbol' graphic planet sign, 'disk' filled circle scaled by magnitude
		// 'letter': 1 or 2 letters S Me V L Ma J S U N
		names: false, // Show name in nameType language next to symbol
		nameStyle: {
			fill: '#00ccff',
			font: "14px 'Lucida Sans Unicode', Consolas, sans-serif",
			align: 'right',
			baseline: 'top',
		},
		namesType: 'desig', // Language of planet name (see list below of language codes available for planets),
		// or desig = 3-letter designation
	},
	constellations: {
		names: false, // Show constellation names
		namesType: 'iau', // Type of name Latin (iau, default), 3 letter designation (desig) or other language (see list below)
		nameStyle: {
			fill: '#cccc99',
			align: 'center',
			baseline: 'middle',
			font: [
				'14px Helvetica, Arial, sans-serif', // Style for constellations
				'12px Helvetica, Arial, sans-serif', // Different fonts for diff.
				'11px Helvetica, Arial, sans-serif',
			],
		}, // ranked constellations
		lines: true, // Show constellation lines, style below
		lineStyle: { stroke: '#cccccc', width: 1, opacity: 0.6 },
		bounds: false, // Show constellation boundaries, style below
		boundStyle: { stroke: '#cccc00', width: 0.5, opacity: 0.8, dash: [2, 4] },
	},
	mw: {
		show: true, // Show Milky Way as filled multi-polygon outlines
		style: { fill: '#ffffff', opacity: 0.1 }, // Style for MW layers
	},
	lines: {
		// Display & styles for graticule & some planes
		graticule: {
			show: true,
			stroke: '#cccccc',
			width: 0.6,
			opacity: 0.8,
			// grid values: "outline", "center", or [lat,...] specific position
			lon: {
				pos: [''],
				fill: '#eee',
				font: '10px Helvetica, Arial, sans-serif',
			},
			// grid values: "outline", "center", or [lon,...] specific position
			lat: {
				pos: [''],
				fill: '#eee',
				font: '10px Helvetica, Arial, sans-serif',
			},
		},
		equatorial: { show: false, stroke: '#aaaaaa', width: 1.3, opacity: 0.7 },
		ecliptic: { show: true, stroke: '#66cc66', width: 1.3, opacity: 0.7 },
		galactic: { show: false, stroke: '#cc6666', width: 1.3, opacity: 0.7 },
		supergalactic: { show: false, stroke: '#cc66cc', width: 1.3, opacity: 0.7 },
	},
	background: {
		// Background style
		fill: '#000000', // Area fill
		opacity: 1,
		stroke: '#000000', // Outline
		width: 1.5,
	},
	horizon: {
		//Show horizon marker, if location is set and map projection is all-sky
		show: true,
		stroke: '#cccccc', // Line
		width: 1.0,
		fill: '#000000', // Area below horizon
		opacity: 0.5,
	},
	daylight: {
		//Show day sky as a gradient, if location is set and map projection is hemispheric
		show: false,
	},
};

// Initialize the Celestial map
Celestial.display(config);

// Function to handle click events on celestial objects
function celestialBodyClick(d) {
	console.log(d); // Logs the data for the clicked celestial body
	if (d.type === 'planet') {
		console.log(d.properties.name); // Logs the name of the planet
	}
}

// After Celestial is loaded, add click event listeners to the planets
Celestial.container
	.selectAll('.celestial-planet')
	.on('click', celestialBodyClick);

Celestial.container.selectAll('.planet').on('click', function (d) {
	celestialBodyClick(d);
});

console.log(Celestial);
Celestial.addCallback((e) => {
	console.log('callback');
	console.log(e);
});

const dragged = (event, d) =>
	circle
		.raise()
		.attr('cx', (d.x = event.x))
		.attr('cy', (d.y = event.y));
const ended = () => circle.classed('dragging', false);
event.on('drag', dragged).on('end', ended);
