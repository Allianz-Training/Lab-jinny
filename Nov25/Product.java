package com.nn.Nov25;

public class Product implements IProductFrontPage {
	public String price;
	public String title;
	public String urlimage;
	public String soldText;
	
	public Product(String price, String title, String urlimage,String soldtext) {
		this.price=price;
		this.title=title;
		this.urlimage=urlimage;
		this.soldText=soldText;
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
		return soldText;
	}
	


}
