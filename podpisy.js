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
		html: 'Další úspěch může být náš společný. Staňte se dárcem či dárkyní Hnutí DUHA na <a style="color: #009540;font-weight: 600;" href="https://darce.hnutiduha.cz/#widget">darce.hnutiduha.cz</a>.'
	},
    {
		title: 'Příští úspěch',
		image: 'template1.gif',
		description: 'Náš příští úspěch může být společný! Staňte se i Vy přáteli Hnutí DUHA. Více na darce.hnutiduha.cz.',
		html: 'Náš příští úspěch může být společný! Staňte se i Vy přáteli Hnutí DUHA. Více na <a style="color: #009540;" href="http://darce.hnutiduha.cz/">darce.hnutiduha.cz</a>.'
	},
    {
		title: 'I Vy můžete',
		image: 'template1.gif',
		description: 'I Vy můžete pomoci přírodě. Podpořte Hnutí DUHA na darce.hnutiduha.cz.',
		html: 'I Vy můžete pomoci přírodě. Podpořte Hnutí DUHA na <a style="color: #009540;" href="https://darce.hnutiduha.cz">darce.hnutiduha.cz</a>.'
	},
    {
		title: 'Podpořte Hnutí DUHA',
		image: 'template1.gif',
		description: 'Podpořte Hnutí DUHA na darce.hnutiduha.cz.',
		html: 'Podpořte Hnutí DUHA na <a style="color: #009540;" href="http://darce.hnutiduha.cz/">darce.hnutiduha.cz</a>.'
	},
    {
		title: 'Staňte se i vy',
		image: 'template1.gif',
		description: 'Staňte se i Vy přáteli Hnutí DUHA. Bez pomoci lidí se naše práce neobejde. Více na http://darce.hnutiduha.cz.',
		html: 'Staňte se i Vy přáteli Hnutí DUHA. Bez pomoci lidí se naše práce neobejde. Více na <a style="color: #009540;" href="http://darce.hnutiduha.cz/">http://darce.hnutiduha.cz</a>.'
	},
    {
		title: 'I Vy můžete pomoci přírodě',
		image: 'template1.gif',
		description: 'I Vy můžete pomoci přírodě. Podpořte Hnutí DUHA na darce.hnutiduha.cz nebo dejte své srdce planetě ve Vaší závěti.',
		html: 'I Vy můžete pomoci přírodě. Podpořte Hnutí DUHA na <a style="color: #009540;" href="https://darce.hnutiduha.cz/">darce.hnutiduha.cz</a> nebo dejte své srdce planetě ve Vaší závěti.'
	}			
 ]
} );
