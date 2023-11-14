import os
from pathlib import Path

from dotenv import load_dotenv

load_dotenv(Path(__file__).resolve().parent.parent / '.env')

api_key = os.getenv('ACCESS_KEY')
api_url = os.getenv('URL_API')
