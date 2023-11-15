from django.shortcuts import render

import api


def dashboard(request, days_range=30, currencies='EUR'):
    currencies = currencies.split(',')
    days, rates = api.get_rates(currencies, days_range)
    print(rates.items())  # type: ignore
    return render(request, 'devise/index.html', {
        'data': rates,
        'days_labels': days,
        'currencies': currencies,
    })
