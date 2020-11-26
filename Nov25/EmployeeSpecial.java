package com.nn.Nov25;

public class EmployeeSpecial extends Employee {
	
	public String specialSkill;

	public EmployeeSpecial(String firstnameInput, String lastnameInput, int salaryInput,String positionInput) {
		super(firstnameInput, lastnameInput, salaryInput, positionInput);
		
	}
	
	public EmployeeSpecial(String firstnameInput, String lastnameInput, int salaryInput,String positionInput, String speicalSKill) {
		
		this(firstnameInput, lastnameInput, salaryInput, positionInput);
		this.specialSkill = specialSkill;
		
	}

}
