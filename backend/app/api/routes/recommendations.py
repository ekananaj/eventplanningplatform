from fastapi import APIRouter
from app.utils.guest_recommender import recommend_guests

recommendations_router = APIRouter()

@recommendations_router.get("/")
async def get_recommendations():
    return {"recommendations": recommend_guests()}
