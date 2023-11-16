import pprint
from django.shortcuts import render, redirect, HttpResponse

import api

from utils.accepted_currencies import acceptedCurrencies


def redirect_index(request):
    return redirect('home', days_range=30, currencies='COP')


def dashboard(request, days_range=30, currencies='COP'):
    cleaned_currencies = [currency for currency in currencies.split(',') if currency in acceptedCurrencies]
    print(cleaned_currencies)
    if len(cleaned_currencies) == 0:
        # TODO error page for invalid currencies
        return redirect_index(request)
    days, rates = api.get_rates(cleaned_currencies, days_range)
    pprint.pprint(rates)
    if not days and not rates:
        # TODO error500 page
        return HttpResponse(status=500)
    page_label = {7: 'Semaine', 30: 'Mois', 365: 'Année'}.get(days_range, 'Personnalisé')
    return render(request, 'devise/index.html', {
        'data': rates,
        'days_labels': days,
        'currencies': ','.join(cleaned_currencies),
        'page_label': page_label,
    })
