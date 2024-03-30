import ProductContextData from "./ProductContext"
import AddProductPage from "./page/AddProductPage"
import ProductListingPage from "./page/ProductListingPage"
import EditProductPage from "./page/EditProductPage"
import{
  BrowserRouter as Router, Routes, Route, Link
} from 'react-router-dom'

export default function App() {
  return <div className = "container">
    <ProductContextData>
      <Router>
        <Routes>
          <Route path = "/" element={<ProductListingPage/>} />
          <Route path = "/add" element = {<AddProductPage/>}/>
          <Route path = "/edit/:productId" element = {<EditProductPage/>}/>
        </Routes>
      </Router>
    </ProductContextData>
  </div>
}