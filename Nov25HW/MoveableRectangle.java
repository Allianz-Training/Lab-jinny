package com.nn.Nov25HW;

public class MoveableRectangle implements Moveable{
	private MoveablePoint topleft;
	private MoveablePoint bottomRight;
	
	public  MoveableRectangle(int x1,int y1,int x2,int y2,int xSpeed,int ySpeed) {
		this.topleft = new MoveablePoint(x1, y1, xSpeed, ySpeed);
		this.bottomRight = new MoveablePoint(x2, y2, xSpeed, ySpeed);
	}
	
	
	@Override
	public String toString() {
		return "MoveableRectangle [topleft=" + topleft + ", bottomRight=" + bottomRight + "]";
	}



	@Override
	public void moveUp() {
		topleft.moveUp();
		bottomRight.moveUp();
		
	}
	@Override
	public void moveDown() {
		topleft.moveDown();
		bottomRight.moveDown();
		
	}
	@Override
	public void moveLeft() {
		topleft.moveLeft();
		bottomRight.moveLeft();
		
	}
	@Override
	public void moveright() {
		topleft.moveright();
		bottomRight.moveright();
		
	}
	
	public static void main(String[] args) {
		
		MoveableRectangle rectangle = new MoveableRectangle (0,1,5,5,2,4);
		System.out.println("original: " + rectangle );
		rectangle.moveUp();
		System.out.println(rectangle);

	}
	
	

}
