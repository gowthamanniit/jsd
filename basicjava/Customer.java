import java.util.Scanner;
class Customer
{
	public static void  main(String args[])
	{
	Scanner scan=new Scanner(System.in);
	System.out.println("Enter customer name:");
	String cname=scan.next();
	System.out.println("Enter customer id:");
	short cid=scan.nextShort();
	System.out.println("Enter amount:");
	int amt=scan.nextInt();
	System.out.println("is account valid y/n:");
	char av=scan.next().charAt(0);
	System.out.println("Enter customer height");
	float hei=scan.nextFloat();

	System.out.println("customer id : "+cid);
	System.out.println("customer name : "+cname);
	System.out.println("fees : "+amt);
	System.out.println("is account valid : "+av);
	System.out.println("customer height : "+hei);

	scan.close();
	}
}