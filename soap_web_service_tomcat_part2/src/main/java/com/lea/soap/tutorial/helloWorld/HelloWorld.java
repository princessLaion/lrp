package com.lea.soap.tutorial.helloWorld;

import javax.jws.WebMethod;
import javax.jws.WebService;

/**
 * Default style was Document
 * @author Lea *
 */
@WebService
public interface HelloWorld {
	
	@WebMethod
	public String greetings();	
}
