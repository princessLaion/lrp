package com.lea.soap.tutorial.helloWorld;

import javax.xml.ws.Endpoint;

/**
 * endpoint publisher
 * No need for a server
 * @author Lea
 *
 */
public class HelloWorldPublisher {

	/**
	 * http://localhost:9998/ws/helloWorld - is a user defined value
	 * @param args
	 */
	public static void main(String[] args) {
		Endpoint.publish("http://localhost:9998/ws/helloWorld", new HelloWorldImpl());
	}

}
