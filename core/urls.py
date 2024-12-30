from django.urls import path
from . import views

urlpatterns = [
    # path('register/', views.register,name = 'vogue-register'),
    path('register/<str:competition_name>/',  views.register, name='register'),
    path('', views.home,name = 'Vogue-Home'),
    path('data/<str:comp>', views.data,name = 'data'),

]