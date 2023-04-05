from django.test import TestCase

from ..serializers import ProductSerializer, CategorySerializer
from .factories import ProductFactory, CategoryFactory

class ProductSerializer(TestCase):
    def test_model_fields(self):
        product = ProductFactory()
        for field in [
            'name', 'price', 'description', 'count', 'is_active'
        ]:
            self.assertEqual(
                serializer.data[field_name],
                getattr(product, field_name))

class CategorySerializer(TestCase): 
    def test_model_fields(self):
        category = CategoryFactory()
        for field in [
            'name'
        ]:
            self.assertEqual(
                serializer.data[field_name],
                getattr(category, field_name)
            )