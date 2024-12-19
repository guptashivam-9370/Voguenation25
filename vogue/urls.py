from django.urls import path
from .views import success,register

urlpatterns = [
    path('register/', register, name='register'),
    path('success/',success,name="success"),
]