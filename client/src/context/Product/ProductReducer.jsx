export const reducer = (globalState, action) => {

    switch (action.type) {
      
      case "GET_MUGS":
        return {
          ...globalState,
          mugs: action.payload,  // <-- Corregir aquí
          mug: [
            {
              id_: "",
              name: "",
              price: "",
              image: ""
            }
          ]
        };
  
      case "GET_MUG":
        return {
          ...globalState,
          mug: [action.payload]
        };
        
      default:
        return globalState;
    }
  };
  
  export default reducer;
  