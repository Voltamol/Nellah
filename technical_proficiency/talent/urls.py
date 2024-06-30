from django.urls import path
from. import views

app_name='talent'

urlpatterns=[
    path('employees',views.employee_list,name='employees'),
    path('departments',views.department_list,name='departments'),
    path('employee_update',views.employee_update,name='employee_update'),
    path('bulk_upload',views.bulk_upload,name='bulk_upload'),
]