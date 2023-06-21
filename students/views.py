from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from .models import Student
from .forms import StudentForm
from django.urls import reverse
import datetime


def allStudents(request):
    student_list = Student.objects.all()
    context = {'students': student_list}
    return render(request, 'students/all_students.html', context)


def student(request, id):
    student_details = Student.objects.get(id=id)
    correctDateFormate = False

    if request.method == "POST":
        if 'save' in request.POST:
            student_details.firstName = request.POST.get('firstName')
            student_details.lastName = request.POST.get('lastName')
            student_details.id = request.POST.get('id')
            student_details.GPA = request.POST.get('GPA')
            student_details.birthdate = request.POST.get('birthdate')
            correctDateFormate = True
            student_details.email = request.POST.get('email')
            student_details.phone = request.POST.get('phone')
            student_details.gender = request.POST.get('gender')
            student_details.save()
        else:
            student_details.delete()
            return redirect(reverse('students:all_students'))

    context = {'student': student_details, 'dt': correctDateFormate}
    return render(request, "students/student.html", context)


def departmentAssignment(request):
    if request.method == 'POST':
        if "search" in request.POST:
            student_id = request.POST.get('id')
            student = get_object_or_404(Student, id=student_id)
            return render(request, 'students/department_assignment.html', {'student': student})
        elif "save" in request.POST:
            student_id = request.POST.get('id')
            new_department = request.POST.get('department')
            student = get_object_or_404(Student, id=student_id)
            student.department = new_department
            student.save()
            return render(request, 'students/department_assignment.html', {'student': student, 'assigned': True})

    return render(request, 'students/department_assignment.html')


def addStudent(request):
    if request.method == 'POST':
        form = StudentForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect(reverse('students:all_students'))
    else:
        form = StudentForm()
    return render(request, 'students/add.html',{'form':form})