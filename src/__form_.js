// 1. use form tag and onSubmit handler with event (e) 
// Form e access e.target.[ name of the input field].value
// 2. Control element: use individual field state for each field
// 3. Control element: one object in a state holding all the input fields value
// 4. uncontrolled element: useRef to create a reference to the element and access value by using like: nameRef.current.value
// 5. use hook to handle states and submit and error. example react hook form