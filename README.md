# Memory Garden

## Project Structure
- **Frontend**: React + Vite (located in `/frontend`)
- **Backend**: FastAPI + Python (located in `/backend`)

## How to Run Locally

### 1. Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
# Runs on http://localhost:8000
```

### 2. Frontend
```bash
cd frontend
npm install
npm run dev
# Runs on http://localhost:5173
```

## How to Deploy

### 1. Push Code
Push this entire repository to GitHub.

### 2. Render (Backend)
1.  Create a newly Web Service on [Render](https://render.com/).
2.  Connect your GitHub repository.
3.  **Build Command**: `pip install -r backend/requirements.txt`
4.  **Start Command**: `uvicorn backend.main:app --host 0.0.0.0 --port $PORT`
5.  *Alternatively, select the `render.yaml` file if prompted.*

### 3. Vercel (Frontend)
1.  Import project into [Vercel](https://vercel.com/).
2.  Select the `frontend` directory as the **Root Directory**.
3.  Deploy!
