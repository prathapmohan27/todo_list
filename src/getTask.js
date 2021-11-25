

class task{
 
    static taskMain(){

        let taskArray=[];
        let cancel = document.querySelector('#cancel');
        let form=document.querySelector('.taskForm');
        let add = document.querySelector('#add');
        
        const createTask=(name,date,priority,description)=>{
            return{name,date,priority,description}
        }
        //get value ad store the array
        function addToArray(){
            let name=document.getElementById('name').value;
            let date=document.getElementById('date').value;
            let priority=document.getElementById('priority').value;
            let description=document.getElementById('description').value;

            if(!name||!date||!priority||!description){
                alert('would please fill form!');
                return;
            }

            let newTask=  createTask(name,date,priority,description);
            taskArray.push(newTask);
            console.log(taskArray);
            form.reset();
            closeForm()
            
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
        
    }


       
}

export default task;