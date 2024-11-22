from fastapi import APIRouter
from models import CartItem

router = APIRouter()
cart = []

@router.get("/api/cart", response_model=list[CartItem])
async def get_cart():
    return cart

@router.post("/api/cart", response_model=list[CartItem])
async def add_to_cart(item: CartItem):
    cart.append(item)
    return cart

@router.put("/api/cart", response_model=list[CartItem])
async def update_cart(updated_cart: list[CartItem]):
    global cart
    cart = updated_cart
    return cart

@router.delete("/api/cart")
async def clear_cart():
    global cart
    cart = []
    return {"message": "Cart cleared"}
