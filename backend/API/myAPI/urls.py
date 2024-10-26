from django.urls import path
from .views import signin

urlpatterns = [
    path('api/',views.signin, name='signin')
]
