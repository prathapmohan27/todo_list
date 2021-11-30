//  import './css/homeUi.css'
import './css/home.css'
import task from "./getTask";

class todo_ui{

     static headerElement(){

        let header = document.createElement('div');
        header.classList.add('header');

        let div=document.createElement('div');
        let headerButton=document.createElement('button')
        headerButton.classList.add('headerButton');
        headerButton.innerHTML='<i class="material-icons">list</i>';
        div.appendChild(headerButton);
       

        let h1= document.createElement('h1');
        h1.innerHTML='<i class="material-icons">done_all</i> Todo List'
        header.appendChild(h1);
        header.appendChild(div);

        return header;
    }

    static sideBarElement(){
        let sideBar =document.createElement('div');
        sideBar.classList.add('sideBar');

        let inbox=document.createElement('div');
        inbox.classList.add('sideBarButton');
        inbox.classList.add('inbox');
        inbox.innerHTML='<i class="material-icons">inbox</i> Inbox';
        sideBar.appendChild(inbox);

        let today=document.createElement('div');
        today.classList.add('sideBarButton');
        today.classList.add('todayTask');
        today.innerHTML='<i class="material-icons">insert_invitation</i> Today';
        sideBar.appendChild(today);

        let low=document.createElement('div');
        low.classList.add('sideBarButton');
        low.classList.add('filterButton')
        low.setAttribute('data-title','Low')
        low.innerHTML='<i class="material-icons">low_priority</i> Low';
        sideBar.appendChild(low);

        let medium=document.createElement('div');
        medium.classList.add('sideBarButton');
        medium.classList.add('filterButton')
        medium.setAttribute('data-title','Medium')
        medium.innerHTML='<i class="material-icons">density_medium</i> Medium';
        sideBar.appendChild(medium);

        let high=document.createElement('div');
        high.classList.add('sideBarButton');
        high.classList.add('filterButton')
        high.setAttribute('data-title','High')
        high.innerHTML='<i class="material-icons">priority_high</i> High';
        sideBar.appendChild(high);

        let h3=document.createElement('h3');
        h3.textContent='Projects';
        sideBar.appendChild(h3);

        let addProjects=document.createElement('div');
        addProjects.classList.add('sideBarButton')
        addProjects.innerHTML='<i class="material-icons">add_circle_outline</i> Create Projects';
        sideBar.appendChild(addProjects);

        return sideBar;

    }

    static taskButton(){
        let addTask=document.createElement('div');
        addTask.classList.add('addTask');
        addTask.innerHTML='<i class="material-icons">add</i> Add Task';
        return addTask;
    }

    static storage(){
        let storage = document.createElement('div');
        storage.classList.add('storage');
        let taskContainer=document.createElement('div');
        taskContainer.classList.add('taskContainer');
        let title=document.createElement('h1')
        title.classList.add('title');
        taskContainer.appendChild(title);
        storage.appendChild(taskContainer);
        storage.appendChild(this.taskButton());
        return storage;
    }

    static taskForm(){
        let form=document.createElement('form');
        form.classList.add('taskForm');
        form.classList.add('unActive')
        form.action='./task.js';
        form.method='GET'
        form.innerHTML=
        "<input type='text' id='name'  placeholder='Title'></input>"+
        "<div class='inputDiv'><input class='divElm' type='date' id='date'></input><select class='divElm' name='priority' id='priority'><option value='Low'>Low</option> <option value='Medium'>Medium</option> <option value='High'>High</option></select></div>"+
        "<div class='buttonDiv'><button id='cancel' class='formButton'>Cancel</button><button id='add' class='formButton'>Add</button></div>"
        ;  
        return form;
    }

    static hideShowBar(){

       

        function hide(){
            let sidebar=document.querySelector('.sideBar');
            let main=document.querySelector('.storage');
            let menu=document.querySelector('.headerButton');
            let cssValue= window.getComputedStyle(sidebar, null).getPropertyValue("display");
            if(cssValue=== 'none'){
                sidebar.classList.add('active');
                main.classList.add('mobStorage');
                menu.innerHTML='<i class="material-icons">close</i>';
                
                
            }
            else{
                sidebar.classList.remove('active');
                main.classList.remove('mobStorage');
                menu.innerHTML='<i class="material-icons">list</i>';
                
    
            }

        }

        let headerButton=document.querySelector('.headerButton')
        headerButton.addEventListener('click',hide);
    }


    static displayForm(){
        let addTaskButton=document.querySelector('.addTask');
        let form = document.querySelector('.taskForm');
        function removeClass(){
            form.classList.remove('unActive');
        }

        addTaskButton.addEventListener('click',removeClass)
    }

    static render(){
        let content=document.querySelector('.content');
        content.appendChild(this.headerElement())
        content.appendChild(this.sideBarElement());
        content.appendChild(this.storage());
        let storage=document.querySelector('.storage')
        storage.appendChild(this.taskForm());
        this.hideShowBar();
        this.displayForm();
        task.taskMain();
    }

}

export default todo_ui;