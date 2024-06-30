from rest_framework import serializers
from .models import Company, Department, Employee, Role, Duty

class CompanySerializer(serializers.ModelSerializer):
    employees = serializers.IntegerField(read_only=True)
    contact_person = serializers.ListField(child=serializers.CharField(), read_only=True)
    contact_phone = serializers.ListField(child=serializers.CharField(), read_only=True)
    departments = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Company
        fields = ['id', 'name', 'date_of_reg', 'reg_num', 'address', 'email', 'employees', 'contact_person', 'contact_phone', 'departments']

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ['id', 'company', 'name']

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['id', 'department', 'name', 'phone', 'id_num']

class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = ['id', 'employee', 'name', 'date_started', 'date_left']

class DutySerializer(serializers.ModelSerializer):
    class Meta:
        model = Duty
        fields = ['id', 'role', 'name', 'description']