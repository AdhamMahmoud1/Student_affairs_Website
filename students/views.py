from django.shortcuts import render, redirect, get_object_or_404

from .models import Student
# Create your views here.
from .forms import StudentForm
from django.urls import reverse


def allStudents(request):
	student_list = Student.objects.all()
	# context = {the name you will use in html , var}
	context = {'students' : student_list}
	return render(request,'students/all_students.html',context)


def student(request,id):
	student_details = Student.objects.get(id = id)
	context = {'student' : student_details}
	return render(request, "students/student.html",context)

""" def addStudent(request):
	return render(request, "students/add.html")
 """
 
""" def departmentAssignment(request):
	return render(request, "students/department_assignment.html")
 """
def departmentAssignment(request):
    if request.method == 'POST':
        student_id = request.POST.get('id')
        print(student_id)
        student = get_object_or_404(Student, id=student_id)
        return render(request, 'students/department_assignment.html', {'student': student})
    return render(request, 'students/department_assignment.html')


# add student to database
def addStudent(request):
    if request.method == 'POST':
        form = StudentForm(request.POST)
        print(form.data);
        print(form.is_valid())
        if form.is_valid():
            form.save()  # Save the form data to the database
            
            return redirect(reverse('students:all_students'))  # Redirect to a success page or another URL
    else:
        form = StudentForm()
    return render(request, 'students/add.html', {'form': form})

