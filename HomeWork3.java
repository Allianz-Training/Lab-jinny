package com.nn.helloworld;

public class HomeWork3 {
	public static void main(String[] args) {
		//draw(4);
		//draw10(4);
		draw11(2);
		//draw12(4);

	}
	
	public static void draw(int n) {
		for(int i=0;i<n;i++) {
			System.out.println(i*2);
		}
	}
	
	public static void draw10(int n) {
		for(int i=1;i<=n;i++) {
			System.out.println(i*2);
		}
	}
	public static void draw11(int n) {
		int number = 1;
		for(int i=1;i<=n;i++) {
			for(int j=1; j<=n;j++) {
			System.out.print(number);
			number++;
			}
			System.out.println();
			
		}
		
	}
	
	

}
