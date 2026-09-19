package databasework;
import java.sql.*;
import java.util.Scanner;
public class Pgm2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan=new Scanner(System.in);
		System.out.println("Enter rno sname mark result:");
		int rno=scan.nextInt();
		String sname=scan.next();
		float mark=scan.nextFloat();
		String result=scan.next();
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			System.out.println("driver accepted");
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/jsd", "root", "12345");
			System.out.println("Connection Success");
			
			// ---- insert data 
			Statement st=con.createStatement();
			int res=st.executeUpdate("insert into student values("+rno+",'"+sname+"',"+mark+",'"+result+"')");
			if(res==1)
			{
				System.out.println("successfully inserted");
			}
			else
			{
				System.out.println("not inserted");
			}			
			
			 st.close(); con.close();
			//=================================end=========
			
			
		}
		catch(Exception e)
		{
			System.out.println("Error Reason:"+e.toString());
		}
	}

}
