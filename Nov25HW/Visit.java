package com.nn.Nov25HW;

import java.util.Date;

public class Visit {
	private Customer customer;
	private Date date;
	private double servieExpense;
	private double productExpense;
	
	public Visit(String name, Date date) {
		this.customer = new Customer(name);
		this.date = date;
	}
	public String getName() {
		return customer.getName();
	}
	public Customer getCustomer() {
		return customer;
	}
	
	public double getServieExpense() {
		return servieExpense;
	}
	public void setServieExpense(double servieExpense) {
		this.servieExpense = servieExpense;
	}
	public double getProductExpense() {
		return productExpense;
	}
	
	public void setProductExpense(double productExpense) {
		this.productExpense = productExpense;
	}
	
	public double getTotalExpense() {
		if(customer.isMember()) {
			DiscountRate discount = new DiscountRate();
			return servieExpense * (1- discount.getServiceDiscountRate(customer.getMemberType()))+
					productExpense *1 - (discount.getProductDiscountRate(customer.getMemberType()));
		}
		return servieExpense + productExpense;
	}
	
	@Override
	public String toString() {
		return "Visit [customer=" + customer + ", date=" + date + ", servieExpense=" + servieExpense
				+ ", productExpense=" + productExpense + "]";
	}
	
	
	

}
