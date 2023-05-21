from django.shortcuts import render

from .models import Student
# Create your views here.

def allStudents(request):
	student_list = Student.objects.all()
	# context = {the name you will use in html , var}
	context = {'students' : student_list}
	return render(request,'students/all_students.html',context)


def student(request,id):
	student_details = Student.objects.get(id = id)
	context = {'student' : student_details}
	return render(request, "students/student.html",context)

def addStudent(request):
	return render(request, "students/add.html")

def departmentAssignment(request):
	return render(request, "students/department_assignment.html")


