

const addItems = (state = [], action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                return state.map((x) =>
                    x.id = product.id ? { ...x, qty: x.qty + 1 } : x);

            }
            else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }   
            break;
        case "DELITEM":
            const exist1 = state.find((x) => x.id === product.id);

            if (exist.qty === 1) {
                return state.filter((x) => x.id !== exist1.id);

            }
            else {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty - 1 } : x);
            }

            break;

        case "REMOVEITEM":
            return state = state.filter((item) => {
                return item.id !== action.payload.id
            })

        default: return state;
            break;
    }
}
export default addItems;

