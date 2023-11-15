from dotenv import load_dotenv
import os
from pathlib import Path


SRC_PATH = Path(__file__).resolve().parent.parent

load_dotenv(SRC_PATH / '../.env')

api_key = os.getenv('ACCESS_KEY')
api_url = os.getenv('URL_API')
