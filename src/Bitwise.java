
public class Bitwise {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
	     
             int x = 3;
             System.out.println(~x);
             int y = 9;
 	     int z = x | y;
 	     System.out.println(z);
 	  
 	     String str1="new";
 	     String str2=new String("new");
 	     String str3=new String(str1);

 	     System.out.println(str1==str2);
 	     //int g=0/0;
 	     System.out.println(str3);

             int v = 5;
            v =v >>2 ;
 	     System.out.println(v);
 	    boolean a = true;
        boolean b = !true;
        boolean c = a | b;
     boolean d = a & b;
        boolean e = d ? b : c;
        System.out.println(d + " " + e);
        //Operator | returns true if any one operand is true, thus ‘c = true | false’ is true. Operator & returns a true if both of the operand is true thus d is false. Ternary operator ?: assigns left of ‘:’ if condition is true and right hand of ‘:’ if condition is false. d is false thus e = d ? b : c , assigns c to e , e contains true.

        //17/2=8-1
        //8/2=4-0
        //4/2=2-0
        //2/2=1-0
        //1/2=0-1  --reverse--10001
        int[] array=new int[5];//..........rev Array
        int i;
        for (i = 0; i <5; i++) {
            array[array.length-i] = i;
            }
        for(int arr: array) {
    		System.out.print(arr);
    	}   
	}
	

}
