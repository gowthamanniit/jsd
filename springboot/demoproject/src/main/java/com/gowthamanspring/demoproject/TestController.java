package com.gowthamanspring.demoproject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@Controller
@RestController
public class TestController {
	@GetMapping("/test")
	public String test()
			{
		return "Hello World";
			}
	@GetMapping("/gowthaman")
	public String addition() {
		int a=10;
		int b=20;
		return "<h2>Total  : "+(a+b);
	}
	
	public int myfunction(int a,int b) {
		return a+b;
	}
	
	@GetMapping("/args")
	public String myAdd() {
		return "<h1>Result:"+myfunction(100, 200)+"</h1>";
	}
	@GetMapping("/pid/{id}")
	public String myAdd1(@PathVariable Long id) {
		return "<h1>Result:"+id+"</h1>";
	}
	int sarr(int[] myarr)
	{
	    int len=myarr.length;
	    int sum=0;
	    for(int i=0;i<len;i++)
	    {
	    	sum=sum+myarr[i];
	    }
		return sum;
	}
	
	@GetMapping("/arrsum")
	public String funArrSum() {
		int arr[]= {11,22,33,44,55,99};
		int arrtot=sarr(arr);
		return "Length of array:"+arr.length+"<h2>sum Of Array:"+arrtot +"</h2>";
	}
	
	
	//runtime data from url with parameters
	
	@GetMapping("/app/v1/{id}")
	public String showArgs(@PathVariable Long id)
	{
		long data=id;
		return "<h1>Your URL runtime data:"+data+"</h1>";
	}
	
	
	@GetMapping("/objdata")
	public String showObjectData()
	{
		Person p1=new Person("paviya",22);
		Person p2=new Person("abinaya",22);
		Person p3=new Person("birundha",20);
		Person p4=new Person("Gowthaman",45);
		Person p5=new Person("Jeeva",23);
		
		/*
		String data1= p1.getSname()+"-------->"+p1.getAge();
		data1=data1+"<br>"+p2.getSname()+"-------->"+p2.getAge();
		data1=data1+"<br>"+p3.getSname()+"-------->"+p3.getAge();
		data1=data1+"<br>"+p4.getSname()+"-------->"+p4.getAge();
		data1=data1+"<br>"+p5.getSname()+"-------->"+p5.getAge();
		return "<font color='green' size='6'>Person's information:<br>"+data1+"</font>";
		*/
		Person p[]= {p1,p2,p3,p4,p5};
		String ans="<table border='4' cellpadding='5' bgcolor='cyan' align='center'><tr><th>sno</th><th>Student Name</th><th>Age</th></tr>";
		for(int i=0;i<p.length;i++)
		{
			ans=ans+"<tr><td>"+(i+1)+"</td><td>"+p[i].getSname()+"</td><td>"+p[i].getAge()+"</td></tr>";
		}
		ans=ans+"</table>";
		return ans;

	}
		
}