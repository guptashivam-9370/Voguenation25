from django.urls import path
from .views import register,success

urlpatterns = [
    path('register/', register, name='register'),
    path('success/',success,name="success"),
]