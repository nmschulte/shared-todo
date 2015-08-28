'use strict';

// load the application's RequireJS configuration module first
require(['config'], function onLoadRequireJSConfig() {
    // load the application
    require(['shared-todo'], function onLoadSharedTodo(SharedTodo) {
        var sharedTodoConfig = {},
            sharedTodo = new SharedTodo(sharedTodoConfig);

        // just stuff it in the DOM
        document.body.appendChild(sharedTodo.render().el);
    });
});
