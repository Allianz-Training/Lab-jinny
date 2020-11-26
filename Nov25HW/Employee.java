package com.nn.Nov25HW;

public class Employee {
	private int id;
	private String firstname;
	private String lastname;
	private int salary;
	
	public Employee(int id, String firstname, String lastname, int salary) {
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.salary = salary;
	}
	public int getId() {
		return id;
	}
	public String getfirstname() {
		return "firstname: " +firstname;
	}
	public String getlastname() {
		return "lastname: " +lastname;
	}
	public int getSalary() {
		return salary;
	}
	public void setSalary(int salary) {
		this.salary = salary;
	}
	public int getAnnualSalary() {
		return salary *12;
	}
	
	public int riseSalary(int percent) {
		return ((percent*salary)/100)+salary;
	}
	public String toString(){
		return "Employee[id= "+ id + " firstname= " + "lastname= " +lastname + " Salary"+ salary+ "]";
	}

	public static void main(String[] args) {
		Employee employee = new Employee(123,"Nunu","Wang",200);
		System.out.println(employee);
		System.out.println("Annual Salary = " + employee.getAnnualSalary());
		System.out.println("Rise Salary = "+ employee.riseSalary(10));

	}

}
