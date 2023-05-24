# ابوس ايدك يا ادهم متغيرش اسم فولدر ولا تحاول تنظم الملفات مش بمزاجنا هو دجانجو عايز كدا

# Student Table (in database)
  - id
  - firstName
  - lastName
  - E-mail
  - phone
  - level  {1,2,3,4}
  - department (CS,IS,IT,DS,AI)  we should consider adding none (first and second year students)
  - GPA
  - Status (Active/inActive)
  - BirthDate 
  - Gender (male / female)


# NOTE 
  I renamed table.html to -> all_students.html
            and edit.html to -> student.html

# IMPORTANT
I used javascript to handle links (url) navigation not django (didn't work)
All url navigation in navbar.html in script tag

# WEBAPP STRUCTURE IN DJANGO
  Student app (folder) contains (add student - edit student - assign department)
  Home app for the home webpage
  About app for the about homepage
  Login app for the login