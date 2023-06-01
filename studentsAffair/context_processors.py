# context_processors.py

def session_variables(request):
    # Retrieve the session variable
    my_variable = request.session.get('authenticated',False)

    # Return the variable as a dictionary
    return {'authenticated': my_variable}
