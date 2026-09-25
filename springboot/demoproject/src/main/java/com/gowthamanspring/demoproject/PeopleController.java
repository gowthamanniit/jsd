package com.gowthamanspring.demoproject;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PeopleController {

	@GetMapping("/")
	public String getPeople(Model model)
	{
		model.addAttribute("name","gowthaman");
		return "index";
	}

}
