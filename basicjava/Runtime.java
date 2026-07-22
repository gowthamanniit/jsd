import java.util.Scanner;

class Runtime
{
 public static void main(String args[])
 {
	Scanner scan=new Scanner(System.in);
	System.out.print("Enter Your Name:");
//	String name=scan.next();
	String name=scan.nextLine();

	System.out.println("Your Name:"+name);
	scan.close();
 }
}