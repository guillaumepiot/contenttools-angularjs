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