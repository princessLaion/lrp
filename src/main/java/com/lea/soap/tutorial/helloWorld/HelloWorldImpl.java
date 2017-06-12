package com.lea.soap.tutorial.helloWorld;

import javax.jws.WebMethod;
import javax.jws.WebService;

/**
 * Mandatory: endpointInterface
 * @WebService is the annotation to define that the class is a webservice
 * @author Lea
 *
 */
@WebService(endpointInterface = "com.lea.soap.tutorial.helloWorld.HelloWorld")
public class HelloWorldImpl implements HelloWorld {
	private HelloWorldService helloWorldService;
	
	public HelloWorldImpl (){
		helloWorldService = new HelloWorldService();
	}
	
	@WebMethod
	public String greetings() {
		return helloWorldService.greetings();
	}


}
