from pydantic import BaseSettings

class Settings(BaseSettings):
    app_name: str = 'FastAPI Menu Service'
    debug: bool = True

    class Config:
        env_file = '.env'

settings = Settings()
