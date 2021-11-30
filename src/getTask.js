import list from "./list";
import { format } from 'date-fns';

class task{


    // clear task container child element

    static clearChild(){

        let con=document.querySelector('.taskContainer');

        while(con.childNodes.length>1){
            con.removeChild(con.lastChild)
        }
    }


    // filter function

    static filterTask(arr,title){

        this.clearChild();     
        let filterArray= arr.filter(a=>a.priority===title);
        list.displayList(filterArray,title);

    }

    // get today task  function

    static getTodayTask(arr){

        let currentDate=format(new Date(),'yyyy-MM-dd');
        this.clearChild();
        let todayArray= arr.filter(a=>a.date===currentDate);
        list.displayList(todayArray,'Today');
        // console.log(todayArray);

    }
 
    static taskMain(){
        let taskArray=[];

        let localTask=JSON.parse(localStorage.getItem('ourTask'));
        if(Array.isArray(localTask)&&localTask.length){
            list.displayList(localTask);
            taskArray.push(...localTask);
        }

      
        let cancel = document.querySelector('#cancel');
        let form=document.querySelector('.taskForm');
        let add = document.querySelector('#add');
        
        const createTask=(name,date,priority)=>{
            return{name,date,priority}
        }

        //get value ad store the array
        function addToArray(){
            let name=document.getElementById('name').value;
            let date=document.getElementById('date').value;
            let priority=document.getElementById('priority').value;

            if(!name||!date||!priority){
                alert('would please fill form!');
                return;
            }

            let newTask=  createTask(name,date,priority);
            taskArray.push(newTask);
            form.reset();
            closeForm()
            localStorage.setItem('ourTask',JSON.stringify(taskArray));
            list.displayList(taskArray);
           
            
        }

        //close the form 
        function closeForm(){
            form.reset();
            form.classList.add('unActive');
        }


        cancel.addEventListener('click',function(e){
            e.preventDefault();
            closeForm()
        });

        add.addEventListener('click',function(e){
            e.preventDefault();
            addToArray();
        });

        localTask=JSON.parse(localStorage.getItem('ourTask'));
      
        //filter today
        let todayButton=document.querySelector('.todayTask');
        todayButton.addEventListener('click',function(){
            task.getTodayTask(localTask);
        });

        //display ALL
        let inboxButton=document.querySelector('.inbox');
        inboxButton.addEventListener('click',function(){
            list.displayList(localTask,'Inbox');
        });

        let filterButton =document.querySelectorAll('.filterButton');
        filterButton.forEach(btn=>{
            btn.onclick=function(){
                task.filterTask(localTask,btn.dataset.title);
            }
        })


        
    }


       
}

export default task;