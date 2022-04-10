// Named export
// Default export - No name.
const message = 'Some message from myModule.js'

const name = 'Dhamo'

const location = 'Thiruverkadu'

const getGreeting = (name) => {
    return `Welcome to the GraphQL Course ${name}`
}

export { message, name, getGreeting, location as default } 

