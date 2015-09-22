Content Tools & Angular JS
==========================

The source code is a demo integration between Content Tools JS and Angular JS.

[Content Tools JS](https://github.com/GetmeUK/ContentTools) is an inline page 
editor which can turn any standard HTML page into a WSYIWYG editor.

## Installation

Install the Node.js dependencies:

    $ npm install

## Start the demo site

    $ grunt serve

## Usage

Using an Angular directive called "ng-editor", it will bind the DOM element to
Content Tools and render its content editable:

    <div ng-editor="my-content">
        <p>Some content...</p>
    </div>

    <div ng-editor="my-content-another">
        <p>Another content....</p>
    </div>

## Save data

The Angular directive listen to the editor "save" event and collect the updated
content, inside a variable called "regions". The "regions" can then be saved by
a save to server function.

    angular.module('editorApp', [])
        .directive('ngEditor',  function(){
            
            function link(scope, element, attrs){

                // Initialise the editor
                editor = new ContentTools.EditorApp.get()
                editor.init('[ng-editor]', 'ng-editor')

                // Bind a function on editor save
                editor.bind('save', function(regions, autoSave){
                    
                    scope.$apply(function(){
                        scope.regions = regions;
                    });

                    // "regions" contains all the html for each editable regions
                    // Now, "regions" can be saved and used as needed.

                })

            }

            return {
                link: link
            }
            
        })

