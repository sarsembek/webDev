from django.test import TestCase

from ..models import Product, Category
from ..factories import ProductFactory, CategoryFactory

class ProductTestCase(TestCase):
    def test_str(self):
        product = ProductFactory()
        self.assertEqual(str(product), product.name)

class CategoryTestCase(TestCase):
    def test_str(self):
        category = CategoryFactory()
        self.assertEqual(str(category), category.name)