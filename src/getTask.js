import list from "./list";
import { format } from 'date-fns';

class task {


    // clear task container child element
    static clearChild() {
        let con = document.querySelector('.taskContainer');
        while (con.childNodes.length > 1) {
            con.removeChild(con.lastChild)
        }
    }


    // filter function
    static filterTask(arr, fill, title) {
        this.clearChild();
        let filterArray = arr.filter(a => a.priority === fill);
        list.displayList(filterArray, title);

    }

    // get today task  function
    static getTodayTask(arr, arrName) {
        let currentDate = format(new Date(), 'yyyy-MM-dd');
        let todayArray = arr.filter(a => a.date === currentDate);
        list.displayList(todayArray, arrName);
    }


    static closeForm(form) {
        form.reset();
        form.classList.add('unActive');
    }

    //check local storage
    static checkLocalStorage(arr) {
        let getArray = JSON.parse(localStorage.getItem(arr));
        if (getArray) {
            return getArray;
        }
        return getArray = [];
    }


    static addToArray(form, arrName) {
        let taskArray = [];
        taskArray.push(...this.checkLocalStorage(arrName));

        let name = document.getElementById('name').value;
        let date = document.getElementById('date').value;
        let priority = document.getElementById('priority').value;



        if (!name || !date || !priority) {
            alert('would please fill form!');
            return;
        }
        if (taskArray.length > 0 && taskArray.findIndex(e => e.name === name) !== -1) {
            alert('Already name exist')
            return;
        }

        const createTask = (name, date, priority) => {
            return { name, date, priority }
        }

        let newTask = createTask(name, date, priority);
        taskArray.push(newTask);
        form.reset();
        task.closeForm(form)
        localStorage.setItem(arrName, JSON.stringify(taskArray));
        list.displayList(JSON.parse(localStorage.getItem(arrName)), arrName);
        return;

    }


    static addButton(form, title) {
        let add = document.querySelector('#add');
        add.onclick = (e) => {
            e.preventDefault();
            task.addToArray(form, title);
            task.resetFilter();
            return;
        }

    }

    static resetFilter() {
        let filterForm = document.querySelector('.filterForm')
        filterForm.reset();

    }


    static addFilterButton(arrName) {

        let filterButton = document.querySelector('.filter');

        filterButton.addEventListener('change', function () {
            let fill = document.querySelector('.filter').value;
            if (fill == 'Filter') {
                return;
            }
            else if (fill) {
                let localTask = JSON.parse(localStorage.getItem(arrName))
                task.filterTask(localTask, fill, arrName);

            }
        });

        //filter today
        let todayButton = document.querySelector('.todayTask');
        todayButton.onclick = () => {
            task.clearChild();
            let localTask = JSON.parse(localStorage.getItem(arrName))
            task.getTodayTask(localTask, arrName);
            task.resetFilter();


        }

    }


    static taskMain() {

        list.displayList(this.checkLocalStorage('Inbox'));


        let cancel = document.querySelector('#cancel');
        let form = document.querySelector('.taskForm');

        cancel.addEventListener('click', (e) => {
            e.preventDefault();
            task.closeForm(form)
        });

        this.addButton(form, 'Inbox');

        //display ALL
        let inboxButton = document.querySelector('.inbox');
        inboxButton.addEventListener('click', () => {
            let localTask = JSON.parse(localStorage.getItem('Inbox'));
            task.clearChild();
            list.displayList(localTask, 'Inbox');
            task.addButton(form, 'Inbox');
            task.resetFilter();
            list.listButton('Inbox');
            task.addFilterButton('Inbox')

        });

        this.addFilterButton('Inbox');

    }

}

export default task;