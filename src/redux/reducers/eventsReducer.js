const initialEventState = {
    events: []
}

const eventsReducer = (state=initialEventState, action) => {
    switch(action.type){
        default: 
            return {...state}
    }
}

// state.events.events
// go to events portion of state, then inside of it grab events key 

export default eventsReducer