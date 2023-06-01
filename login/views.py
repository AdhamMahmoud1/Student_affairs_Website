from django.shortcuts import render , redirect
from django.contrib.auth import logout , login
from django.contrib.auth import authenticate
# Create your views here.

from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, redirect, get_object_or_404
from django.urls import reverse

def login(request):

	if request.method=="POST":
		username = request.POST["user-id"]
		password = request.POST["pass"]
		user = authenticate(request, username=username, password=password)
		if user is not None:
			request.session['authenticated'] = True
			print("hello ")
			return redirect(reverse('home:home'))


		else:
			request.session['authenticated'] = False
			print("not valid")
			return render(request, "login/login.html")

			
	else:
		return render(request, "login/login.html")
	