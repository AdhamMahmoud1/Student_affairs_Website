from django.contrib import admin
from django.urls import path, include


from django.urls import path, include

from . import views

app_name = "students"

urlpatterns = [
  path('',views.home, name= "home"),
  #see specific student data using student ID
]
