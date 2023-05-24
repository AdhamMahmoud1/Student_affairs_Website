from django.contrib import admin
from django.urls import path, include


from django.urls import path, include

from . import views

app_name = "about"

urlpatterns = [
  path('',views.About, name= "about"),
  #see specific student data using student ID
]
