from django import forms
from .models import Student


# creat a form model with the data from html input
class StudentForm(forms.ModelForm):
    class Meta:
        model = Student
        fields = ['firstName' , 'lastName', 'id', 'email', 'phone' , 'level' , 'department','GPA' , 'status' , 'birthdate', 'gender']  # Add other fields as needed