package synatx;


public class WithoutCatch {// catch is ncc, without catch it is waste ... how we can catch error

	public static void main(String[] args) throws Exception {

	    try{
	        System.out.println('A');
	        try{
	            System.out.println('B');
	            throw new Exception("threw exception in B");
	        }
	        finally
	        {
	            System.out.println('X');
	        }
	        //any code here in the first try block 
	        //is unreachable if an exception occurs in the second try block
	    }
	    catch(ArithmeticException e)
	    {
	        System.out.println('Y');
	    }
	    catch (Exception e) {
			// TODO: handle exception
	    	System.out.println("inva");
		}
	    finally
	    {
	        System.out.println('Z');
	    }
	  }
	}