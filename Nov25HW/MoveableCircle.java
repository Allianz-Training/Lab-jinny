package com.nn.Nov25HW;

public class MoveableCircle implements Moveable{
	private int radius;
	private MoveablePoint center;

	public  MoveableCircle(int x, int y, int xSpeed, int ySpeed,int radius) {
	this.radius= radius;
	this.center = new MoveablePoint(x, y, xSpeed, ySpeed);
	}
	
	
	@Override
	public String toString() {
		return "MoveableCircle [radius=" + radius + ", center=" + center + "]";
	}


	@Override
	public void moveUp() {
		center.moveUp();
		
	}

	@Override
	public void moveDown() {
		center.moveDown();
	}

	@Override
	public void moveLeft() {
		center.moveLeft();
		
		
	}

	@Override
	public void moveright() {
		center.moveright();
		
	}
	public static void main(String[] args) {
		
		MoveableCircle circle = new MoveableCircle (0,1,5,5,2);
		System.out.println("original: " + circle );
		circle.moveDown();
		System.out.println(circle);

	}

}
