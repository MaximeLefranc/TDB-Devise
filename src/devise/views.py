from django.shortcuts import render, redirect

import api


def redirect_index(request):
    return redirect('home', days_range=30, currencies='COP')


def dashboard(request, days_range=30, currencies='EUR'):
    days, rates = api.get_rates(currencies.split(','), days_range)
    page_label = {7: 'Semaine', 30: 'Mois', 365: 'Année'}.get(days_range, 'Personnalisé')
    return render(request, 'devise/index.html', {
        'data': rates,
        'days_labels': days,
        'currencies': currencies,
        'page_label': page_label,
    })
