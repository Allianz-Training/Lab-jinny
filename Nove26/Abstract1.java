package com.nn.Nove26;

public class Abstract1 extends Abstract{

	public static void main(String[] args) {
		
		Abstract abs = new Abstract1();
		abs.eat();
		abs.stand();
	}

	@Override
	public void move() {
		System.out.println("Move on");
		
	}

	@Override
	public void sleep() {
		System.out.println("Sleep");
		
	}

	@Override
	public void eat() {
		
		System.out.println("Eating");
		
	}

}
