package com.nn.Nov25HW;


public class circle {
	
	private double radius = 1.0;
	private String color ="red";
	
	public circle(){
		
	}
	
	public circle(double radius) {
		this.radius = radius;
	}
	
	public double getRadius() {
		return radius;
	}
	
	public double getArea() {
		return Math.PI*(Math.pow(radius, 2));
	}
	
	public double getCircumference() {
		return 2*(Math.PI)*radius;
	}
	public String toString(){
		return "Circle Radius= " + radius;
	}
	
	
	

	public static void main(String[] args) {
		circle area = new circle(2);
		System.out.println("Circle Area = "+ area.getArea());
		System.out.println(area);

	}

}
