import java.util.Scanner;
public class SwitchDemo {
    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter 2 numbres:");
        int a=scan.nextInt();
        int b=scan.nextInt();
        System.out.println("a.add s.sub m.mul d.div r. remainder Enter Your choice:");
        int ch=scan.next().charAt(0);
        switch(ch)
        {
            case 'a':case 'A':
                    System.out.println("addition:"+(a+b));
                    break;
            case 's':case 'S':
                    System.out.println("subtraction:"+(a-b));
                    break;
            case 'm':case 'M':
                    System.out.println("multiplication:"+(a*b));
                    break;                    
            case 'd':case 'D':
                    System.out.println("division:"+(a/b));
                    break;                    
            case 'r':case 'R':
                    System.out.println("remainder:"+(a%b));
                    break;
            default:
                    System.out.println("Enter correct choice");

        }
        scan.close();
    }
}
