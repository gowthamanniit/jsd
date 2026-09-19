package advancedjava;
import java.util.InputMismatchException;
import java.util.Scanner;
public class ExceptionDemo {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);        
        try
        {
            System.out.println("Enter 2 numbers:");
            int a=scan.nextInt();
            int b=scan.nextInt();
            int c=a%b;
            System.out.println("Remainder value:"+c);
            System.out.print("Enter array size:");
            int size=scan.nextInt();
            int arr[]=new int[size];
            System.out.println("array size accepted");
            int brr[]={11,22,33};
            System.out.println("2nd index:"+brr[2]);
            System.out.println("ok index");
        }
        catch(ArithmeticException e)
        {
            System.out.println("Arithmetic exception");
        }
        catch(InputMismatchException e)
        {
            System.out.println("Don't Type  text type only numbers");
        }
        catch(NegativeArraySizeException e)
        {
            System.out.println("Array size only +ve");
        }
        catch(ArrayIndexOutOfBoundsException e)
        {
            System.out.println("array index out of range");
        }
        scan.close();
    }
}