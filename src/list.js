import { format } from 'date-fns'

class list{

    static createTaskList(name,date){
       
        let div= document.createElement('div');
        div.classList.add('item');
        // div.setAttribute('data-index',i);
        div.setAttribute('data-name',name);

        let checkBox=document.createElement('input');
        checkBox.classList.add('check');
        checkBox.type = "checkbox";
        checkBox.setAttribute('data-name',name);
        div.appendChild(checkBox);

        let taskName=document.createElement('p')
        taskName.classList.add('taskP')
        taskName.textContent=name;
        div.appendChild(taskName);

        let taskDate=document.createElement('p')
        taskName.classList.add('taskP');
        taskDate.textContent=format(new Date(date),'dd/MM/yyyy');
        div.appendChild(taskDate);

        let removeButton=document.createElement('button');
        removeButton.classList.add('remove');
        // removeButton.setAttribute('data-index',i);
        removeButton.setAttribute('data-name',name);
        removeButton.innerHTML='<i class="material-icons">delete</i> '
        div.appendChild(removeButton);
        
        return div;

    }

    static displayList(taskArray,heading='Inbox'){
       

        let getLocalTask=JSON.parse(localStorage.getItem('ourTask'));
      
        let container=document.querySelector('.taskContainer');
        let title=document.querySelector('.title');
        title.textContent=heading;
        let name,date;
        
        for(let i=container.childElementCount-1;i<=taskArray.length-1;i++){

            for(let j in taskArray[i]){
    
                if(j==='name'){
                    name=taskArray[i][j]
                 }
                if(j=='date'){
                    date=taskArray[i][j]
                }
            }
        
            container.appendChild(this.createTaskList(name,date));
            
        }
               
        let check=document.querySelectorAll('.check');
        let item=document.querySelectorAll('.item');
        let removeButton=document.querySelectorAll('.remove');

        function removeTask(r){
            item.forEach((div)=>{
                if(div.dataset.name===r.dataset.name){
                    let index=taskArray.findIndex(x=>x.name===div.dataset.name);
                    let localIndex=getLocalTask.findIndex(x=>x.name===div.dataset.name)
                    container.removeChild(div);
                    taskArray.splice(index,1);
                    getLocalTask.splice(localIndex,1);
                    localStorage.setItem("ourTask",JSON.stringify(getLocalTask));
                }
            })

        }

        removeButton.forEach(r=>{
            r.onclick=function(){
                removeTask(r);
            }
        });

        check.forEach(c=>{
            
            c.onclick=function(){
                removeTask(c);
            }
        });

       }
       
}

export default list;