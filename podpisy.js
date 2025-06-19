/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// Register a templates definition set named "default".
CKEDITOR.addTemplates( 'default', {
	// The name of sub folder which hold the shortcut preview images of the
	// templates.
	imagesPath: CKEDITOR.getUrl( CKEDITOR.plugins.getPath( 'templates' ) + 'templates/images/' ),

	// The templates definitions.
	templates: [ {
		title: 'Další úspěch',
		image: 'template1.gif',
		description: 'Další úspěch může být náš společný. Staňte se dárcem či dárkyní Hnutí DUHA na darce.hnutiduha.cz.',
		html: 'Další úspěch může být náš společný. Staňte se dárcem či dárkyní Hnutí DUHA na <a href="https://darce.hnutiduha.cz/#widget">darce.hnutiduha.cz</a>.'
	},
    {
		title: 'Příští úspěch',
		image: 'template1.gif',
		description: 'Náš příští úspěch může být společný! Staňte se i Vy přáteli Hnutí DUHA. Více na darce.hnutiduha.cz.',
		html: 'Náš příští úspěch může být společný! Staňte se i Vy přáteli Hnutí DUHA<br>Více na <a href="http://darce.hnutiduha.cz/">darce.hnutiduha.cz</a>.'
	},
    {
		title: 'I Vy můžete',
		image: 'template1.gif',
		description: 'I Vy můžete pomoci přírodě. Podpořte Hnutí DUHA na darce.hnutiduha.cz.',
		html: 'I Vy můžete pomoci přírodě. Podpořte Hnutí DUHA na <a href="https://darce.hnutiduha.cz">darce.hnutiduha.cz</a>.'
	}
 ]
} );
