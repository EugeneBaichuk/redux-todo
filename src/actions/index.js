const setTodoList = () => {
    return {
        type: 'TODOLIST_SET',
    }
}

const onDelete = id => {
    return{
        type: 'TODOLIST_DELETE',
        payload: id
    }
}

const onToggle = id => {
    return{
        type: 'TODOLIST_TOGGLE',
        payload: id
    }
}

const onImportant = id => {
    return{
        type: 'TODOLIST_IMPORTANT',
        payload: id
    }
}

const onChangeVal = (val) => {
    return{
        type: 'TODOLIST_CHANGEVAL',
        payload: val
    }
}

const onTaskAdd = () => {
    return{
        type: 'TODOLIST_ON_TASK_ADD',
    }
}

const changeSearchValue = (val) => {
    return{
        type: 'TODOLIST_ON_CHANGE_SEARCH_VAL',
        payload: val
    }
}

const clearForm = () => {
    return{
        type: 'TODOLIST_CLEAR_FORM',
    }
}

export {setTodoList, onDelete, onToggle, onImportant, onChangeVal, onTaskAdd, changeSearchValue, clearForm};