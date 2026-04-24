## 📖 Chapter 7: Introduction to Java & Basic Syntax

### 🌍 Real-Life Application
When you play a video game on your mobile phone or use a banking app, there is a very high chance it was built using Java! Java's motto is "Write Once, Run Anywhere," meaning the Java code you write on your Windows laptop can easily run on a Mac or Android phone.

### 🔧 Software Usage: Programiz Online Java Compiler
To avoid complex installations, we will use an online tool called Programiz to run our Java programs!
> **Steps to use Programiz Online Compiler:**
> 1. Open your web browser and search for **Programiz Java Online Compiler**.
> 2. You will see an online text editor on the left with some default `class Main` code.
> 3. The black box on the right is the **Console** where the output will appear.
> 4. Type your Java code inside the editor, and hit the blue **Run** button!
> ![Programiz Java Compiler Mockup](/images/java_compiler.png)

### 📚 7.1 Features of Java

Java is one of the most widely used programming languages in the world. Here's why it is so powerful and popular:

- **Object-Oriented**: Everything in Java is organized around "Objects" — a concept that mirrors the real world. Even the code we write lives inside a `class`.
- **Platform-Independent**: Java runs on a special engine called the **JVM (Java Virtual Machine)**. The same `.class` file runs on Windows, Mac, Linux, or Android without changes. This is what "Write Once, Run Anywhere" means.
- **Secure and Robust**: Java has built-in mechanisms to catch errors before they cause problems. It also prevents programs from directly accessing memory, making it far more secure.
- **Strongly Typed**: Every variable must have a declared type. You cannot accidentally store text in a number variable.
- **Widely Used in Industry**: Android apps, banking systems, large websites, and enterprise software are all built using Java.

### 📚 7.2 Structure of a Java Program

Every Java program has a **mandatory structure** that must be followed exactly. Think of it as a dress code — Java is very strict!

```java
// Our First Java Program!
class Application {
    public static void main(String[] args) {
        System.out.println("Hello, Grade 9!");
    }
}
```

**Breaking down the structure:**
- `class Application` — Every Java program lives inside a class. The class name should match the file name.
- `public static void main(String[] args)` — This is the **entry point** of every Java program. Execution ALWAYS starts here.
- `System.out.println(...)` — This prints text to the console followed by a new line.
- Every statement ends with a **semicolon** `;`

**Program 1 – Hello World (Your First Java Program)**
```java
class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        System.out.println("I am learning Java in Grade 9.");
        System.out.println("Java is awesome!");
    }
}
```
**Output:**
```
Hello, World!
I am learning Java in Grade 9.
Java is awesome!
```

### 📚 7.3 Variables and Data Types in Java

Java is **strictly typed** — you must declare the **type** of a variable **before** using it. Unlike Python, you cannot simply write `x = 10`; you must first say what kind of data x will hold.

| Data Type | Size | Description | Example |
|---|---|---|---|
| `int` | 4 bytes | Whole numbers | `int age = 14;` |
| `double` | 8 bytes | Decimal numbers (larger precision) | `double pi = 3.14;` |
| `char` | 2 bytes | Single character (in single quotes) | `char grade = 'A';` |
| `String` | varies | Text (in double quotes) — capital S! | `String name = "Ali";` |
| `boolean` | 1 bit | True or false only | `boolean isPresent = true;` |

**Program 2 – Variables and Data Types**
```java
class DataTypesDemo {
    public static void main(String[] args) {
        int age = 14;
        double height = 5.6;
        char initial = 'A';
        String name = "Alex";
        boolean isStudent = true;

        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Height: " + height);
        System.out.println("Initial: " + initial);
        System.out.println("Is Student: " + isStudent);
    }
}
```
**Output:**
```
Name: Alex
Age: 14
Height: 5.6
Initial: A
Is Student: true
```

**Program 3 – Arithmetic with Variables**
```java
class ArithmeticDemo {
    public static void main(String[] args) {
        int a = 20;
        int b = 6;

        System.out.println("Sum: " + (a + b));
        System.out.println("Difference: " + (a - b));
        System.out.println("Product: " + (a * b));
        System.out.println("Quotient: " + (a / b));
        System.out.println("Remainder: " + (a % b));
    }
}
```
**Output:**
```
Sum: 26
Difference: 14
Product: 120
Quotient: 3
Remainder: 2
```

### 📚 7.4 Input and Output

For output, we use `System.out.println()` (prints with a new line) or `System.out.print()` (prints on the same line).

For input, we use a special built-in tool called **`Scanner`** which must be **imported** first.

