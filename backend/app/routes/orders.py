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
    order.id = int(dt.datetime.now().strftime("%Y%m%d%H%M%S"))
    orders.append(order)
    os.makedirs("backend/app/data/cartdata", exist_ok=True)
    with open(f"backend/app/data/cartdata/order_{order.id}.txt", "w") as f:
        json.dump(order.model_dump(), f, indent=4)
    cart = []  # Clear the cart after placing an order
    return order
