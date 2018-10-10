"use strict";
{
    angular.module('app')
        .controller('ToDoController', function(){
            const $ctrl = this;
          
            $ctrl.list = [
                {task: 'Walk the Dog', complete: false},
                {task: 'Go to the Store', complete: true},
                {task: 'Get Gas', complete: false},
                {task: 'Wash the Car', complete: false}
            ]
    
            $ctrl.addListItem = function() {
                $ctrl.list.push({task: $ctrl.newTask, complete: false});
                $ctrl.newTask = '';
            }

        

            // $ctrl.toggleCompleted = function() {
            //     $ctrl.list.complete = !$ctrl.list.complete;
            //      console.log($ctrl.list.complete)
                
            // }

           

            $ctrl.completeTask = (index) => {
                $ctrl.list[index].complete = true;
            }

            $ctrl.removeTask = function(index) {
                $ctrl.list.splice(index,1);
            }
        });

}
