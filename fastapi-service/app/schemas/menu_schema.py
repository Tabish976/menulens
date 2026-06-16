from pydantic import BaseModel

class MenuItem(BaseModel):
    name: str
    price: float | None = None
    description: str | None = None
