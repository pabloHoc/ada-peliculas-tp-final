import { 
  db,
  createDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  searchDocs,
  findDoc
} from './firebase'
import { getUserById } from './users'

const orders = db.collection('orders')
const products = db.collection('products')

const createOrder = userId => createDoc(orders, {
  userId,
  status: 'active',
  products: [],
  date: new Date()
})

const getOrder = orderId => getDoc(orders, orderId)

const getOrders = () => getDocs(orders)

const getOrdersByUserId = async userId => searchDocs(orders, { userId })

const getCart = userId => 
  findDoc(orders, { userId, status: 'active' })
  .then(order => {
    if (order)
      return Promise.resolve(order)
    else
      return createOrder(userId)
  })

const getOrderProducts = async order => {
  try {
    const productList = await getDocs(products)
    return order.products.map(orderProduct => {
      const productData = productList.find(product => product.id === orderProduct.productId)
      return {
        id: productData.id,
        name: productData.name,
        qty: orderProduct.qty,
        price: productData.price
      }
    })
  } catch (error) {
    console.log(error)
  }
}

const getCartProductList = userId => 
  getCart(userId)
  .then(order => getOrderProducts(order))

const updateOrder = (id, data) => updateDoc(orders, id, data)

const addProduct = (userId, productId, qty) => 
  getCart(userId)
  .then(order =>
    updateOrder(order.id, { 
      products: order.products.find(p => p.productId === productId) ? 
        order.products.map(p => 
          p.productId !== productId ? 
          p : 
          { productId, qty: p.qty + Number(qty) }) :
        [...order.products, { productId, qty: Number(qty)}]  
    })
  )

const editProductQty = (userId, productId, qty) => 
  getCart(userId)
  .then(order => 
    updateOrder(order.id, { 
      products: order
        .products
        .map(product => product.productId !== productId ? product : { productId, qty })
    })
  )

const removeProduct = (userId, productId) => 
  getCart(userId)
  .then(order => 
    updateOrder(order.id, { 
      products: order.products.filter(product => product.productId !== productId)
    })
  )

const closeOrder = async userId => {
  const order = await getCart(userId)
  const products = await getCartProductList(userId)
  const user = await getUserById(userId)

  const productList = order.products.map(product => {
    const productData = products.find(p => p.id === product.productId)
    return {
      productId: product.productId,
      name: productData.name,
      qty: product.qty,
      price: productData.price
    }
  })
  const total = productList.reduce((acc, curr) => acc + curr.price * curr.qty, 0) 

  return updateOrder(order.id, { 
    status: 'finished',
    userEmail: user.email,
    products: productList,
    total: total,
    date: new Date().toString()
  })
} 

const deleteOrder = orderId => deleteDoc(orders, orderId)

export {
  getOrder,
  getOrders,
  getOrdersByUserId,
  getCart,
  getCartProductList,
  addProduct,
  editProductQty,
  removeProduct,
  closeOrder,
  deleteOrder
}