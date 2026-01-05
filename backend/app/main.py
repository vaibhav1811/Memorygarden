from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import database

app = FastAPI(title="Memory Garden API")

# CORS setup
origins = [
    "http://localhost:5173",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Memory Garden API"}

@app.get("/api/health")
async def health_check():
    # Simple check to see if DB is responsive
    try:
        await database.command("ping")
        return {"status": "ok", "database": "connected"}
    except Exception as e:
        return {"status": "error", "database": str(e)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
