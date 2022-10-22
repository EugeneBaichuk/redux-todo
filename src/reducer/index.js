const initialState = {
    todoList: [ 
    { text: "Task 1", important: false, done: false, id: 1 },
    { text: "Task 2", important: false, done: false, id: 2 },
    { text: "Task 3", important: false, done: false, id: 3 }
],
count: 100, 
searchValue: "",
taskFilterId: 'all_tasks',
taskValue: '',
done: 0,
important: 0,
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'TODOLIST_SET':
            return {...state};
        case 'TODOLIST_DELETE':
            return onDelete(state, action)
        case 'TODOLIST_TOGGLE': 
            return onToggle(state,action, 'done')
        case 'TODOLIST_IMPORTANT':
            return onToggle(state,action, 'important')
        case 'TODOLIST_CHANGEVAL':
            return onChangeVal(state,action)
        case 'TODOLIST_ON_TASK_ADD':
            return onTaskAdd(state)
        case 'TODOLIST_ON_CHANGE_SEARCH_VAL':
            return changeSearchValue(state,action)
        case 'TODOLIST_CLEAR_FORM':
            return clearForm(state);
        case 'TODOLIST_ON_TASK_FILTER':
            return onTaskFilter(state,action)   
        default:
            return state
    }
}

const onDelete = (state, action) => {
    const todoDeleting = state.todoList.filter(todo => (todo.id !== action.payload))
    let num1 = 0;
    let num2 = 0;
    todoDeleting.map(todo => (todo.important && (num1 += 1)));
    todoDeleting.map(todo => (todo.done && (num2 += 1)));
    return {...state, count: state.todoList.length, todoList: todoDeleting, done: num2, important: num1};
}

const onToggle = (state, action, param) => {
    const todoElements = state.todoList.map(todo => {
    if (todo.id === action.payload) {
        todo[param] = !todo[param];
    }
        return todo;
    })
    let num = 0;
    todoElements.map(todo => (todo[param] && (num += 1)));
    return {...state, todoList: todoElements, [param]: num};
}

const onChangeVal = (state, action) => {
    return {...state, taskValue: action.payload}
}

const onTaskAdd = (state) => {
    return {...state, 
        todoList: [...state.todoList, {
        text: state.taskValue, 
        important: false, 
        done: false, 
        id: state.todoList.length + 1
    }]};
}

const clearForm = (state) => {
    return {...state, taskValue:''};
}

const changeSearchValue = (state,action) => {
    return {...state, searchValue: action.payload}
}

const onTaskFilter = (state, action) => {
    console.log(state.taskFilterId);
    return {...state, taskFilterId: action.payload}
}

export default reducer;