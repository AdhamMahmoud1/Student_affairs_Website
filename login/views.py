from django.shortcuts import render , redirect
from django.contrib.auth import logout , login
from django.contrib.auth import authenticate
# Create your views here.

from django.shortcuts import render

# Create your views here.

def login(request):
	if request.method=="POST":
		username = request.POST["user-id"]
		password = request.POST["pass"]
		user = authenticate(request, username=username, password=password)
		if user is not None:
			
			print("hello ")
			return render(request, "home/Home.html")
		else:
			print("not valid")
			return render(request, "login/login.html")

			
	else:
	    return render(request, "login/login.html")
	