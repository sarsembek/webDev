from django.db import models
from django.urls import reverse

class Product(models.Model):
    name = models.CharField()
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    def __str__(self):
        return self.name
class Category(models.Model):
    name = models.CharField()
    def __str__(self):
        return self.name

