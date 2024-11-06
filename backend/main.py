from fastapi import FastAPI
from app.api.routes.events import events_router
from app.api.routes.recommendations import recommendations_router

app = FastAPI()

app.include_router(events_router, prefix="/api/events")
app.include_router(recommendations_router, prefix="/api/recommendations")
