
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/AppRouters'

import store from "./store";
import { Provider } from "react-redux";

function App() {

  return (
   <Provider store={store}>
    <RouterProvider router={routes} />
   </Provider>
  )
}

export default App
