package com.lea.soap.tutorial.helloWorld;

import com.lea.soap.tutorial.helloWorld.wsdl.HelloWorldImplService;

public class HelloWorldClientWSDL {

	public static void main(String[] args) {

		HelloWorldImplService helloService = new HelloWorldImplService();
		HelloWorld hello = helloService.getHelloWorldImplPort();

		System.out.println(hello.greetings());

    }

}
