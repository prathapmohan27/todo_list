import task from "./getTask";
import todo_ui from "./todo_ui";

class project{

    static projectForm(){
        let ProForm=document.createElement('form');
        ProForm.classList.add('projectForm');
        ProForm.classList.add('unActive')
        ProForm.innerHTML=
        "<input type='text' id='proName'  placeholder='ProjectName'></input>"+
        "<div><button id='proCancel' class='proButton'>Cancel</button><button id='proAdd' class='proButton'>Add</button></div>"
        ;

        return ProForm;
    }

    static renderProForm(){
        let navBar=document.querySelector('.sideBar');
        navBar.appendChild(this.projectForm());

        let createProject=document.querySelector('.proButton');

        let cancel=document.querySelector('#proCancel');
        let add=document.querySelector('#proAdd');
        let form=document.querySelector('.projectForm');

        cancel.addEventListener('click',function(e){
            e.preventDefault();
            task.closeForm(form);
        });

        createProject.addEventListener('click',function(){
            todo_ui.displayForm(form)
        });


    }
}

export default project;