
import todoUi from "./todo_ui";

const render=(function(){
    let content=document.querySelector('.content');
    content.appendChild(todoUi.headerElement())

    content.appendChild(todoUi.sideBarElement());

    content.appendChild(todoUi.storage());
})();