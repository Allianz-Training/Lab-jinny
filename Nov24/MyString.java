package com.nn.Nov24;

public class MyString {
	public static void main(String[] args) {
		char[] myChar = {'N','U','N','U'};
		String myWorld = new String(myChar);
		System.out.println(myWorld);
		
		//Lab12();
		Lab13();
	
		
		
	}
	public static void Lab12(){
		
		//12.1
		String String_1 = "You and Me";
		String String_2 = " you and me ";
		
		if(String_1.equals(String_2)) {
			System.out.println("Ture");
		}else {
			System.out.println("False");
		}
		//12.2
		String Check = "me";
		System.out.println(String_1.contains(Check));
		//12.3
		System.out.println(String_1.length());
		//12.4
		System.out.println(String_1.substring(0,3));
		//12.5
		System.out.println(String_2.trim());
		//12.6
		System.out.println(String_2.toUpperCase());
		//12.7
		System.out.println(String_2.toUpperCase().trim());
	
	}
	
	public static void Lab13(){
		int[][] twoD_Array = {
			{1,2,3},
			{4,5,6,7},
			{8,9}
		};
		int sum =0;
		for(int[] row : twoD_Array) {
			for(int element:row) {
				System.out.println(element);
				if(element == row[row.length-1]) {
					sum+=element;
					
				}
				
			}
			
		}
		
		
		System.out.println("Sum of the last digit:"+sum);
		
	
	}
		
	
	
	
	

	

}
