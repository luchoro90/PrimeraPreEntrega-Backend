import { Router } from "express";
import { cartManager } from "../index.js";

const cartsRouter = Router();

//nuevo carrito en http://localhost:8080/api/carts

cartsRouter.post('/', async (req, res) => {
    try {
        const response = await cartManager.newCart()
        res.json(response)
    } catch (error) {
        req.setEncoding('ERROR AL CREAR EL CARRITO')
    }
})

cartsRouter.get('/:cid', async(req, res) => {
    const { cid } = req.params
    try {
        const response = await cartManager.getCartProducts(cid)
        res.json(response)

    } catch(error) {
        req.setEncoding('ERROR AL ENVIAR LOS PRODUCTOS DEL CARRITO ')
    }
})

cartsRouter.post('/:cid/products/:pid', async (req, res)=>{
    const {cid, pid} = req.params;
    try {
        await cartManager.addProductToCart(cid,pid)
        res.send('PRODUCTO AGREGADO CORRECTAMENTE')
    } catch (error) {
        res.send('ERROR AL INTENTAR GUARDAR EN EL CARRITO')        
    }
})

export {cartsRouter}