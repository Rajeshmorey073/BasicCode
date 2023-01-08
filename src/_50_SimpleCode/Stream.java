package _50_SimpleCode;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Stream {

	public static void main(String[] args) {
		// without stream
		List<Integer> list1=List.of(1,2,4,5,3,25,66,3,6,33,67,7,4);
		List<Integer> list2=new ArrayList<Integer>();
		for (Integer integer : list1) {
			if(integer%2==0)
				list2.add(integer);
		}
		System.out.println(list2);
		
		//with stream+Lamba
		List<Integer> newlist=list1.stream().filter(i ->i%2==0).collect(Collectors.toList());
		System.out.println(newlist);
		
		//stream with for each
		list1.stream()
		.filter(i ->i%2==0)              //work with boolean
		.collect(Collectors.toList())
		.forEach(e->       //or- foreach(System.out::println);
			{System.out.println(e);
		});
		
		//empty stream
		//Stream<Object> empty=Stream.empty();
	
		//Filter with stram               
		
		List<String> names=List.of("raj","mamu","avi","aman","amar");
		names.stream()
			.filter(i ->i.startsWith("a"))
			.forEach(e->{
				System.out.println(e); // also we can collect all names by .Collect
			});
	
		//map with stream          //// work with value.......pas fun .... so it ret value
		List<Integer> list3=List.of(3,4,6,4,3,5,2);
		List<Integer> sqr=list3.stream()
				.map(i->i*i)
				.collect(Collectors.toList());
			System.out.println(sqr);
			
			
		//sort with stream
			list3.stream().sorted().forEach(System.out::println);
		System.out.println("-----------------------------------");
			//min with stream... ret min from list
			Integer nums=list3.stream().min((x,y)->x.compareTo(y)).get();
			System.out.println(nums);
			
	
	
	}

}
