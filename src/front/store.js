export const initialStore=()=>{
  return{
    message: null,
    user: localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')) : null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'logout': 
    
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    return {
        ...store,
        user: null
      }
    case 'getUserInfo':

      return {
        ...store,
        user: action.payload
      }
    case 'set_hello':
      return {
        ...store,
        message: action.payload
      };
      
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }    
}