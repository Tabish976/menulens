## Menulens

## Project structure 
menu-ai-app/
│
├── frontend/                    # React/Vite frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Camera/
│   │   │   ├── MenuUpload/
│   │   │   ├── Results/
│   │   │   └── Shared/
│   │   │
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Market.jsx
│   │   │   └── Portfolio.jsx
│   │   │
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   ├── authService.js
│   │   │   └── menuService.js
│   │   │
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── utils/
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/                     # Node.js Backend
│   ├── middleware/
│   │   └── auth.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── ScanHistory.js
│   │   └── MenuResult.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── menuController.js
│   │   └── userController.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   └── menuRoutes.js
│   │
│   ├── services/
│   │   ├── pythonService.js
│   │   └── aiService.js
│   │
│   ├── uploads/                 # uploaded menu images
│   ├── config/
│   │   └── db.js
│   │
│   ├── server.js
│   └── package.json
│
├── ml-python/                   # OCR + LLM Pipeline
│   ├── app/
│   │   ├── ocr/
│   │   │   ├── image_preprocess.py
│   │   │   └── tesseract_ocr.py
│   │   │
│   │   ├── llm/
│   │   │   ├── ollama_client.py
│   │   │   └── prompt_templates.py
│   │   │
│   │   ├── parser/
│   │   │   └── menu_parser.py
│   │   │
│   │   ├── schemas/
│   │   │   └── menu_schema.py
│   │   │
│   │   └── main.py
│   │
│   ├── tests/
│   ├── requirements.txt
│   └── Dockerfile
│
├── fastapi-service/             # API between Node and Python
│   ├── app/
│   │   ├── routes/
│   │   │   └── menu.py
│   │   │
│   │   ├── services/
│   │   │   ├── ocr_service.py
│   │   │   └── llm_service.py
│   │   │
│   │   └── main.py
│   │
│   ├── requirements.txt
│   └── Dockerfile
│
├── docker/
│   ├── backend.Dockerfile
│   ├── frontend.Dockerfile
│   ├── fastapi.Dockerfile
│   └── docker-compose.yml
│
├── docs/
│   ├── architecture.md
│   ├── api-spec.md
│   └── roadmap.md
│
├── .env
├── .gitignore
└── README.md


## project working flow
User Uploads Menu Image
        │
        ▼
React Frontend
        │
        ▼
Node.js Backend
        │
        ▼
FastAPI Service
        │
 ┌──────┴──────┐
 ▼             ▼
OCR       Ollama LLM
(Tesseract)  (Menu Analysis)
 └──────┬──────┘
        ▼
 Structured JSON
        ▼
Node.js Backend
        ▼
MongoDB
        ▼
React Frontend
