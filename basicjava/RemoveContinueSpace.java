import java.util.Scanner;

public class RemoveContinueSpace {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter Text:");
        String text=scan.nextLine();
        int len=text.length();
        String res="";
        for(int i=0;i<len-1;i++)
        {
            char c1=text.charAt(i);
            char c2=text.charAt(i+1);
            if(c1==' ' && c2==' ')
            continue;
            else
            res=res+c1;
        }
        System.out.println(res+text.charAt(len-1));
        scan.close();
    }
}
