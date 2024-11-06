from fastapi import APIRouter

events_router = APIRouter()

@events_router.get("/")
async def get_events():
    return {"events": ["Event 1", "Event 2", "Event 3"]}
