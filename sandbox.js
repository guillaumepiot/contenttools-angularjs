angular.module('editorApp', [])
    .directive('ngEditor',['$compile', function($compile){
        
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



            // Capture element changes
            ContentEdit.Root.get().bind('taint', function (elm) {

                // If it has a parent, it is not a Region and will have "attr"
                if (elm.parent()) {
                    if (elm.attr('ng-test')){
                        console.log("Reload directive");
                        
                        elm.selection(new ContentSelect.Range(0, 0));
                        $compile(element.contents())(scope);
                    }
                }

            });


        }

        return {
            link: link
        }
        
    }])
    .directive('ngTest', function(){

        return {
            compile: function(element, attrs){
                var htmlText = 'test';
                console.log(element.child)
                element.html(htmlText);
            },
            link: function (scope, element) {
                console.log("Scope loaded")
            }
        }
        
    })