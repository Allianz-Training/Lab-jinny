package com.nn.helloworld;

public class Lab9 {

	public static void main(String[] args) {
		int count=1;
		while(count<=20) {
			if(count == 11) {
				System.out.println(count + "*");	
				count++;
				continue;
			
			}
			System.out.println(count);
			count++;
		}
		}

}
