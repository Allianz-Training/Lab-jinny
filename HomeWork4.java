package allianz.HW;

import java.util.Scanner;

public class HomeWork4 {
	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		System.out.print("Input Number: ");
		int number  = scan.nextInt();
		for (int i=1; i <=12 ; i++) {
			int result = number*i;
			System.out.println(number + "*" + i + "= "+ result);
		}

	}
}
