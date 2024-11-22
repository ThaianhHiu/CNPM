from fastapi import APIRouter
from models import Order, CartItem

router = APIRouter()
cart = []
orders = []

@router.get("/api/orders", response_model=list[Order])
async def get_orders():
    return orders

@router.post("/api/orders", response_model=Order)
async def place_order(order: Order):
    global cart
    order.id = len(orders) + 1
    orders.append(order)
    cart = []  # Clear the cart after placing an order
    return order
