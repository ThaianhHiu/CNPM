from fastapi import APIRouter
import json
import os
from models import Order, CartItem
import datetime as dt

router = APIRouter()
cart = []
orders = []

@router.get("/api/orders", response_model=list[Order])
async def get_orders():
    return orders

@router.post("/api/orders", response_model=Order)
async def place_order(order: Order):
    global cart
    order.id = str(dt.datetime.now().strftime("%Y_%m_%d_%H%M%S"))
    orders.append(order)
    os.makedirs("data/cartdata", exist_ok=True)
    with open(f"data/cartdata/order_{order.id}.txt", "w") as f:
        json.dump(order.dict(), f, indent=4)
    cart = []  # Clear the cart after placing an order
    return order
