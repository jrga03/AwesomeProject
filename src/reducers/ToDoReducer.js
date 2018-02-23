//
export const types = {
    ADD: 'ADD',
    REMOVE: 'REMOVE',
}

export const actionCreators = {
    add: (item) => {
        return {type: types.ADD, payload: item}
    },
    remove: (index) => {
        return {type: types.REMOVE, payload: index}
    }
}

const initialState = {
    todos: ['Click to remove', 'Ah yeah, learning React Native', 'Ship App'],
}

const ToDoReducer = (state = initialState, action) => {
    const {todos} = state
    const {type, payload} = action

    switch (type) {
        case types.ADD: {
            return {
                ...state,
                todos: [payload, ...todos],
            }
        }
        case type.REMOVE: {
            return {
                ...state,
                todos: todos.filter((todo, i) => i !== payload),
            }
        }
    }

    return state
}

export default ToDoReducer;