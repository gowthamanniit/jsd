import java.util.Scanner;

public class Vowels {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter Your Name:");
        String name=scan.next();
        int len=name.length();
        int cnt=0;
        for(int i=0;i<len;i++)
        {
        //    if (name.charAt(i)=='a' || name.charAt(i)=='e' || name.charAt(i)=='i' || name.charAt(i)=='o' || name.charAt(i)=='u')
        char c=name.charAt(i);
        switch(c)
        {
            case 'a':case 'e': case 'i': case 'o':case 'u':
            case 'A':case 'E': case 'I': case 'O':case 'U':
            System.out.print(" "+name.charAt(i));
            cnt++;
        }
       }
System.out.println(" ("+cnt+")");
    }
}
