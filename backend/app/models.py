from pydantic import BaseModel
from typing import List, Optional


class MenuItem(BaseModel):
    id: int
    name: str
    price: float
    category: str
    image: str = None
    sideDishes: Optional[List[dict]] = None

class Category(BaseModel):
    name: str
    image: str

class CartItem(BaseModel):
    id: int
    name: str
    price: float
    image: str = None
    quantity: int
    options: Optional[List[dict]] = None

class Order(BaseModel):
    id: int
    items: List[CartItem]
    total: float
