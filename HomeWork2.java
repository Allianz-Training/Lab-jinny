package com.nn.helloworld;

public class HomeWork2 {

	public static void main(String[] args) {
		String[][] table = {
				{"1","2","3"},{"4","5","6"},{"7","8","9"}
		};
		multiplyTable(table);
		
		
	}
	
	public void multiplyTable(String[][] input) {
	
		for(int i =0;i<input.length;i++) {
			for(int j = 0;j<input[i].length;j++) {
				System.out.print(Integer.parseInt(n[i][j])*2);
			}
			System.out.println();
		}
		
	}
	
	
}
