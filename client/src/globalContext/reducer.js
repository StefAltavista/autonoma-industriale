export default function globalReducer(state, action) {
    switch (action.type) {
        case "LOG_IN":
            console.log("reducer", action);
            return {
                ...state,
                userAccessToken: action.payload,
            };
        case "LOG_OUT":
            return {};

        default:
            return { ...state };
    }
}
