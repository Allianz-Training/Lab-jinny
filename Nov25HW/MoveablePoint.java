package com.nn.Nov25HW;

public class MoveablePoint implements Moveable{
	protected int x;
	protected int y;
	protected int xSpeed;
	protected int ySpeed;

	public  MoveablePoint(int x, int y, int xSpeed, int ySpeed) {
		this.x=x;
		this.y=y;
		this.xSpeed = xSpeed;
		this.ySpeed = ySpeed;
		
	}
	
	

	@Override
	public String toString() {
		return "MoveablePoint [x=" + x + ", y=" + y + ", xSpeed=" + xSpeed + ", ySpeed=" + ySpeed + "]";
	}



	@Override
	public void moveUp() {
		this.y= y+ySpeed;
		
	}

	@Override
	public void moveDown() {
		this.y=y-ySpeed;
	}

	@Override
	public void moveLeft() {
		this.x= x-xSpeed;
	
	}

	@Override
	public void moveright() {
		this.x= x+xSpeed;
		
	}
	public static void main(String[] args) {
		
		MoveablePoint point = new MoveablePoint (0,1,5,5);
		System.out.println("original: " + point );
		point.moveDown();
		System.out.println(point);
		
		
		
		
		
	}
	

}
