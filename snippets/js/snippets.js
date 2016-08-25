/**
 * Created by neal on 8/24/16.
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

function initializeSnippets() {

    var snippets = [
        {
            headline: "Lorem ipsum",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing " +
                  "elit. Donec convallis lorem tellus, non ullamcorper " +
                  "nisl euismod in. Nunc id lacus sed lorem cursus " +
                  "pellentesque."
        },
        {
            headline: "Nullam eu libero",
            text: "Nullam eu libero maximus velit venenatis elementum ac " +
                  "ac lorem. Duis ac sem iaculis, lobortis lorem et, " +
                  "fringilla dolor. Donec gravida eleifend tellus, a mattis " +
                  "leo tempor a."
        },
        {
            headline: "Maecenas suscipit",
            text: "Maecenas suscipit mi eu tortor tincidunt, in elementum " +
                  "ligula molestie. Quisque ornare nulla eu ultrices fringilla. " +
                  "Curabitur varius in ante non facilisis."
        },
        {
            headline: "Integer lobortis",
            text: "Integer lobortis ipsum eget risus scelerisque, quis " +
                  "interdum lacus convallis. Integer non pharetra augue. " +
                  "Suspendisse eu diam felis. Fusce porta nisi id nisi " +
                  "scelerisque tincidunt."
        },
        {
            headline: "Sed varius neque",
            text: "Sed varius neque non facilisis porta. Nam imperdiet " +
                  "sagittis volutpat. Vestibulum egestas viverra velit, id " +
                  "interdum lacus pellentesque et. Nulla ullamcorper neque " +
                  "id elit aliquet, dignissim consectetur ante accumsan."
        }
    ];

    function displaySnippet(snippet) {
        var $headline = document.getElementById("snippet-headline");
        $headline.innerHTML = snippet.headline;

        var $text = document.getElementById("snippet-text");
        $text.innerHTML = snippet.text;
    }

    var currentSnippet = 0;
    displaySnippet(snippets[currentSnippet]);

    $prev = document.getElementById("prev-snippet");
    $prev.addEventListener("click", function () {
        if (currentSnippet > 0) {
            currentSnippet--;
        } else {
            currentSnippet = snippets.length - 1;
        }
        displaySnippet(snippets[currentSnippet]);
    });

    $next = document.getElementById("next-snippet");
    $next.addEventListener("click", function () {
        if (currentSnippet < snippets.length - 1) {
            currentSnippet++;
        } else {
            currentSnippet = 0;
        }
        displaySnippet(snippets[currentSnippet]);
    });
}

// Wait for the page to load, then call initializeSnippets() to initialize
// the page and have the navigation buttons begin cycling through the
// snippets.
window.addEventListener("load", initializeSnippets);