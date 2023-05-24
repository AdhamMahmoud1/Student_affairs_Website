from django.shortcuts import render, redirect, get_object_or_404

from .models import Student
# Create your views here.
from .forms import StudentForm
from django.urls import reverse

import datetime


def allStudents(request):
	student_list = Student.objects.all()
	# context = {the name you will use in html , var}
	context = {'students' : student_list}
	return render(request,'students/all_students.html',context)

# edit page
def student(request,id):
	student_details = Student.objects.get(id = id)
	correctDateFormate = False
	if request.method == "POST":
		if 'save' in request.POST:
			student_details.firstName = request.POST.get('firstName')
			student_details.lastName = request.POST.get('lastName')
			student_details.id = request.POST.get('id')
			student_details.GPA = request.POST.get('GPA')
			
			# From 2003-10-15 to month day year
			print(request.POST.get('birthdate'))
			print(student_details.birthdate)
			# dt = datetime.datetime.strptime("2013-1-25", '%Y-%m-%d')
			# student(birthdate = request.POST.get('birthdate'))
			student_details.birthdate = request.POST.get('birthdate')
			correctDateFormate = True
			student_details.email = request.POST.get('email')
			student_details.phone = request.POST.get('phone')
			student_details.gender = request.POST.get('gender')
			student_details.save()
	
	context = {'student' : student_details, 'dt' : correctDateFormate}
	return render(request, "students/student.html",context)

""" def addStudent(request):
	return render(request, "students/add.html")
 """
 
""" def departmentAssignment(request):
	return render(request, "students/department_assignment.html")
 """
def departmentAssignment(request):

  if request.method == 'POST':
    if "search" in request.POST :
      student_id = request.POST.get('id')
      # print(student_id)
      student = get_object_or_404(Student, id=student_id)
      return render(request, 'students/department_assignment.html', {'student': student})
    elif "save" in request.POST:
      student_id = request.POST.get('id')
      
      new_department = request.POST.get('department')
      # print(new_department)
      student = get_object_or_404(Student, id=student_id)
      student.department = new_department
      student.save()
      return render(request, 'students/department_assignment.html', {'student': student,'assigned' : True})

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

