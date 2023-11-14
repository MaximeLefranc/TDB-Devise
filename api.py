from datetime import date, timedelta
from pprint import pprint
from typing import Literal

import requests

from utils.load_env import api_url, api_key


def get_rates(currencies, days=30):
    """Get rates from API with currencies and days given

    Args:
        currencies (list[str]): list of currencies
        days (int, optional): number of days for result history. Defaults to 30.

    Returns:
        bool, bool | list, dict : 1. If the request fails - 2. If the request is successful

    """
    end_date = date.today()
    start_date = end_date - timedelta(days)

    source = 'USD'

    r = requests.get(f'{api_url}/timeframe?access_key={api_key}&start_date={start_date}&end_date={end_date}&currencies={','.join(currencies)}')
    if not r and not r.json():
        return False, False

    api_rates = r.json().get('quotes')
    all_rates = {source + currency: [] for currency in currencies}
    all_days = api_rates.keys()

    for each_day in all_days:
        [all_rates[currency].append(rate) for currency, rate in api_rates.get(each_day).items()]

    return all_days, all_rates


if __name__ == '__main__':
    days, rates = get_rates(['EUR', 'COP'])
    print(days)
    pprint(rates)
