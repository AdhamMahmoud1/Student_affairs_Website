from django.contrib import admin
from django.urls import path, include


from django.urls import path, include

from . import views

app_name = "students"

urlpatterns = [
  path('',views.allStudents, name= "all_students"),
  #see specific student data using student ID
  path('<int:id>',views.student),
  path('add-student',views.addStudent),
  path('department-assignment',views.departmentAssignment)
]
