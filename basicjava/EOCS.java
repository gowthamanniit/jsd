import java.util.Scanner;
public class EOCS {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("ENter N value:");
        long n=scan.nextLong();
        long seven=0,sodd=0,ceven=0,codd=0,edis=0,odis=0;
        int te=1,to=1;
        while(n!=0)
        {
            long rem=n%10;
            if(rem%2==0)
            {
                seven=seven+rem;
                ceven++;
                //edis=edis*10+rem;
                edis=edis+rem*te; // 0+4*1     4+2*10 =24
                te=te*10; // 1*10     10*10 
            }
            else
            {
                sodd=sodd+rem;
                codd++;
                //odis=odis*10+rem;
                odis=odis+rem*to;
                to=to*10;
            }
            n=n/10;
        }
    
        System.out.println("Display Even Numbers:"+edis);
        System.out.println("count Even Numbers:"+ceven);
        System.out.println("sum Even Numbers:"+seven);
        System.out.println("Display Odd Numbers:"+odis);
        System.out.println("count odd Numbers:"+codd);
        System.out.println("sum odd Numbers:"+sodd);
        scan.close();
    }
}
