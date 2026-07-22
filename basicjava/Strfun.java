class Strfun{
    public static void main(String[] args) {
/*        
        String name="gowthAMAN";
        System.out.println(name.toUpperCase());
        System.out.println(name.toLowerCase());
        System.out.println(name); // immutable
        System.out.println(name.length());
        System.out.println(name.charAt(4));
        System.out.println(name.indexOf("h"));
        
        System.out.println(name.equals("gowthaman"));
        System.out.println(name.equalsIgnoreCase("gowthaman"));

        System.out.println(name.substring(5));
        System.out.println(name.substring(4,8));
        System.out.println(name.concat(" karur"));
        System.out.println(name.compareTo("arivu"));
        System.out.println(name.compareTo("manoj"));
        System.out.println("g".hashCode());
        System.out.println("a".hashCode());

*/
        String name="ashika";
        System.out.println(name.replace('a','o'));
        System.out.println("starts with :"+name.startsWith("Ashi"));
        System.out.println("starts with :"+name.startsWith("ash"));
        System.out.println("ends with :"+name.endsWith("ka"));
        System.out.println("ends with :"+name.endsWith("er"));

        System.out.println(""+name.repeat(10));
        name="kal,vi,edu,cat,ion";
        String arr[]=name.split(",");
        System.out.println(arr[0]);
        System.out.println(arr[3]);
        System.out.println(arr.length);
        
        name="eat";
        System.out.println(name.matches(".at"));
    }
}