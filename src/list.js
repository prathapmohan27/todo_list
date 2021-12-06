import { format } from 'date-fns'

class list {

    static createTaskList(name, date) {

        let div = document.createElement('div');
        div.classList.add('item');
        div.setAttribute('data-name', name);

        let checkBox = document.createElement('input');
        checkBox.classList.add('check');
        checkBox.type = "checkbox";
        checkBox.setAttribute('data-name', name);
        div.appendChild(checkBox);

        let taskName = document.createElement('p')
        taskName.classList.add('taskP')
        taskName.textContent = name;
        div.appendChild(taskName);

        let taskDate = document.createElement('p')
        taskName.classList.add('taskP');
        taskDate.textContent = format(new Date(date), 'dd/MM/yyyy');
        div.appendChild(taskDate);

        let removeButton = document.createElement('button');
        removeButton.classList.add('remove');
        removeButton.setAttribute('data-name', name);
        removeButton.innerHTML = '<i class="material-icons">delete</i> '
        div.appendChild(removeButton);

        return div;

    }

    static removeTask(r, head) {
        let getLocalTask = JSON.parse(localStorage.getItem(head));
        let container = document.querySelector('.taskContainer');
        let item = document.querySelectorAll('.item');
        item.forEach((div) => {
            if (div.dataset.name === r.dataset.name) {
                let localIndex = getLocalTask.findIndex(x => x.name === div.dataset.name)
                container.removeChild(div);
                getLocalTask.splice(localIndex, 1);
                localStorage.setItem(head, JSON.stringify(getLocalTask));
            }
        })

    }

    static changeTitle(heading) {
        let title = document.querySelector('.title');
        title.textContent = heading;
    }


    static listButton(head) {

        let check = document.querySelectorAll('.check');
        let removeButton = document.querySelectorAll('.remove');

        removeButton.forEach(r => {
            r.onclick = () => {
                list.removeTask(r, head);
            }
        });

        check.forEach(c => {
            c.onclick = () => {
                list.removeTask(c, head);
            }
        });
    }



    static displayList(taskArray, heading = 'Inbox') {

        this.changeTitle(heading);

        let container = document.querySelector('.taskContainer');

        let name, date;

        for (let i = container.childElementCount - 1; i <= taskArray.length - 1; i++) {
            for (let j in taskArray[i]) {
                if (j === 'name') {
                    name = taskArray[i][j]
                }
                if (j == 'date') {
                    date = taskArray[i][j]
                }
            }
            container.appendChild(this.createTaskList(name, date));

        }

        this.listButton(heading);

    }

}

export default list;