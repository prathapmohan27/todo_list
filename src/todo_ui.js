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
        header.appendChild(div);

        let h1= document.createElement('h1');
        h1.innerHTML='<i class="material-icons">done_all</i> Todo List'
        header.appendChild(h1);

        return header;
    }

    static sideBarElement(){
        let sideBar =document.createElement('div');
        sideBar.classList.add('sideBar');

        let inbox=document.createElement('div');
        inbox.classList.add('sideBarButton');
        inbox.innerHTML='<i class="material-icons">inbox</i> Inbox';
        sideBar.appendChild(inbox);

        let today=document.createElement('div');
        today.classList.add('sideBarButton');
        today.innerHTML='<i class="material-icons">insert_invitation</i> Today';
        sideBar.appendChild(today);

        let h3=document.createElement('h3');
        h3.textContent='Projects';
        sideBar.appendChild(h3);

        let addProjects=document.createElement('div');
        addProjects.classList.add('sideBarButton')
        addProjects.innerHTML='<i class="material-icons">add</i> Create Projects';
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
        "<input type='text' id='name' class=taskProperty placeholder='Title'></input>"+
        "<input type='date' id='date'></input>"+
        "<select name='priority' id='priority'><option value='low'>Low</option> <option value='medium'>Medium</option> <option value='high'>High</option></select>"+    
        "<input type='textarea' id='description' class=taskProperty placeholder='Description'></input>"+
        "<button id='cancel' class='formButton'>Cancel</button>"+
        "<button id='add' class='formButton'>Add</button>"
        ;  
        return form;
    }

    static hideShowBar(){
        let sidebar=document.querySelector('.sideBar');
        function hide(){
            if(sidebar.style.display != 'none'){
                sidebar.style.display='none'
            }
            else{
                sidebar.style.display='block'
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