```java
import java.util.Scanner; // Import the tool

class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = scan.nextLine(); // Reads the input
        System.out.println("Welcome, " + name);
    }
}
```

**Scanner Methods you need to know:**

| Method | Reads | Example |
|---|---|---|
| `scan.nextLine()` | A full line of text | `String name = scan.nextLine();` |
| `scan.nextInt()` | An integer | `int age = scan.nextInt();` |
| `scan.nextDouble()` | A decimal number | `double price = scan.nextDouble();` |

**Program 4 – Interactive User Greeting with Scanner**
```java
import java.util.Scanner;

class Greeter {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.print("Enter your name: ");
        String name = scan.nextLine();

        System.out.print("Enter your age: ");
        int age = scan.nextInt();

        System.out.println("Hello " + name + "! You are " + age + " years old.");
        System.out.println("In 10 years, you will be " + (age + 10) + " years old.");
    }
}
```
**Output (when "Sara" and "14" are entered):**
```
Enter your name: Sara
Enter your age: 14
Hello Sara! You are 14 years old.
In 10 years, you will be 24 years old.
```

**Program 5 – Area Calculator Using Input**
```java
import java.util.Scanner;

class AreaCalculator {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.print("Enter length of rectangle: ");
        double length = scan.nextDouble();

        System.out.print("Enter width of rectangle: ");
        double width = scan.nextDouble();

        double area = length * width;
        double perimeter = 2 * (length + width);

        System.out.println("Area: " + area);
        System.out.println("Perimeter: " + perimeter);
    }
}
```
**Output (when 8.0 and 5.0 are entered):**
```
Enter length of rectangle: 8.0
Enter width of rectangle: 5.0
Area: 40.0
Perimeter: 26.0
```

**Program 6 – Temperature Converter in Java**
```java
import java.util.Scanner;

class TempConverter {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.print("Enter temperature in Celsius: ");
        double celsius = scan.nextDouble();

        double fahrenheit = (celsius * 9.0 / 5.0) + 32;
        double kelvin = celsius + 273.15;

        System.out.println(celsius + "°C = " + fahrenheit + "°F");
        System.out.println(celsius + "°C = " + kelvin + " K");
    }
}
```
**Output (when 100 is entered):**
```
Enter temperature in Celsius: 100
100.0°C = 212.0°F
100.0°C = 373.15 K
```

---

### 💡 Did You Know?
Java was originally called "Oak" after an oak tree that stood outside the creator's office!

### ⚠️ Common Errors
- Forgetting the semicolon (`;`) at the end of each statement. Java will crash!
- Using `string` instead of `String` (capital 'S'). Java is case-sensitive!
- Using `=` instead of `==` in comparisons.
- Forgetting to `import java.util.Scanner;` before using the Scanner class.

### 📝 Quick Recap
- Java applications span web, mobile, and enterprise platforms.
- `class` and `public static void main(String[] args)` are mandatory structures.
- Variables must have explicit data types (`int`, `double`, `boolean`, `String`).
- `Scanner` is used to get user input from the console.
- Every statement in Java must end with a semicolon `;`.

---

### 🧪 Lab Activity 7
**Objective:** Create an interactive Java Greeter that asks for age and name.
**Required Tools:** Programiz Online Java Compiler.
**Step-by-step Procedure:**
1. Open Programiz. Ensure the `Main` class template is intact.
2. Import `java.util.Scanner` at the very top.
3. Inside `main`, create a `Scanner` object.
4. Ask the user for their name (`nextLine()`) and their age (`nextInt()`).
5. Print a combined greeting using `System.out.println`.
**Expected Output:** "Hi John, I see you are 14 years old!"
**Conclusion:** Students successfully master Java structure and the Scanner class.

---

### 🧠 Exercises

**A. Fill in the Blanks**
1. The motto of Java is "Write once, run ________".
2. Every Java program must have a ________ class.
3. The main starting point of execution in Java is the ________ method.
4. We use the ________ class to read input from a user.
5. In Java, simple text must be wrapped in ________ quotes.
6. Every Java statement must end with a ________.
7. `System.out.println()` adds a ________ after the printed text.
8. The JVM stands for Java ________ Machine.
9. In Java, a single character is stored using the ________ data type.
10. To import the Scanner class, we write `import java.util.________`.

**B. True or False**
1. Java code requires strict data type assignments.
2. `system.out.println()` is the exact correct syntax.
3. Variables in Java do not require a semicolon at the end of declaration.
4. `double` is used to store decimal numbers in Java.
5. Programiz is an offline installed software.
6. Java is considered a platform-independent language.
7. `char` in Java uses single quotes, not double quotes.
8. `scan.nextLine()` reads an integer value.
9. Java was originally called "Oak".
10. The `boolean` data type stores the values 0 and 1.

