import { createSlice } from "@reduxjs/toolkit";

export const  taskSlice = createSlice({
    name:'task',
    initialState:[],
    reducers: {
        ajouter:(state, actions)=>{
            
            //création du nouveau state
            const newState = [...state,actions.payload];
            //mise à jour du state de task
            return newState;

        },
        modifier:(state,actions)=>{
            const id = actions.payload;

            // changement d'état des taches
         return  state.map((item) =>
                        item.id === id ? { ...item, completed: !item.completed } : item
                    )
        },
        supprimer:(state,actions)=>{
            console.log('supprimer une tâche',actions.payload)
            const newState = state.filter(item=>item.id != actions.payload);
            return newState;
        }
    }
})

export const {ajouter,modifier,supprimer} = taskSlice.actions
export default taskSlice.reducer;