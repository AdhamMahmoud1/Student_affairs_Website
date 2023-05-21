from django.db import models

# to use it to validate the student id to be 8 digits
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.

DEPARTMENT = [
	("CS","CS"),
	("IT","IT"),
	("IS","IS"),
	("AI","AI"),
	("DS","DS"),
]

GENDER = (
	("Male","Male"),
	("Female","Female")
)

STATUS = (
	("Active","Active"),
	("Inactive","Inactive")
)


LEVEL = [
	("level 1","level 1"),
	("level 2","level 2"),
	("level 3","level 3"),
	("level 4","level 4")
]



#every class in model must inheritmodels.Model
class Student(models.Model):    # Table
    id = models.IntegerField(primary_key=True, validators=[MinValueValidator(10000000), MaxValueValidator(99999999)],default=20210000)

    firstName = models.CharField(max_length=20) # create a record name in table
    lastName = models.CharField(max_length=20) # create a record name in table
    department = models.CharField(max_length=2, choices= DEPARTMENT, null= True)
    email = models.EmailField(max_length = 254)
    birthdate = models.DateField(blank=True, null=True)

    gender = models.CharField(max_length=15, choices=GENDER)


    phone = models.CharField(max_length=12)

    GPA = models.DecimalField(  max_digits =3,decimal_places= 2,default=1.0)
    date_added = models.DateTimeField(auto_now=True)
    
    level = models.CharField(max_length= 20, choices=LEVEL, null= True)

    status = models.CharField(max_length= 20, choices=STATUS, null= True)
    

    # change the name of the object in the admin
    def __str__(self):
      return self.firstName + " " + self.lastName


# Don't forget to makemigration to check if the query is right then migrate to create table
