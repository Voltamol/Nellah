from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Company, Department, Employee, Role, Duty
from .table import getCompanies, getDepartments, getEmployees, getRoles
from django.http import JsonResponse
from django.core.files.storage import default_storage
import pandas as pd
@api_view(['GET', 'POST'])
def company_list(request):
    return JsonResponse(getCompanies(Company))

@api_view(['GET', 'PUT', 'DELETE'])
def company_update(request):
    ...

@api_view(['GET', 'POST'])
def department_list(request):
    return JsonResponse(getDepartments(Department))

@api_view(['GET', 'PUT', 'DELETE'])
def department_update(request):
    ...

@api_view(['GET', 'POST'])
def employee_list(request):
    return JsonResponse(getEmployees(Employee))

@api_view(['GET', 'PUT', 'DELETE'])
def employee_update(request):
    ...

@api_view(['GET', 'POST'])
def role_list(request):
    return JsonResponse(getRoles(Role))

@api_view(['GET', 'PUT', 'DELETE'])
def role_update(request):
    ...

@api_view(['GET', 'PUT', 'DELETE'])
def duty_update(request):
    ...

@api_view(['POST'])
def bulk_upload(request):
    csv_file = request.FILES.get('csv_file')
    file_path = f'uploads/{csv_file.name}'
    default_storage.save(file_path, csv_file)
    df = pd.read_csv(default_storage.path(file_path))
    print(df.head())
    return JsonResponse({'success': True})