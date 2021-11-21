/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/todo_ui.js":
/*!************************!*\
  !*** ./src/todo_ui.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todo_ui);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo_ui */ "./src/todo_ui.js");



const render=(function(){
    let content=document.querySelector('.content');
    content.appendChild(_todo_ui__WEBPACK_IMPORTED_MODULE_0__["default"].headerElement())

    content.appendChild(_todo_ui__WEBPACK_IMPORTED_MODULE_0__["default"].sideBarElement());

    content.appendChild(_todo_ui__WEBPACK_IMPORTED_MODULE_0__["default"].storage());
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxpRUFBZSxPQUFPOzs7Ozs7VUN4RHRCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTCtCOztBQUUvQjtBQUNBO0FBQ0Esd0JBQXdCLDhEQUFvQjs7QUFFNUMsd0JBQXdCLCtEQUFxQjs7QUFFN0Msd0JBQXdCLHdEQUFjO0FBQ3RDLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy90b2RvX3VpLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIHRvZG9fdWl7XG5cbiAgICAgc3RhdGljIGhlYWRlckVsZW1lbnQoKXtcbiAgICAgICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5cbiAgICAgICAgbGV0IGRpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IGhlYWRlckJ1dHRvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBoZWFkZXJCdXR0b24uaW5uZXJIVE1MPSc8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+bGlzdDwvaT4nO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGVyQnV0dG9uKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICAgICAgbGV0IGgxPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBoMS5pbm5lckhUTUw9JzxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5kb25lX2FsbDwvaT4gVG9kbyBMaXN0J1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gICAgICAgIHJldHVybiBoZWFkZXI7XG4gICAgfVxuXG4gICAgc3RhdGljIHNpZGVCYXJFbGVtZW50KCl7XG4gICAgICAgIGxldCBzaWRlQmFyID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2lkZUJhci5jbGFzc0xpc3QuYWRkKCdzaWRlQmFyJyk7XG5cbiAgICAgICAgbGV0IGluYm94PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbmJveC5jbGFzc0xpc3QuYWRkKCdzaWRlQmFyQnV0dG9uJyk7XG4gICAgICAgIGluYm94LmlubmVySFRNTD0nPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmluYm94PC9pPiBpbmJveCc7XG4gICAgICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQoaW5ib3gpO1xuXG4gICAgICAgIGxldCBoMz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBoMy50ZXh0Q29udGVudD0nUHJvamVjdHMnO1xuICAgICAgICBzaWRlQmFyLmFwcGVuZENoaWxkKGgzKTtcblxuICAgICAgICBsZXQgYWRkUHJvamVjdHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFkZFByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ3NpZGVCYXJCdXR0b24nKVxuICAgICAgICBhZGRQcm9qZWN0cy5pbm5lckhUTUw9JzxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5hZGQ8L2k+IGNyZWF0ZSBQcm9qZWN0cyc7XG4gICAgICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdHMpO1xuXG4gICAgICAgIHJldHVybiBzaWRlQmFyO1xuXG4gICAgfVxuXG4gICAgc3RhdGljIHN0b3JhZ2UoKXtcbiAgICAgICAgbGV0IHN0b3JhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3RvcmFnZS5jbGFzc0xpc3QuYWRkKCdzdG9yYWdlJyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgYWRkVGFzaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWRkVGFzay5jbGFzc0xpc3QuYWRkKCdhZGRUYXNrJyk7XG4gICAgICAgIGFkZFRhc2suaW5uZXJIVE1MPSc8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+YWRkPC9pPiBBZGQgVGFzayc7XG4gICAgICAgIHN0b3JhZ2UuYXBwZW5kQ2hpbGQoYWRkVGFzayk7XG5cbiAgICAgICAgcmV0dXJuIHN0b3JhZ2U7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvZG9fdWk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcbmltcG9ydCB0b2RvVWkgZnJvbSBcIi4vdG9kb191aVwiO1xuXG5jb25zdCByZW5kZXI9KGZ1bmN0aW9uKCl7XG4gICAgbGV0IGNvbnRlbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvZG9VaS5oZWFkZXJFbGVtZW50KCkpXG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvZG9VaS5zaWRlQmFyRWxlbWVudCgpKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb1VpLnN0b3JhZ2UoKSk7XG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==