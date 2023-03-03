import {useState, useReducer, useEffect} from 'react';


const Effect = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(true)
  const [counter, setCounter] = useState(0);
  const initialState = [
    {
      id:Date.now(), 
      name:'Cristiano Ronaldo', 
      email:'CristianoRonaldo@gmail.com'
    }
  ];

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return {counter: setCounter(counter + 1)};
      case "decrement":
        return {counter: setCounter(counter - 1)};
      case "add":
        return [...state, action.payload]
      default:
        break;
    }
  } 
  const [state, dispatch] = useReducer(reducer, initialState);
  const addContact = (e) =>{
    e.preventDefault();
    let contact = {
      id:Date.now(), 
      name,
      email
    }
    if(!contact.name && !contact.email){
      console.log("over and again")
      setError(true)
    }
    dispatch({type:"add", payload: contact})
    setEmail("") 
    setName("") 
    setError(false)
  }
      
  useEffect(()=>{
    console.log("first", state)
  }, [state]);

  const addButton = e => {
    e.preventDefault();
  }

  return (
    <div>
      <h1 className="pb-2">useReducer Hooks</h1>
      <form onSubmit={addButton}>
      <h2>{counter}</h2>
      <button className="bg-orange-500 hover:bg-orange-900 p-2 mx-5 text-white rounded-lg" onClick={()=> dispatch({type: 'increment'})}>increment</button>
      <button className="bg-emerald-500 hover:bg-emerald-900 p-2 mx-5 text-white rounded-lg" onClick={()=> dispatch({type: 'decrement'})}>Decrement</button>

      </form>
      {/* <button className="bg-orange-500 hover:bg-orange-900 p-2 mx-5 text-white rounded-lg" onClick={()=> dispatch(action.type: 'increment')}>increment</button> */}
      <form class="flex justify-center items-center w-1/4 p-4 bg-red-300 rounded-lg mt-4 mx-5" onSubmit={addContact}>
        <label class="block">
          <span class="block text-sm font-medium text-slate-700">Username</span>

          <input 
            type="text" 
            placeholder="tbone" 
            class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "
            onChange={e=> setName(e.target.value)} 
            value={name}
            />
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Email
          </span>
          <input 
            type="email" 
            name="email" 
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" 
            placeholder="you@example.com"
            value={email}
            onChange={e=> setEmail(e.target.value)} 
          />
          <button 
            onSubmit={addContact}
            class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-2 mx-5 text-white rounded-lg mt-6">
            Save changes
          </button>
        </label>

      </form>

      <div>
           
        {
          error ? 
            <div>NothInG DeY hERe</div>
            :
            state.map(contact => {
              if(contact.name && contact.email){
                return(
  
                <ul>
                  <li key={contact.id} className="flex justify-center bg-gray-500 text-white p-2 mx-5 rounded-lg w-1/4 mt-4">
                    <span className="mx-4">
                    {contact.name}
                    </span>
                    {contact.email}
                  </li>
                </ul>
                )
              }
              else{
                return " ";
              }

            }
          )
        }
      </div>
    </div>
  )
}

export default Effect;
