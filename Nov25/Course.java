package com.nn.Nov25;

public class Course implements IProductFrontPage{
	public String price;
	public String title;
	public String urlimage;
	public String instructor;
	public int numTotlal;
	public int numSold;
	
	public Course(String price, String title, String urlimage, String instructor, int numTotlal, int numSold) {
		super();
		this.price = price;
		this.title = title;
		this.urlimage = urlimage;
		this.instructor = instructor;
		this.numTotlal = numTotlal;
		this.numSold = numSold;
	}


	@Override
	public String getTitle() {
		// TODO Auto-generated method stub
		return title;
	}




	@Override
	public String getPrice() {
		// TODO Auto-generated method stub
		return price;
	}




	@Override
	public String getUrlImage() {
		// TODO Auto-generated method stub
		return urlimage;
	}




	@Override
	public String getSoldText() {
		// TODO Auto-generated method stub
		return ;
	}

}
