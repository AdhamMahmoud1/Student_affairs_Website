from django.shortcuts import render

# Create your views here.

def home(request):
  if request.method == 'POST':
        request.session['authenticated'] = False
        
  return render(request, "home/Home.html")
