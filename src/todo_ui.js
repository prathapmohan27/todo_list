
class todo_ui{

     static headerElement(){
        let header = document.createElement('div');
        header.classList.add('header');

        let div=document.createElement('div');
        let headerButton=document.createElement('button')
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
        inbox.innerHTML='<i class="material-icons">inbox</i> inbox';
        sideBar.appendChild(inbox);

        let h3=document.createElement('h3');
        h3.textContent='Projects';
        sideBar.appendChild(h3);

        let addProjects=document.createElement('div');
        addProjects.classList.add('sideBarButton')
        addProjects.innerHTML='<i class="material-icons">add</i> create Projects';
        sideBar.appendChild(addProjects);

        return sideBar;

    }

    static storage(){
        let storage = document.createElement('div');
        storage.classList.add('storage');
        
        let addTask=document.createElement('div');
        addTask.classList.add('addTask');
        addTask.innerHTML='<i class="material-icons">add</i> Add Task';
        storage.appendChild(addTask);

        return storage;
    }

}

export default todo_ui;