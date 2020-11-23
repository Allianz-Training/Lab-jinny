package com.nn.helloworld;

public class HelloWorld {
	public static void variable() {
		int Number = 23;
		String Name = "Nunu";
		boolean B = true;
		System.out.println("This is a number" + " " + Number);
		System.out.println("This is a string" + " " + Name);
		System.out.println("This is a Boolean" + " " + B);
	}

	public static void Bark() {
		String DogName = "Sapphire";
		System.out.println("The dogs name = " + DogName + " " + "bark");

		float myfloat = 2.25f;
		int myint = (int) myfloat;

		double mydouble = 1.5d;
		float myfloat1 = (float) mydouble;

		System.out.println("This is my:" + " " + myint);
		System.out.println("This is my:" + " " + myfloat1);

		int i = 20;
		System.out.println(i++);
		System.out.println(i++);
		System.out.println(i++);
	}

	public static void Lab4() {
		int score = 90;
		boolean isHandSome = false;

		if (score >= 80 || isHandSome == true) {
			System.out.println("Good");
		}
		if (score >= 50 && score < 80) {
			System.out.println("Normal");
		}
		if (score < 50) {
			System.out.println("Bad");
		}

	}

	public static void Lab5() {
		int score = 80;
		switch (score) {
		case 80: {
			System.out.println("grade A");break;
		}
		case 70: {
			System.out.println("grade B");break;
		}
		case 60:{
			System.out.println("grade C");break;
		}
		case 50:{
			System.out.println("grade D");break;
		}
		case 40:{
			System.out.println("grade F");break;
		}
		default:{
			System.out.println("grade E");break;
		}
		}
	}
	
	public static void Lab6() {
		int i = 1;
		int sum=0;
		int myArray[] = {1,2,3,4,5};
		while(i<=10) {
			System.out.println(i);
			i++;
		}
		for (int number=1; number <=10; number++ ) {
			
			sum += number;
			System.out.println(sum);
		}
		for(int counter : myArray) {
			System.out.println("Counter:"+ counter);
		}
		
	}
	
	public static void Lab8() {
		
		
	}
	

	public static void main(String[] args) {
		//variable();
		//Bark();
		//Lab4();
		//Lab5();
		Lab6();
	}

}
