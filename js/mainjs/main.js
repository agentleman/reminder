var reminder=angular.module('reminder',[]);
   reminder.controller('mainCtrl',[
     '$scope',
     function($scope){
       $scope.database=[
         {
           id:1001,
           name:"买书计划",
           theme:'pink',
           todos:[
             {id:1,name:'三国',isDone:false},
             {id:2,name:'水浒',isDone:true}
           ]
         },
         {
           id:1002,
           name:"买飞机计划",
           theme:'green',
           todos:[
             {id:1,name:'歼击机',isDone:true},
             {id:2,name:'轰炸机',isDone:false}
           ]
         }],
       $scope.colors=[
         'pink','green','blue','purple','orange','brow','yellow'
       ]
       $scope.addlist=function(){
          var len=$scope.database.length;
          var list={
            id:1004,
            name:'新列表'+(len+1),
            theme:$scope.colors[len%7],
            todos:[]
          }
          $scope.database.push(list);
       }
       $scope.currentlist=$scope.database[0];
       $scope.setcurrent=function(i){
         $scope.currentlist=$scope.database[i];
       }
       $scope.save=function(){

       }
     }
   ])
