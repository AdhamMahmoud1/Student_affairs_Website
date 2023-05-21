from django.contrib import admin

# Register your models here.

# import the student model (database) to show in admin panel
from .models import Student

admin.site.register(Student)