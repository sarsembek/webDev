from django.shortcuts import render
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from .models import Company, Vacancy


def company_list(request):
    companies = Company.objects.all()
    data = {'companies': list(companies.values())}
    return JsonResponse(data)


def company_detail(request, id):
    company = get_object_or_404(Company, id=id)
    data = {'company': {
        'name': company.name,
        'description': company.description,
        'city': company.city,
        'address': company.address,
        'vacancies': list(company.vacancies.all().values())
    }}
    return JsonResponse(data)


def company_vacancies(request, id):
    company = get_object_or_404(Company, id=id)
    vacancies = company.vacancies.all()
    data = {'vacancies': list(vacancies.values())}
    return JsonResponse(data)


def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    data = {'vacancies': list(vacancies.values())}
    return JsonResponse(data)


def vacancy_detail(request, id):
    vacancy = get_object_or_404(Vacancy, id=id)
    data = {'vacancy': {
        'name': vacancy.name,
        'description': vacancy.description,
        'salary': vacancy.salary,
        'company': vacancy.company.name
    }}
    return JsonResponse(data)


def vacancy_top_ten(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    data = {'vacancies': list(vacancies.values())}
    return JsonResponse(data)

