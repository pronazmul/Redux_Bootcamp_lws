import { loaded } from "../actions";

const fetchTodos = async (dispatch) => {
try{
    const response = await fetch("http://103.107.184.159:5001/api/v1/todos");
    const todos = await response.json();
    dispatch(loaded(todos.data));
}catch(error){
console.log(error)
}
};

export default fetchTodos;
