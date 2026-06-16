from pydantic import BaseModel

class MenuItem(BaseModel):
    name: str
    price: float
    description: str | None = None
