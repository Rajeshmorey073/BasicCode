package _50_SimpleCode;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class ComparatorClass implements Comparator<Integer>{

	@Override
	public int compare(Integer o1, Integer o2) {// we can write seperate class for particular dar sort
		if(o1 == o2)
			return 0;
		else if(o1 < o2)
		return 1;
		else
		return -1;
	}

	public static void main(String[] args) {

		List<Integer> val=new ArrayList<Integer>();
		val.add(422);
		val.add(547);
		val.add(312);
		val.add(131);
		val.add(776);
		
		Collections.sort(val,new ComparatorClass());
		
		for (Integer integer : val) {
			System.out.println(integer);
			
		}
		
		System.out.println("------------OR--------------");
		
		List<Integer> val1=new ArrayList<Integer>();
		val1.add(422);
		val1.add(547);
		val1.add(312);
		val1.add(131);
		Comparator<Integer> com = new Comparator<Integer>() {

			@Override
			public int compare(Integer o1, Integer o2) {
				if(o1>o2)
				return 1;
				return -1;
						}	
		};
		Collections.sort(val1,com);
		for (Integer integer : val1) {
			System.out.println(integer);
		}
	}

	

	




}
