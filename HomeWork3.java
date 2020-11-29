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
	public static void draw12(int n) {
		for(int i=0;i<n;i++) {
			for(int j=0; j<n;j++) {
				if(j==i) {
				System.out.print("-");
					continue;
				}
				System.out.print("*");
			}
			System.out.println();
			
			}
		}
	public static void draw13(int n) {
		for (int i = n;i>0;i--) {
			for(int j =1;j<=n;j++) {
				if(j == i) {
					System.out.print("-");
						continue;
				}
				System.out.print("*");
			}
			System.out.println();
		}
		
	}
	
	

}