**C. Answer in One Word**
1. What Java keyword creates a blueprint/container for the program?
2. What punctuation marks the end of a regular Java statement?
3. Which single letter data type is wrapped in single quotes?
4. What library/tool is imported to help with inputs?
5. The entry method for every Java program is called?
6. Which method of Scanner reads an entire line of text?
7. What Java data type stores true/false values?
8. What does JVM stand for (just the abbreviation)?
9. Which data type stores large decimal numbers in Java?
10. What is the original name Java had before it was renamed?

**D. Multiple Choice Questions (MCQs)**
1. Who developed Java? (a) Apple (b) Sun Microsystems (c) Microsoft (d) Google
2. Which data type is used for true/false? (a) Boolean (b) boolean (c) TrueFalse (d) bool
3. What is the correct way to output "Hello" in Java? (a) print("Hello"); (b) Console.writeline("Hello"); (c) System.out.println("Hello"); (d) echo "Hello";
4. Which error occurs when a semicolon is missed? (a) Logic Error (b) Syntax Error (c) Runtime Error (d) OS Error
5. Which statement reads an integer? (a) nextInt() (b) nextInteger() (c) readInt() (d) getInt()
6. What is the entry point method of every Java program? (a) start() (b) run() (c) main() (d) begin()
7. Which import statement enables input? (a) import java.io.Scanner; (b) import util.Scanner; (c) import java.util.Scanner; (d) include Scanner;
8. The correct way to declare an integer variable in Java is? (a) variable age = 14; (b) int age = 14; (c) age int = 14; (d) declare age as int;
9. What does `System.out.print()` do differently from `System.out.println()`? (a) Prints in red (b) Does not add a new line (c) Adds two new lines (d) Prints in uppercase
10. What is Java's famous cross-platform motto? (a) Think Different (b) Just Do It (c) Write Once, Run Anywhere (d) Code Once, Test Everywhere

**E. Short Answer Questions**
1. Why is Java referred to as "Platform Independent"?
2. What is the role of `public static void main`?
3. Describe the difference between `System.out.println()` and `System.out.print()`.
4. What does "strictly typed" mean in Java? How is it different from Python?
5. Explain the purpose of importing `java.util.Scanner`.
6. What would happen if you wrote `int age = "fourteen";` in Java?
7. List three features of Java and briefly explain each.
8. Why is the semicolon important in Java? What happens if you forget it?

**F. Programming Exercises**
1. Write a Java program that declares three variables (`int`, `double`, `String`) and prints them.
2. Write a program using `Scanner` that asks for two numbers and prints their sum.
3. Write a Java program to print the area of a square using hard-coded side values.
4. Write a Java program that asks the user for their name and birth year, then calculates and prints their age.
5. Write a Java program to display the result of all arithmetic operations (+, -, *, /, %) on two numbers entered by the user.
6. Create a program that prints a personal ID card: ask for name, age, school name, and grade, then print them in a formatted box.
7. Write a Java program that calculates and prints the perimeter and area of a circle when the radius is given (use `Math.PI`).
8. Write a program that takes a temperature in Celsius from the user and prints whether it is "Hot" (>30), "Warm" (20-30), or "Cold" (<20).



## 📖 Chapter 8: Control Statements in Java

### 🌍 Real-Life Application
Think about a traffic light system! "IF the light is red, STOP. ELSE IF the light is green, GO." Without control statements, a Java application would just run every single line of code from top to bottom without thinking. Control statements create intelligence!

### 📚 8.1 Conditional Statements (`if-else`)

Java's `if-else` works similarly to Python, but with important syntax differences:
- Conditions must be inside **parentheses** `( )`
- Code blocks are defined with **curly braces** `{ }`
- Every statement inside the block ends with a **semicolon** `;`

**Program 1 – Basic If-Else: Speed Check**
```java
class SpeedCheck {
    public static void main(String[] args) {
        int speed = 70;

        if (speed > 60) {
            System.out.println("Warning: Overspeeding!");
            System.out.println("Please slow down.");
        } else {
            System.out.println("Safe driving. Well done!");
        }
    }
}
```
**Output:**
```
Warning: Overspeeding!
Please slow down.
```

