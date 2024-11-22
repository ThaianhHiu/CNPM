from fastapi import APIRouter, HTTPException
from data.menu_items import menu_items
from data.categories import categories
from models import MenuItem, Category

router = APIRouter()

@router.get("/api/menu", response_model=list[MenuItem])
async def get_menu():
    return menu_items

@router.get("/api/categories", response_model=list[Category])
async def get_categories():
    return categories

@router.get("/api/menu/{item_id}", response_model=MenuItem)
async def get_menu_item(item_id: int):
    item = next((item for item in menu_items if item.id == item_id), None)
    if item:
        return item
    raise HTTPException(status_code=404, detail="Item not found")
