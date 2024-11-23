from fastapi import APIRouter, Depends, HTTPException
from data.side_dishes import sideDishes
from models import SideDish

router = APIRouter()



@router.get("/api/side-dishes", response_model=list[SideDish])
async def get_side_dishes():
    return sideDishes



