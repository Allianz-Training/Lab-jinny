package com.nn.Nove26;

public abstract class Abstract {
	private String Earthling ="Hello World";
	
	public abstract void move();
	public abstract void sleep();
	public abstract void eat();
	
	public void stand() {
		System.out.println(Earthling);
		System.out.println("Satnding here");
	}
	
}
