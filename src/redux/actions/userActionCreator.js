export const toggleSignup = () => ({type: "TOGGLE_SIGNUP"})

export const handleLoginFormChange = (e) => ({
    type: "LOGIN_FORM_CHANGE",
    payload: {name: e.target.name, value: e.target.value}
})
// take e, create a payload has key of name = e.target.name (can resolve itself to username, password, or password confirmation)
    // depends on where the change is happening
    // going to update teh value wherever the value of form is after the change
    // passing that payload over to userReducer
// change name & value input field for password, and putting it into payload
// reducer will update state