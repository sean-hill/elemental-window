# elemental-window

## Description:
elemental-window is a simple jQuery plugin to help find the length from the edge of an element to the edge of the window.
It basically expands on jQuery's .offset() function by adding on the properties .right and .bottom.

## Usage:
1. Insert the necessary elements in your document's `<head>` section, e.g.:
   
        <script type='text/javascript' src='/javascripts/jquery.elemental-window.js'></script>

   Remember to include jquery.elemental-window.js *after* including the main jQuery library.

2. Initialise elemental-window in your document.onload, e.g.:

        <script type='text/javascript'>
            $(document).ready(function() {
                var edges $('#element').windowOffsets();
                var top = edges.top;
                var right = edges.right;
                var bottom = edges.bottom;
                var left = edges.left;
            });
        </script>
