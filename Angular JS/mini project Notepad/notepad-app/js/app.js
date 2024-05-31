var notepad = angular.module("notepad", ["LocalStorageModule", "xeditable", "ngAnimate", "truncate", "ui.router"]);


notepad.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", "localStorageServiceProvider", function($stateProvider, $urlRouterProvider, $locationProvider, localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('ngpad');
  $locationProvider.html5Mode(true)
  .hashPrefix('!');
  
  $urlRouterProvider.otherwise("/");
  
  $stateProvider
  .state("home", {
    url: "/",
    templateUrl: "views/home.html",
    controller: "NotesCtrl"
  })
  .state("note", {
    url: "/:id",
    templateUrl: "views/note.html",
    controller: "NotesCtrl"
  });
  
}]);

notepad.run(function(editableOptions) {
  editableOptions.theme = 'default';
});

notepad.controller("NotesCtrl", ["$scope", "localStorageService", "$stateParams", function($scope, localStorageService, $stateParams){
  
  $scope.notes = [];
  
  //Get the bookmarksData from Local Storage if there is some already in place
  $scope.getNotes = function(){
    if(localStorageService.get("noteData")){
      $scope.notes = localStorageService.get("noteData");
    } else {
      $scope.notes = [];
    }
  }
  
  $scope.addNote = function(){
    $scope.notes.unshift({
      title: $scope.title,
      category: $scope.category,
      content: $scope.content,
      noteId: Date.now()
    });
    localStorageService.set("noteData", $scope.notes);
    $scope.title = "",
    $scope.category = "",
    $scope.content = ""
  }
  
  $scope.updateNote = function(){
    localStorageService.set("noteData", $scope.notes);
  }
  
  $scope.currentId = $stateParams.id;  
  
  $scope.deleteNote = function(start){
    var confirmDelete = confirm("Are you sure you want to delete this note?");
    if (confirmDelete) {
      $scope.notes.splice(start, 1);
      localStorageService.set("noteData", $scope.notes);
    }
    localStorageService.set("noteData", $scope.notes);
  }
  
}]);