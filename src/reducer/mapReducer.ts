
export type State = {
    address: string;
    position: {latitude: number, longitude: number};
    loading: boolean;
    error: string | null;
};

export type Action =
    | { type: "SET_ADDRESS"; payload: string }
    | { type: "SET_POSITION"; payload: {latitude: number, longitude: number} }
    | { type: "SET_LOADING"; payload: boolean }
    | { type: "SET_ERROR"; payload: string | null };

export const mapReducer = (state: State, action: Action): State =>{
    switch (action.type) {
        case "SET_ADDRESS":
            return { ...state, address: action.payload };
        case "SET_POSITION":
            return { ...state, position: action.payload, loading: false, error: null };
        case "SET_LOADING":
            return { ...state, loading: action.payload };
        case "SET_ERROR":
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
}

