from django.contrib import admin

# Register your models here.
from .models import Company, Vacancy


admin.site.register(Company)
admin.site.register(Vacancy)