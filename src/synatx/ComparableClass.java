package synatx;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ComparableClass implements Comparable<ComparableClass>{
	private String name;
	private int id;
	
	
	public ComparableClass(String name, int id) {
		super();
		this.name = name;
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public int getId() {
		return id;
	}
	
	@Override
	public int compareTo(ComparableClass o) {
		if(this.getId()==o.getId()) return 0;
		else if(this.getId() > o.getId()) return 1;
		else 
		return -1;
	}


	public static void main(String[] args) {
	List<ComparableClass> list=new ArrayList<ComparableClass>();
	list.add(new ComparableClass("raj",14));
	list.add(new ComparableClass("mamu",10));
	list.add(new ComparableClass("avi",12));
	list.add(new ComparableClass("saurya",11));
	list.add(new ComparableClass("kisan",13));
	
	for (ComparableClass arr : list) {
		System.out.println(arr.id);
	}
	System.out.println();	
	
	Collections.sort(list);// this sort by asc bcz of compareTo method impl from comparable.
	for (ComparableClass arr : list) {
		System.out.println(arr.id);
	}
	}




}
