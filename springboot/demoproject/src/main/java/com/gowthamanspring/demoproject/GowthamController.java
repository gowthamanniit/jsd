package com.gowthamanspring.demoproject;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class GowthamController {

	@GetMapping("/api")
	public String myMethod(Model model) {
		model.addAttribute("name", "Gowthaman");
		model.addAttribute("age",45);
		model.addAttribute("city","Namakkal");
		return "index";
	}
	
	@GetMapping("/api/v3")
	public String itemMethod(Model model)
	{
		Person p1=new Person("sathya",24);
		Person p2=new Person("pavya",25);
		Person p3=new Person("abinaya",26);		
		Person p4=new Person("birundha",27);
		Person p5=new Person("hemalatha",28);
		
		List<Person> plist=Arrays.asList(p1,p2,p3,p4,p5);
		
		model.addAttribute("personslist", plist);
		
		return "myfile";
	}
}
