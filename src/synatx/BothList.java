package synatx;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class BothList {

	public static void main(String[] args) {
		List<Integer> list1=new ArrayList<Integer>();
		list1.add(12);
		list1.add(13);
		list1.add(17);
		list1.add(15);
		list1.add(11);
		//list1.stream().collect(Collectors.toList());
		list1.stream().forEach(e->{System.out.println(e);});
		System.out.println("---------------------------------------");
		List<Integer> list2=new LinkedList<Integer>();
		list2.add(23);
		list2.add(24);
		list2.add(21);
		list2.add(1,25);
		list2.stream().forEach(e->{System.out.println(e);});
		

	}

}
