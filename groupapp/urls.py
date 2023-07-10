from django.urls import path

from . import views

app_name='group_generator'
urlpatterns = [
  path('', views.generate_groups, name='generate-groups'),
   
]