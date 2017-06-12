package com.lea.soap.tutorial.helloWorld;

import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;

/**
 * Default style was Document, so we need to explicitly assigned RPC
 * @author Lea *
 */
@WebService
@SOAPBinding(style = SOAPBinding.Style.RPC)
public interface HelloWorld {
	
	@WebMethod
	public String greetings();
	
}