**Program 2 – If-Else-If Chain: Grade System**
```java
import java.util.Scanner;

class GradeCalculator {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter your marks (0-100): ");
        int marks = scan.nextInt();

        if (marks >= 90) {
            System.out.println("Grade: A+ — Outstanding!");
        } else if (marks >= 80) {
            System.out.println("Grade: A — Excellent!");
        } else if (marks >= 70) {
            System.out.println("Grade: B — Good Job!");
        } else if (marks >= 60) {
            System.out.println("Grade: C — Average");
        } else {
            System.out.println("Grade: F — Needs Improvement");
        }
    }
}
```
**Output (when 85 is entered):**
```
Enter your marks (0-100): 85
Grade: A — Excellent!
```

### 📚 8.2 The `switch` Statement

Instead of a long chain of `if-else` blocks, `switch` makes code more elegant when you're checking the **same variable** against many specific values. The `break` keyword is critical — it stops the program from "falling through" to the next case.

**Program 3 – Switch Statement: Day of Week**
```java
class DayFinder {
    public static void main(String[] args) {
        int day = 3;

        switch (day) {
            case 1:
                System.out.println("Monday");
                break;
            case 2:
                System.out.println("Tuesday");
                break;
            case 3:
                System.out.println("Wednesday");  // This executes!
                break;
            case 4:
                System.out.println("Thursday");
                break;
            case 5:
                System.out.println("Friday");
                break;
            default:
                System.out.println("Weekend!");
        }
    }
}
```
**Output:**
```
Wednesday
```

![Switch Statement Train Tracks](/images/switch_tracks.png)

**Program 4 – Switch with Scanner: Vending Machine**
```java
import java.util.Scanner;

class VendingMachine {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("=== Vending Machine ===");
        System.out.println("1. Soda - $1.00");
        System.out.println("2. Chips - $0.75");
        System.out.println("3. Candy - $0.50");
        System.out.print("Enter your choice (1-3): ");
        int choice = scan.nextInt();

        switch (choice) {
            case 1:
                System.out.println("Dispensing: Soda 🥤");
                break;
            case 2:
                System.out.println("Dispensing: Chips 🍟");
                break;
            case 3:
                System.out.println("Dispensing: Candy 🍬");
                break;
            default:
                System.out.println("Invalid choice. Please try again.");
        }
    }
}
```
**Output (when 2 is entered):**
```
=== Vending Machine ===
1. Soda - $1.00
2. Chips - $0.75
3. Candy - $0.50
Enter your choice (1-3): 2
Dispensing: Chips 🍟
```

### 📚 8.3 Loops in Java

Java has three types of loops. Java uses slightly different loop syntax than Python — always requiring `{}` and `;` rules!

**The `while` loop:**
Checks the condition *before* entering the loop. Perfect when you don't know how many times to iterate.

**Program 5 – While Loop: Counting Up**
```java
class WhileDemo {
    public static void main(String[] args) {
        int count = 1;

        while (count <= 5) {
            System.out.println("Hello! Iteration #" + count);
            count++;  // count++ means count = count + 1
        }
        System.out.println("Loop finished!");
    }
}
```
**Output:**
```
Hello! Iteration #1
Hello! Iteration #2
Hello! Iteration #3
Hello! Iteration #4
Hello! Iteration #5
Loop finished!
```

**The `do-while` loop:**
Will execute the code body *at least once*, even if the condition is false from the very beginning! It checks the condition at the END.

**Program 6 – Do-While: Password Prompt**
```java
import java.util.Scanner;

class PasswordChecker {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String password;

        do {
            System.out.print("Enter password: ");
            password = scan.nextLine();

            if (!password.equals("secret123")) {
                System.out.println("Wrong password! Try again.");
            }
        } while (!password.equals("secret123"));

        System.out.println("Access granted! Welcome.");
    }
}
```
**Output (sample run):**
```
Enter password: hello
Wrong password! Try again.
Enter password: abc
Wrong password! Try again.
Enter password: secret123
Access granted! Welcome.
```

**The `for` loop:**
Puts everything (initialization, condition, increment) on one line. Best when you know **exactly how many times** to loop.

**Program 7 – For Loop: Multiplication Table**
```java
class MultiplicationTable {
    public static void main(String[] args) {
        int num = 5;
        System.out.println("Multiplication Table of " + num + ":");

        for (int i = 1; i <= 10; i++) {
            System.out.println(num + " x " + i + " = " + (num * i));
        }
    }
}
```
**Output:**
```
Multiplication Table of 5:
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
```

**Program 8 – Nested For Loops: Pattern Printing**
```java
class StarPattern {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();  // Move to next line
        }
    }
}
```
**Output:**
```
* 
* * 
* * * 
* * * * 
* * * * * 
```

