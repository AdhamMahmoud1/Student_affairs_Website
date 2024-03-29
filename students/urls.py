from django.contrib import admin
from django.urls import path, include


from django.urls import path, include

from . import views

app_name = "students"

urlpatterns = [
  path('',views.allStudents, name= "all_students"),
  #see specific student data using student ID
  path('<int:id>',views.student, name="edit"),
  path('add-student',views.addStudent, name= 'add_student'),
  path('department-assignment',views.departmentAssignment, name = "department_assignment")
]
