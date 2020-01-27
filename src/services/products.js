import { 
  db,
  createDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  searchDocs
} from './firebase'

const products = db.collection(`products`)

const createProduct = ({name, category, description, price}) =>   
  createDoc(products, {name, category, description, price})

const getProducts = () => getDocs(products)

const getProduct = id => getDoc(products, id)

const updateProduct = ({id, name, category, description, price}) => 
  updateDoc(products, id, {name, category, description, price})

const deleteProduct = id => deleteDoc(products, id)

const searchProducts = ({name, category}) => searchDocs(products, {name, category})

export {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  searchProducts
}


