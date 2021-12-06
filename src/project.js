import task from "./getTask";
import list from "./list";
import todo_ui from "./todo_ui";

class project {

    static projectForm() {
        let ProForm = document.createElement('form');
        ProForm.classList.add('projectForm');
        ProForm.classList.add('unActive');
        ProForm.innerHTML =
            "<input type='text' id='proName' class='comInput' placeholder='ProjectName'></input>" +
            "<div><button id='proCancel' class='proButton cancelForm comButton'>Cancel</button><button id='proAdd' class='proButton addForm comButton'>Add</button></div>"
            ;

        return ProForm;
    }

    static createPro(name) {

        let div = document.createElement('div');
        div.classList.add('sideBarButton')
        div.classList.add('proList');
        div.setAttribute('data-title', name);

        let projectButton = document.createElement('div');
        projectButton.innerHTML = '<i class="material-icons">playlist_add_check</i>' + ' ' + name;
        div.appendChild(projectButton);

        let proRemove = document.createElement('button');
        proRemove.classList.add('proRemove')
        proRemove.setAttribute('data-title', name)
        proRemove.innerHTML = '<i class="material-icons">highlight_off</i>'
        div.appendChild(proRemove);

        return div;
    }

    static removeProject(r) {

        let localData = JSON.parse(localStorage.getItem('proName'));
        let proNameContainer = document.querySelector('.proDiv');
        let pro = document.querySelectorAll('.proList');
        pro.forEach((p) => {
            if (r.dataset.title === p.dataset.title) {

                let localIndex = localData.indexOf(p.dataset.title)
                proNameContainer.removeChild(p);

                localData.splice(localIndex, 1);
                localStorage.setItem("proName", JSON.stringify(localData));
                localStorage.removeItem(r.dataset.title);
                task.clearChild();
                task.taskMain();
                task.resetFilter();

            }
        })

    }

    static displayPro(arr) {

        let proContainer = document.querySelector('.proDiv')

        for (let i = proContainer.childElementCount; i <= arr.length - 1; i++) {
            proContainer.appendChild(this.createPro(arr[i]));
        }

        let removePro = document.querySelectorAll('.proRemove');

        removePro.forEach(r => {
            r.onclick = (e) => {
                project.removeProject(r);
                e.stopPropagation();
            }
        });

        this.getProjectTask();
    }


    static getProjectName(form) {

        let proNameArray = [];

        proNameArray.push(...task.checkLocalStorage('proName'));

        let proName = document.querySelector('#proName').value;

        if (!proName) {
            alert('Would please enter project name');
            return;
        }
        if (proNameArray.length > 0 && proNameArray.findIndex(e => e === proName) !== -1) {
            alert('Already name exist')
            return;
        }
        proNameArray.push(proName);
        localStorage.setItem('proName', JSON.stringify(proNameArray));
        this.displayPro(proNameArray);
        form.reset();
        task.closeForm(form);

    }

    static getProjectTask() {
        let button = document.querySelectorAll('.proList');
        let form = document.querySelector('.taskForm');

        button.forEach(btn => {
            btn.onclick = () => {
                task.clearChild();
                list.changeTitle(btn.dataset.title);
                list.displayList(task.checkLocalStorage(btn.dataset.title), btn.dataset.title);
                task.resetFilter();
                task.addButton(form, btn.dataset.title);
                list.listButton(btn.dataset.title);
                task.addFilterButton(btn.dataset.title)
            }
        });
    }

    static renderProForm() {

        let pName = JSON.parse(localStorage.getItem('proName'));
        if (Array.isArray(pName) && pName.length) {
            this.displayPro(pName);
        }

        let navBar = document.querySelector('.sideBar');
        navBar.appendChild(this.projectForm());

        let createProject = document.querySelector('.proButton');

        let cancel = document.querySelector('#proCancel');
        let add = document.querySelector('#proAdd');
        let form = document.querySelector('.projectForm');



        cancel.addEventListener('click', (e) => {
            e.preventDefault();
            task.closeForm(form);
        });

        add.addEventListener('click', (e) => {
            e.preventDefault();
            project.getProjectName(form)


        })

        createProject.addEventListener('click', () => {
            task.resetFilter();
            todo_ui.displayForm(form)
        });



    }
}

export default project;