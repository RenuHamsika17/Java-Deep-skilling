public class Main {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        logger1.log("First log message");

        Logger logger2 = Logger.getInstance();
        logger2.log("Second log message");

        // Check if both references point to the same object
        System.out.println(logger1 == logger2);  // This will print 'true'
    }

}
