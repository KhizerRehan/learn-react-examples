import React, {useReducer, useContext, useEffect, useRef} from 'react';

function appReducer(state, action) {

  switch(action.type) {
    case 'add':
      return [
        ...state,
        {
          id:Date.now(),
          completed: false,
          text:''
        }
      ]
      case 'delete':
       return state.filter(item => item.id !== action.payload)
          case 'completed':
       return state.map(item => {
         if(item.id === action.payload){
           return {
             ...item,
             completed: !item.completed
           }
         }
         return item;
       })

       case 'reset':
       return [
         ...state,
         ...action.payload
       ]
    default:
    return state;
  }
};

const Context = React.createContext();

function useEffectOnce(cb){
  console.log('useEffectOnce');
  const didRun = useRef(false);
  console.log(didRun)
  useEffect(()=>{
  if(!didRun.current) {
      cb();
      didRun.current = true;
    }
  }, [])
}

export default function TodoApp() {
const [state, dispatch] = useReducer(appReducer, []);

useEffectOnce(()=>{
  console.log('Callback')
  const rawData = localStorage.getItem('data');
  console.log("RawData", rawData)
  dispatch({
    type: 'reset',
    payload: rawData ? JSON.parse(rawData) : []
  })
});

useEffect(()=>{
 localStorage.setItem('data', JSON.stringify(state))
},[state])

  return (
    <React.Fragment>
      <Context.Provider value={dispatch}>
        <button onClick={()=>{
            console.log("Todo Clicked...");
            dispatch({
              type: 'add'
            })
          }}> Add Todo </button>
        
        <ul>
        <TodoList items={state}/>
        </ul>
      </Context.Provider>
    </React.Fragment>
  );
}

function TodoList({items}) {
   return (
     items.map((item)=> (
       <TodoItem key={item.id} {...item} />
     ))
   );
};


function TodoItem({id, text, completed}) {
  const dispatch = useContext(Context);
  return (
    <div>
     <input type="checkbox" checked={completed} onChange={()=>{
       dispatch({
         type:'completed',
         payload: id
       })
     }} />
      <input type="text" defaultValue={text} />
      <button onClick={()=>{
        dispatch({
          type:'delete',
          payload: id
        })
      }}> Delete</button>
      <br />
      <br />
    </div>
  );
}