package com.nn.Nov25HW;

public class Rectangle {
	private  float length = 1.0f;
	private float width = 1.0f;
	
	public Rectangle() {
		
	}
	
	public Rectangle(float length,float width) {
		this.length = length;
		this.width = width;
			
	}
	public float getLength() {
		return length;
	}
	public void setLength(float length) {
		this.length = length;
	}
	
	public float getWidth() {
		return width;
	}
	
	public void setWidth(float width) {
		this.width = width;
	}
	public double getArea() {
		return length*width;
	}
	public double getPerimeter() {
		return 2*(length+width);
	}
	public String toString(){
		return "Rectangle[length= "+ length + " width= " + width +"]" ;
	}
	
	public static void main(String[] args) {
		Rectangle rectangle = new Rectangle(3,4);
		System.out.println(rectangle);
		System.out.println("Rectangle area = " + rectangle.getArea());
		System.out.println("Rectangle Preimeter = "+ rectangle.getPerimeter());
	}

}
