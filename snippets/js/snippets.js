/**
 * Created by neal on 8/24/16.
 */

/*
 Sample snippets:

 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis lorem tellus, non ullamcorper nisl euismod in. Nunc id lacus sed lorem cursus pellentesque.

 Nullam eu libero maximus velit venenatis elementum ac ac lorem. Duis ac sem iaculis, lobortis lorem et, fringilla dolor. Donec gravida eleifend tellus, a mattis leo tempor a.

 Maecenas suscipit mi eu tortor tincidunt, in elementum ligula molestie. Quisque ornare nulla eu ultrices fringilla. Curabitur varius in ante non facilisis.

 Integer lobortis ipsum eget risus scelerisque, quis interdum lacus convallis. Integer non pharetra augue. Suspendisse eu diam felis. Fusce porta nisi id nisi scelerisque tincidunt.

 Sed varius neque non facilisis porta. Nam imperdiet sagittis volutpat. Vestibulum egestas viverra velit, id interdum lacus pellentesque et. Nulla ullamcorper neque id elit aliquet, dignissim consectetur ante accumsan.

 */

/*
 Use the Latin snippets above to:

 1. Cycle through a set of headlines on the page.
 2. Use the navigation buttons to move forward and backward
    through the snippets.
 3. Wrap from one end of the list to the other.
 4. Link each snippet to another web page with the <a> tag
    already on the page.

 To get started, think about:
  - what objects you will want to define
  - what high-level functionality you will want to implement
  - what event listeners you will want to implement
 */


// Wait for the page to load, then call setupSnippets() to initialize
// the page and have the navigation buttons begin cycline through the
// snippets.
window.addEventListener("load", function () {
    setupSnippets();
});