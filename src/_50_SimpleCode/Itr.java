package _50_SimpleCode;

import java.util.ArrayList;
import java.util.Iterator;

public class Itr {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ArrayList<Integer> list = new ArrayList<Integer>();
		list.add(1);
		list.add(26);
		list.add(3);
		list.add(4);
		Iterator<Integer> itr=list.iterator(); 
			while(itr.hasNext()) {
				System.out.println(itr.next());
			}
		
	}

}