---

### 💡 Did You Know?
The `break` word in a switch statement is super important! If you forget it, the code will accidentally execute all the cases below it. This is called "Fall-through"!

### ⚠️ Common Errors
- Typing `if (x = 10)` instead of `if (x == 10)`. Remember, `==` is for comparison!
- Forgetting to increase the counting variable in a `while` loop, leading to an Infinite Loop that freezes your computer!
- Forgetting `break` in a switch statement causes fall-through to next cases.
- Off-by-one errors: Using `i < 10` when you meant `i <= 10`.

### 📝 Quick Recap
- `if-else` executes code blocks conditionally in Java using `()` and `{}`.
- `switch` neatly organizes multiple conditions based on one changing value.
- `for` loops are compact when iterations are known.
- `while` loops repeat while a condition is true.
- `do-while` ensures a loop runs minimally one time.

---

### 🧪 Lab Activity 8
**Objective:** Create a vending machine simulator using a `switch` statement.
**Required Tools:** Programiz Online Java Compiler.
**Step-by-step Procedure:**
1. Import `Scanner` and setup the class.
2. Print options: "1: Soda, 2: Chips, 3: Candy".
3. Use `Scanner` to read an integer choice.
4. Setup a `switch(choice)` block with `case 1`, `case 2`, etc.
5. Print the item dispensed. Remember to add `break;`!
**Expected Output:** Dispenses the targeted item or returns "Invalid Choice" in default.
**Conclusion:** Students master switch-case conditional flow.

---

### 🧠 Exercises

**A. Fill in the Blanks**
1. The block of an `if` statement is enclosed using ________.
2. The keyword used to end a `case` in a switch block is ________.
3. The ________ loop executes the code body at least once.
4. `count++` is a shorthand for incrementing a variable by ________.
5. The `else` statement handles the case when the `if` condition evaluates to ________.
6. In a `for` loop, the three parts are initialization, ________, and update.
7. A `while` loop checks its condition ________ the loop body executes.
8. The `default` case in a switch runs when ________ other case matches.
9. The `!=` operator means ________.
10. Forgetting `break` in a switch causes ________ to the next case.

**B. True or False**
1. A switch case can operate on string values in modern Java.
2. A `for` loop requires exactly 3 parameters defined in its parenthesis.
3. Curly braces are optional if an `if` statement has multiple lines of code.
4. A `while` loop checks the condition at the very end of the loop.
5. Infinite loops happen when loop conditions never evaluate to false.
6. `do-while` is guaranteed to execute at least one time.
7. The `break` statement exits only the innermost loop or switch.
8. `i++` and `i = i + 1` are equivalent.
9. It is possible to have a `for` loop with no update expression.
10. A `switch` statement must always have a `default` case.

**C. Answer in One Word**
1. Which keyword acts as a catch-all if no cases match in a switch statement?
2. What loop combines initialization, condition, and incrementing on one line?
3. What operator checks if two variables are equal?
4. What happens when a loop has no update condition? (It becomes...)
5. Which statement guarantees minimum one execution?
6. What keyword in Java exits a loop or switch immediately?
7. What operator increments a variable by 1?
8. What does `i--` do to variable i?
9. What is the term for when a switch case runs into the next case without stopping?
10. Which loop is best when the exact number of iterations is known?

**D. Multiple Choice Questions (MCQs)**
1. What evaluates conditions conditionally? (a) Classes (b) Variables (c) if-else (d) Scanners
2. How do you denote 'Not Equal' in Java? (a) != (b) =! (c) !! (d) <>
3. A switch works best as an alternative to: (a) loops (b) variables (c) long if-else-if chains (d) importing
4. What runs conditionally *while* a condition is active? (a) while loop (b) var loop (c) switch (d) if loop
5. In `for(int i=0; i<5; i++)`, what does `i++` do? (a) decreases by 2 (b) increases by 1 (c) increases by i (d) resets
6. What does the `default` keyword do in a switch? (a) Declares a variable (b) Handles unmatched cases (c) Ends the program (d) Removes a case
7. How many times will a `do-while` loop run if its condition is false from the start? (a) 0 (b) 1 (c) 2 (d) Infinite
8. What is the correct for loop syntax? (a) for i in range (b) for (int i=0; i<5; i++) (c) for i=0 to 5 (d) loop(i, 5)
9. Which is NOT a valid loop type in Java? (a) for (b) while (c) do-while (d) repeat-until
10. What will happen if `break` is removed from all cases in a switch that matches case 2 out of 5? (a) Only case 2 runs (b) Cases 2, 3, 4, 5 all run (c) An error occurs (d) Nothing runs

