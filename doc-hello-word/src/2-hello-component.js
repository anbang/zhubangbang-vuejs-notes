let pageData={
    groceryList: [
        { text: 'Vegetables' },
        { text: 'Cheese' },
        { text: 'Whatever else humans are supposed to eat' }
    ]
};

let pageUtility={};

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

let vue=new Vue({
    el:"#App",
    data:pageData,
    methods:pageUtility
});