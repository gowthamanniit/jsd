import java.util.Scanner;

public class JumpTestContinue {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter Your Email:");
        String t=scan.next();
        int ac=0,nc=0,dc=0;
        int len=t.length();
        for(int i=0;i<len;i++)
        {
            char c=t.charAt(i);
            if(c>='a' && c<='z')
                ac++;
            if(c>='0' && c<='9')
                nc++;
            if(c=='.')
                dc++;
            if(c=='@')
              break;
        }
        System.out.println("Alphabets count:"+ac);
        System.out.println("numbers count:"+nc);
        System.out.println("digits count:"+dc);
        scan.close();
    }
}
