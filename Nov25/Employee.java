package com.nn.Nov25;

public class Employee {
	public String firstname;
	public String lastname;
	public String position;
	private int salary;
	public static int  holiday =15;
	
	
	public Employee(String firstnameInput, String lastnameInput, int salaryInput, String positionInput) {
	     firstname = firstnameInput;
	     lastname = lastnameInput;
	     salary = salaryInput;
	     position = positionInput;
	 }
	 public void hello() {
	     System.out.println("Hello " + firstname + " " + lastname);
	 }
	 public int getSalary() {
	     return salary;
	 }
	 
	 public void checkposition() {
		 System.out.println(firstname +" " + "position is:"+ " "+position);
		 
	 }
	 
	 public String getFullname() {
		return(firstname +" "+ lastname);
	 }
	 
	 public static void Holiday() {
		 System.out.println("Holiday");
	 }
	 
	 public static int HolidayNum() {
		 return holiday;
	 }

	public static void main(String[] args) {
		Employee nunu = new Employee("Nunu","Wang",200,"QA");
		Employee Yibo = new Employee("Yibo","Wang",200,"QA");
		nunu.hello();
		nunu.checkposition();
		System.out.println(Yibo.getFullname());
		
		Employee[] employees = new Employee[3];
		for(int i=0;i<employees.length;i++) {
			employees[i] = new Employee("First Name"+i, "last"+i, i,"position"+i);   
			
		}
		System.out.println(employees[0].firstname);
		Holiday();
		System.out.println(HolidayNum());
	}
	
	
	
	
	

}
