import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CreateProduct  from './pages/create/CreateProduct'
import EditProduct from './pages/edit/EditProduct'
import SingleProduct from './pages/single/SingleProduct'
import HomePage from './pages/home/Home'
   function App(){
    return (
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/create' element={<CreateProduct/>} />
      <Route path='/edit' element={<EditProduct/>} />
      <Route path='/product/:id' element={<SingleProduct />} />
      </Routes>
      </BrowserRouter>
    )
   }
   export default App