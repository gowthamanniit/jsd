package databasework;
import java.sql.*;
import java.util.Scanner;
public class Pgm3 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan=new Scanner(System.in);
		System.out.println("Enter rno to be deleted:");
		int rno=scan.nextInt();
		
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			System.out.println("driver accepted");
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/jsd", "root", "12345");
			System.out.println("Connection Success");
			
			// ---- delete data 
			Statement st=con.createStatement();
			int res=st.executeUpdate("delete from student where rno="+rno);
			if(res==1)
			{
				System.out.println("successfully deleted");
			}
			else
			{
				System.out.println("not deleted because record not found");
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
