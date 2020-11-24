package com.nn.helloworld;

public class HomeWork1 {

	public static void main(String[] args) {
		//draw1(5);
		//draw2(4);
		//draw3(2);
		//draw4(4); 
		//draw5(2);
		//draw6(4);
		//draw7(3);
		draw8(2);
		
	}
	
	//Question 1
	public static void draw1(int n) {
		for(int i=0;i<n;i++) {
			System.out.print("*");
			
		}
	
	
	}
	
	public static void draw2(int n) {
		for(int i=0;i<n;i++) {
			System.out.print("*");
			System.out.println("*");
			
		}
	
	
	}
	public static void draw3(int n) {
		for(int i= 0;i<n;i++) {
			for(int j=1; j<=n;j++) {
			System.out.print(j);
		}
			System.out.println();
		}
		
		
	}
	
	public static void draw4(int n) {
		for(int i=n ;i>0 ;i--) {
			for(int j=n; j>0;j--) {
			System.out.print(j);
		}
			System.out.println();
		}
		
		}
	
	public static void draw5(int n) {
		for(int i=1;i<=n;i++) {
			for(int j=1; j<=n;j++) {
			System.out.print(i);
			
			}
			System.out.println();
			
		}
	}
	public static void draw6(int n) {
		for(int i=n;i>0;i--) {
			for(int j=n; j>0;j--) {
			System.out.print(i);
			
			}
			System.out.println();
			
		}
	}
	
	public static void draw7(int n) {
		int number =1;
		for(int i=1;i<=n;i++) {
			for(int j=1; j<=n;j++) {
			System.out.print(number);
			number++;
			}
			System.out.println();
			
		}
	}
	
	public static void draw8(int n) {
		int number =1;
		for(int i=1;i<=n;i++) {
			for(int j=1; j<=n;j++) {
			System.out.print(number);
			number++;
			}
			System.out.println();
			
		}
	}
	

}
