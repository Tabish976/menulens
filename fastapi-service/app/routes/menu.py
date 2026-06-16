from fastapi import APIRouter

router = APIRouter()

@router.post('/menu')
def parse_menu():
    return {'menu': []}
