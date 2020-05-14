package com.qinhh;

import org.junit.Test;
import org.springframework.context.support.ClassPathXmlApplicationContext;


import java.applet.AppletContext;

/**
 * @Author qinhh
 * @Date 2020/5/14 18:02
 * @Version 1.0
 */
public class TestSpring {

    @Test
    public void  test(){
        ClassPathXmlApplicationContext ctx = new ClassPathXmlApplicationContext("/applicationContext.xml");
        Person person =  ctx.getBean(Person.class);
        System.out.println(person);
        System.out.println("aini");

    }


}
