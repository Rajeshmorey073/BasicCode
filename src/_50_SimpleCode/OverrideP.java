package _50_SimpleCode;

class Overridee {
void show()
{
System.out.println("Parent's show()");
}
}

// Inherited class
class Child extends Overridee {
// This method overrides show() of Parent
@Override
void show()
{
super.show();
System.out.println("Child's show()");
}
}

// Driver class
class OverrideP {
public static void main(String[] args)
{
Overridee obj = new Child();
obj.show();
}
}