**E. Short Answer Questions**
1. Explain the "Fall-through" effect in a switch statement.
2. Compare a `while` loop to a `do-while` loop. When would you use each?
3. Correct this code: `if age > 18 System.out.println("Adult");`
4. Write the `for` loop syntax and explain each of the three parts.
5. What is an infinite loop? Give an example of code that creates one and how to fix it.
6. Explain when `switch` is preferred over `if-else-if`.
7. What is the difference between `i++` and `++i` in Java?
8. Explain nested loops with a simple diagram or example.

**F. Programming Exercises**
1. Write a Java program that takes a number and uses `if-else` to print if it is positive or negative.
2. Use a `for` loop to print numbers from 10 down to 1.
3. Build a "Discount Calculator": Using an `if-else` chain, apply a 20% discount if spending > 1000, 10% if > 500.
4. Write a Java program using a `switch` statement that prints the name of a month when given its number (1=January, 2=February, etc.).
5. Write a Java program that uses a `while` loop to find and print all multiples of 3 between 1 and 50.
6. Create a program using nested `for` loops to print a 5×5 grid of asterisks.
7. Write a `do-while` loop program that asks the user to enter a positive number and keeps asking until they do.
8. Write a Java program that uses a `for` loop to calculate the sum of all even numbers from 1 to 100.



## 📖 Chapter 9: Basic Java Programming

