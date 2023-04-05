from factory import DjangoModelFactory, Faker

from .models import Product, Category

class ProductFactory(DjangoModelFactory):
    name = Faker('product')
    price = Faker('price')
    description = Faker('text')
    count = Faker('number')
    is_active = Faker('bool')
    class Meta:
        model = Product

class CategoryFactory(DjangoModelFactory):
    name = Faker('category')
    class Meta:
        model = Category

