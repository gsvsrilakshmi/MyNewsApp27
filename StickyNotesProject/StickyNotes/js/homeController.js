app.controller('homeCtrl', function($scope, $location){
	// console.log('welcome');
	$scope.getNotes = function () {
        return notesService.notes();
    };

	$scope.addNote = function (title, noteText) {
        if(noteTitle != '') {
            notesService.addNote(title, noteText);
        }
    };
    $scope.deleteNote = function (id) {
        notesService.deleteNote(id);
    };
	
	$scope.addSticky = function() {
		$location.path('/addSticky')
	}
});
app.service('notesService', function () {
        var data = [
            {id:1, title:'Note 1', text:'This is Note 1.'},
            {id:2, title:'Note 2', text:'This is Note 2.'}
            
        ];

        this.notes = function () {
            return data;
        }
        this.addNote = function (noteTitle, noteText) {
            var currentIndex = data.length + 1;
            data.push({
                id:currentIndex, title:noteTitle, text:noteText
            });
        }
        this.deleteNote = function (id) {
            var oldNotes = data;
            data = [];

            angular.forEach(oldNotes, function (note) {
                if (note.id !== id) { 
                	data.push(note);
                }
            });
        }
})