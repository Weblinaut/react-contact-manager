const defaultState = {
    contacts: []
}
export default (state=defaultState, action={}) => {
    switch (action.type) {
        /*const defaultState = {
            contacts: [],
            contact: {name:{}},
            loading: false,
            errors: {} }*/
        case 'FETCH_CONTACTS_FULFILLED': {
            return {
                ...state,
                contacts: action.payload.data.data || action.payload.data
            }
        }
        case 'NEW_CONTACT': {
            return {
                ...state,
                contact: {name:{}}
            }
        }
        case 'SAVE_CONTACT_PENDING': {
            return {
                ...state,
                loading: true
            }
        }
        case 'SAVE_CONTACT_FULFILLED': {
            return {
                ...state,
                contacts: [...state.contacts, action.payload.data],
                errors: {},
                loading: false
            }
        }
        case 'SAVE_CONTACT_REJECTED': {
            const data = action.payload.response.data;
            const { "name.first":first, "name.last":last, phone, email
                } = data.errors;
            const errors = { global: data.message, name: { first,last },  phone, email };
            return {
                ...state,
                errors: errors,
                loading: false
            }
        }
            "name.first"

        default:
        return state;
    }
}