### 🌍 Real-Life Application
When you log into your school portal, there are systems managing hundreds of student names at once, and mini-systems to calculate grades! Java manages collections of data using **Arrays** and organizes actions using **Methods** (Java's version of functions). 

### 📚 9.1 Methods in Java

We learned about functions in Python. In Java, when functions live inside a `class`, we call them **Methods**. Methods organize our code into logical, reusable units.

**Why use Methods?**
- Avoids writing the same code multiple times
- Makes code easier to read and maintain
- Allows testing individual pieces of the program

**Key syntax differences from Python functions:**
- You must declare the **return type** before the method name (e.g., `int`, `double`, `void`)
- If the method returns nothing, use `void`
- We use `static` so we can call the method directly in `main` without creating objects

**Program 1 – Method with No Return (void)**
```java
class Greeter {
    static void printGreeting() {
        System.out.println("===================");
        System.out.println("  Welcome to Java!  ");
        System.out.println("===================");
    }

    public static void main(String[] args) {
        printGreeting();   // Calling the method
        printGreeting();   // Can call it multiple times!
    }
}
```
**Output:**
```
===================
  Welcome to Java!  
===================
===================
  Welcome to Java!  
===================
```

**Program 2 – Method with Parameters and Return Value**
```java
class Calculator {
    // A method to multiply numbers
    static int multiply(int a, int b) {
        return a * b;
    }

    static double divide(double a, double b) {
        return a / b;
    }

    public static void main(String[] args) {
        int product = multiply(5, 4);
        double quotient = divide(10.0, 3.0);

        System.out.println("5 x 4 = " + product);
        System.out.println("10 / 3 = " + quotient);
    }
}
```
**Output:**
```
5 x 4 = 20
10 / 3 = 3.3333333333333335
```

**Program 3 – Method Calling Another Method**
```java
class ShapeCalculator {
    static double circleArea(double radius) {
        return Math.PI * radius * radius;
    }

    static double squareArea(double side) {
        return side * side;
    }

    static void printReport(double radius, double side) {
        System.out.println("Circle area (r=" + radius + "): " + circleArea(radius));
        System.out.println("Square area (s=" + side + "): " + squareArea(side));
    }

    public static void main(String[] args) {
        printReport(5.0, 4.0);
    }
}
```
**Output:**
```
Circle area (r=5.0): 78.53981633974483
Square area (s=4.0): 16.0
```

### 📚 9.2 Basic Introduction to Arrays

Imagine trying to store the scores of 50 students. Creating 50 variables (`score1`, `score2`...) is terrible! Instead, we use an **Array**: a single variable that holds a list of items of the *same data type*.

**Arrays are like a row of lockers:** Each locker (element) is numbered starting from **0**, and all lockers are the same size (same data type).

**Creating an Array:**
```java
// Method 1: Declare and initialize with values
int[] scores = {90, 85, 95, 80};

// Method 2: Declare size first, fill later
int[] marks = new int[5];  // 5 slots, all start at 0
marks[0] = 75;
marks[1] = 88;
```

![Array Indexing Lockers](/images/array_lockers.png)

### 📚 9.3 Accessing Array Elements

In Java (and Python!), indexing starts at **0**, not 1!

```
Array:   {90, 85, 95, 80}
Index:     0   1   2   3
```

**Program 4 – Creating, Accessing, and Modifying Arrays**
```java
class ArrayDemo {
    public static void main(String[] args) {
        int[] scores = {90, 85, 95, 80};

        System.out.println("First score: " + scores[0]);   // 90
        System.out.println("Third score: " + scores[2]);   // 95

        // Modifying a value
        scores[1] = 88;
        System.out.println("Updated second score: " + scores[1]);  // 88

        // Array length
        System.out.println("Total scores stored: " + scores.length);
    }
}
```
**Output:**
```
First score: 90
Third score: 95
Updated second score: 88
Total scores stored: 4
```

### 📚 9.4 Loops and Arrays Together

The most powerful combination in Java is a `for` loop working through an array using the `.length` property.

**Program 5 – Printing All Array Elements with a Loop**
```java
class PrintArray {
    public static void main(String[] args) {
        String[] cars = {"Volvo", "BMW", "Ford", "Toyota"};

        System.out.println("Car List:");
        for (int i = 0; i < cars.length; i++) {
            System.out.println((i + 1) + ". " + cars[i]);
        }
    }
}
```
**Output:**
```
Car List:
1. Volvo
2. BMW
3. Ford
4. Toyota
```

**Program 6 – Calculating Sum and Average of Array**
```java
class ArrayStats {
    public static void main(String[] args) {
        int[] marks = {75, 88, 92, 60, 85};
        int sum = 0;

        for (int i = 0; i < marks.length; i++) {
            sum += marks[i];   // sum = sum + marks[i]
        }

        double average = (double) sum / marks.length;

        System.out.println("Total marks: " + sum);
        System.out.println("Average marks: " + average);
    }
}
```
**Output:**
```
Total marks: 400
Average marks: 80.0
```

**Program 7 – Finding Maximum Value in an Array**
```java
class FindMax {
    public static void main(String[] args) {
        int[] numbers = {42, 17, 95, 33, 58, 81};
        int max = numbers[0];  // Assume first is the largest

        for (int i = 1; i < numbers.length; i++) {
            if (numbers[i] > max) {
                max = numbers[i];  // Update if we find something bigger
            }
        }

        System.out.println("The largest number is: " + max);
    }
}
```
**Output:**
```
The largest number is: 95
```

**Program 8 – String Array with Methods**
```java
class StudentRoster {
    static void printRoster(String[] students) {
        System.out.println("=== Class Roster ===");
        for (int i = 0; i < students.length; i++) {
            System.out.println("Student " + (i + 1) + ": " + students[i]);
        }
        System.out.println("Total students: " + students.length);
    }

    public static void main(String[] args) {
        String[] classA = {"Alice", "Bob", "Charlie", "Diana", "Eve"};
        printRoster(classA);
    }
}
```
**Output:**
```
=== Class Roster ===
Student 1: Alice
Student 2: Bob
Student 3: Charlie
Student 4: Diana
Student 5: Eve
Total students: 5
```

---

### 💡 Did You Know?
Arrays in Java are fixed in size. Once you declare an array to hold 5 items, you cannot magically make it hold 6. You'd have to create an entirely new array! Java also has `ArrayList` which can grow dynamically, but that's for a higher grade.

### ⚠️ Common Errors
- `ArrayIndexOutOfBoundsException`: This scary error happens if an array has 3 items (indexes 0, 1, 2) and you try to ask Java to print index 5!
- Forgetting the square brackets `[]` when declaring an array: `int scores = {1, 2};` is wrong!
- Using `=` instead of `==` when comparing values in conditions inside a loop.

### 📝 Quick Recap
- Methods break your Java code into reusable manageable blocks.
- The `return` keyword is used in methods to pass values back.
- Arrays store multiple variables of the same type under one name.
- Indexing an array starts precisely at 0.
- Loops are the best companion to process data through an array efficiently.
- `array.length` gives you the number of elements in the array.

---

### 🧪 Lab Activity 9
**Objective:** Create a program that sums up all scores in an Array.
**Required Tools:** Programiz Online Java Compiler.
**Step-by-step Procedure:**
1. Inside the `main` method, create an integer array: `int[] marks = {10, 20, 30, 40, 50};`
2. Create sum variable: `int sum = 0;`
3. Use a `for` loop `(int i = 0; i < marks.length; i++)`
4. Inside the loop, add the current element to sum: `sum = sum + marks[i];`
5. Print the final `sum` outside the loop.
**Expected Output:** Exits with sum value `150`.
**Conclusion:** Students learn to iterate efficiently and process array data.

---

### 🧠 Exercises

**A. Fill in the Blanks**
1. In Java, functions inside a class are referred to as ________.
2. A single variable storing multiple values of the same type is called an ________.
3. The first position in an array is index ________.
4. To find how many items are in an array, we use the `.`________ property.
5. The return type of a method that does not return anything is ________.
6. The keyword used to allow calling a method from `main` without an object is ________.
7. An array with 5 elements has valid indices from ________ to ________.
8. `int[] arr = new int[3];` creates an array of size ________.
9. The error thrown when you access an index outside the array size is ________.
10. To pass an array to a method, you write the parameter type with ________ after it.

**B. True or False**
1. You can store both Strings and Integers inside the same standard integer array.
2. Java array sizes can be expanded after they are created.
3. `a * b` is a valid instruction to return early out of a method.
4. `scores[3]` accesses the 4th element in an array.
5. In Java, a method must specify its return data type in its header.
6. A `void` method can use the `return` keyword to exit early.
7. `array.length` is a method call (uses parentheses).
8. A while loop can also be used to iterate through an array.
9. Two different Java methods can have the same name if parameters differ (overloading).
10. `static` methods can only be called from within the same class.

**C. Answer in One Word**
1. What marks the parameter space in a Java method?
2. What brackets are used in array declaration?
3. What exception is thrown when accessing a non-existent index?
4. What is the indexing starting number in Java?
5. The keyword telling a method to execute without object creation?
6. What property gives the size of an array?
7. What is the data type of `"Hello"` in Java?
8. What return type is used when a method doesn't return a value?
9. What is the term for methods with the same name but different parameters?
10. Which Java class provides useful math methods like `Math.PI` and `Math.pow()`?

**D. Multiple Choice Questions (MCQs)**
1. What defines an array? (a) int nums[] (b) int nums{} (c) arr num () (d) double = []
2. Which index points to the 3rd item? (a) 3 (b) 2 (c) 1 (d) 4
3. How do you find an array's size? (a) size() (b) cap() (c) length (d) items
4. What replaces functions in Java? (a) Objects (b) Classes (c) Methods (d) Variances
5. A void method returns: (a) String (b) Int (c) Null (d) Nothing
6. Given `int[] arr = {5, 10, 15, 20}`, what is `arr[2]`? (a) 5 (b) 10 (c) 15 (d) 20
7. What causes an ArrayIndexOutOfBoundsException? (a) Wrong type (b) Accessing invalid index (c) Empty array (d) Missing semicolon
8. Which loop is most efficient for iterating through all array elements? (a) do-while (b) switch (c) for loop with length (d) if-else
9. What is the default value of an `int` array element when created with `new int[5]`? (a) null (b) 1 (c) 0 (d) -1
10. Which correctly passes an array to a method? (a) method(int[] arr) call: method(myArray) (b) method(int arr[]) call: method{myArray} (c) method[] call: method<myArray> (d) method(arr[]) call: method[myArray]

**E. Short Answer Questions**
1. What is the benefit of using an array instead of variables?
2. Write a method outline that returns a decimal sum of two double parameters.
3. What causes an `ArrayIndexOutOfBoundsException`?
4. Explain the difference between `int[] arr = {1,2,3}` and `int[] arr = new int[3]`.
5. Why do we use `static` keyword with methods when calling them from `main`?
6. What is the return type of a method that calculates the average and returns it as a decimal?
7. Describe the relationship between arrays and for loops in Java. Why do they work so well together?
8. What would happen if you try to assign a `String` value to an `int[]` array?

**F. Programming Exercises**
1. Write a Java method `isEven(int number)` that returns `true` if even, and `false` if odd.
2. Create a string array holding 3 of your friends' names and print them using a `for` loop.
3. Write a Java program that creates an array `{5, 10, 15, 20}`, updates the '10' to '12', and then prints the whole array.
4. Write a Java method `findMin(int[] arr)` that returns the smallest number in a given integer array.
5. Create a Java program that takes 5 integer inputs from the user, stores them in an array, and prints their sum and average.
6. Write a Java program that reverses and prints an integer array `{1, 2, 3, 4, 5}` — output should be `5 4 3 2 1`.
7. Create a method `countEven(int[] arr)` that returns how many even numbers are in the array.
8. Write a Java program that stores 5 student names in a String array and prints them in alphabetical order using a bubble sort approach.

---
*End of Textbook*
