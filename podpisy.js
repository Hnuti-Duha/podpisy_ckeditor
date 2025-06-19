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
		title: 'Hláška 1',
		image: 'template1.gif',
		description: 'One main image with a title and text that surround the image.',
		html: 'Nějaký text první hlášky'
	},
    {
		title: 'Hláška 2',
		image: 'template1.gif',
		description: 'One main image with a title and text that surround the image.',
		html: 'Nějaký text druhé hlášky'
	},
    {
		title: 'Hláška 3',
		image: 'template1.gif',
		description: 'One main image with a title and text that surround the image.',
		html: 'Nějaký text třetí hlášky'
	}
 ]
} );
