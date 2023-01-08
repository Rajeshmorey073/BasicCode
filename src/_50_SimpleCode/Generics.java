package _50_SimpleCode;

import java.util.ArrayList;
import java.util.List;
public class Generics {

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static void main(String[] args) {
		
		List list=new ArrayList();
		list.add("Raj");
//		String s=list.get(0);/Type mismatch: cannot convert from Object to String : solved by generics
		String s=(String)list.get(0);//ok now
		System.out.println(s);
		
		List<String> list1=new ArrayList<String>();
		list1.add("rajesh");
		String ss=list1.get(0);//no typecast required. go through adv.
		System.out.println(ss);
	}

}
