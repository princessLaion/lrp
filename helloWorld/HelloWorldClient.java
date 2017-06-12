package com.lea.soap.tutorial.helloWorld;

import java.net.MalformedURLException;
import java.net.URL;

import javax.xml.namespace.QName;
import javax.xml.ws.Service;

public class HelloWorldClient {

	public static void main(String[] args) throws MalformedURLException {
		//The Parameter is the same value defined on HelloWorldPublisher
		URL url = new URL("http://localhost:9998/ws/helloWorld?wsdl");
					   
		/**
		 * First argument is the backward naming convention of the package where we define the webservice
		 * second argument - the name specified when we run the publisher - also displayed on WSDL
		 * Example, the HelloWorldImpl is in package 'com.lea.soap.tutorial.helloWorld', this means
		 * 			
		 */
        QName qname = new QName("http://helloWorld.tutorial.soap.lea.com/", "HelloWorldImplService");
        Service service = Service.create(url, qname);
        HelloWorld hello = service.getPort(HelloWorld.class);
        System.out.println(hello.greetings());
	}

}
