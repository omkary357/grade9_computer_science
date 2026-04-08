# 📘 Grade 9 Computer Science

*Visual Design Note for Publisher: Use a fun, modern layout. Python chapters should use an accent of Navy Blue and Yellow. Java chapters should use an accent of Crimson Red and Teal. Use rounded corners for boxes and playful icon sets.*

---

# 🐍 SECTION 1: PYTHON PROGRAMMING

---

## 📖 Chapter 1: Revision of Python Basics
*(Color scheme: Navy Blue headings with Yellow callout boxes)*

### 🌍 Real-Life Application
Imagine you are the manager of an amusement park. You need to check if a person is tall enough for a ride (Conditions) and let 50 people in, one by one (Loops). Python helps us give these logical instructions to a computer!

### 🔧 Software Usage: Python IDLE
We will use **IDLE** to run our Python programs.
> **Steps to use IDLE:**
> 1. Open Python IDLE on your computer.
> 2. The **Interactive Shell** (`>>>`) opens first. It’s a great place to test 1-line codes!
> 3. To write a proper program, click `File > New File`.
> 4. Type your program, click `Run > Run Module` (or press F5), and see the magic!
> 
> ![Python IDLE Interface](/images/python_idle.png)

### 📚 1.1 Data Types and Variables
Variables are like labeled boxes that store data. Python has different box types:

| Data Type | Keyword | Description | Example |
|---|---|---|---|
| **Integer** | `int` | Whole numbers | `age = 14` |
| **Float** | `float` | Decimal numbers | `height = 5.5` |
| **String** | `str` | Text, wrapped in quotes | `name = "Alice"` |
| **Boolean** | `bool` | True or False values | `is_student = True` |

![Variable memory box](/images/variable_box.png)

### 📚 1.2 Operators
Operators are special symbols used to do math or make comparisons.
| Type | Examples | What it does |
|---|---|---|
| **Arithmetic** | `+`, `-`, `*`, `/` | Solves math problems (e.g., `5 + 3 = 8`) |
| **Relational** | `>`, `<`, `==`, `!=` | Compares values (e.g., `5 > 3` is True) |
| **Logical** | `and`, `or`, `not` | Combines conditions |

### 📚 1.3 Conditional Constructs
We use `if`, `elif`, and `else` when the program needs to make a decision.
```python
marks = 85
if marks >= 90:
    print("Grade A")
elif marks >= 80:
    print("Grade B") # This will be printed!
else:
    print("Keep Trying")
```

### 📚 1.4 Iterative Constructs (Loops)
Loops let us repeat tasks continuously without writing the same code again!
- **`for` loop**: Used when you know *how many times* to repeat something.
- **`while` loop**: Used when you want to repeat *until a condition becomes false*.

![While Loop Flowchart](/images/while_loop_flowchart.png)

---

### 💡 Did You Know?
Python is named after a comedy television show called "Monty Python's Flying Circus", not the snake!

### ⚠️ Common Errors
- Forgetting the colon (`:`) at the end of an `if` or `for` statement.
- Messing up **indentation** (spacing). Python gets very angry if blocks of code aren't aligned properly!

### 📝 Quick Recap
- Variables store data types like integers, strings, floats, and booleans.
- Operators compare values or perform arithmetic.
- Conditions (`if-elif-else`) help computers make branching decisions.
- Loops (`for`, `while`) help repeat tasks efficiently.

---

### 🧪 Lab Activity 1
**Objective:** Create a program that acts as an Amusement Park Ticket Checker.
**Required Tools:** Python IDLE.
**Step-by-step Procedure:**
1. Open IDLE and open a New File.
2. Type a program that takes an age as input: `age = int(input("Enter your age: "))`
3. Use an `if-else` block to print "Ticket price is $10" if age is under 12, else "$15".
4. Run the program with F5.
**Expected Output:** When 10 is entered, it prints `$10`.
**Conclusion:** Students understand input collection and conditional branching!

---

### 🧠 Exercises

**A. Fill in the Blanks**
1. The ________ data type is used for storing textual data.
2. To test single lines of code, we use Python's Interactive ________.
3. The ________ loop is used when the exact number of iterations is known.
4. The `==` operator is an example of a ________ operator.
5. In Python, blocks of code are defined using ________ (spaces).

**B. True or False**
1. Python IDLE requires an internet connection to run basic code.
2. `5.7` is an integer data type.
3. The `else` statement must always be paired with an `if` statement.
4. Variables can change their values during program execution.
5. `and` is an arithmetic operator.

**C. Answer in One Word**
1. What symbol is used at the end of an `if` statement?
2. Which loop repeats as long as a condition is true?
3. Name the data type for `True` or `False`.
4. What symbol assigns a value to a variable?
5. The keyboard shortcut to run a program in IDLE?

**D. Multiple Choice Questions (MCQs)**
1. Which is not a valid Python data type? (a) int (b) float (c) decimal (d) string
2. What does `4 != 5` evaluate to? (a) True (b) False (c) Error (d) 9
3. Which function converts string to an integer? (a) str() (b) float() (c) int() (d) convert()
4. Python was named after: (a) A snake (b) A TV show (c) A scientist (d) A planet
5. What will `print("Hello" * 2)` output? (a) Hello 2 (b) HelloHello (c) Error (d) Hello

**E. Short Answer Questions**
1. Differentiate between the `=` and `==` operators.
2. Explain the purpose of a `while` loop with a real-life example.
3. Why is indentation important in Python?

**F. Programming Exercises**
1. Write a Python program to print the first 10 even numbers.
2. Write a program to take a user's marks and print "Pass" if marks > 40, else "Fail".
3. Write a program to print the multiplication table of 7 using a `for` loop.

---
*(Page Break)*
---

## 📖 Chapter 2: Functions in Python

### 🌍 Real-Life Application
Think of a function like a juice machine. You put in fruits (Input/Arguments), the machine processes it (Function Body), and it gives you juice (Default Return Value). By creating a "Juicer" function, you don't have to rebuild the machine every time you want a drink!

### 📚 2.1 What are Functions?
A function is a reusable block of code that performs a specific task. They help keep our code clean, organized, and avoid repetition. 

### 📚 2.2 Types of Functions
1. **Built-in Functions:** Pre-made functions provided by Python (e.g., `print()`, `len()`, `type()`).
2. **User-defined Functions:** Custom functions built by YOU to do whatever you need!

### 📚 2.3 Creating User-Defined Functions
We use the `def` keyword to define a function.
```python
def greet():
    print("Welcome to Grade 9 CS!")
    
greet() # Using (calling) the function
```

### 📚 2.4 Arguments and Return Values
Functions can take inputs called **Arguments**, and they can give back data using the **`return`** statement.
```python
def add_numbers(num1, num2):  # num1 and num2 are arguments
    total = num1 + num2
    return total  # Gives the result back

result = add_numbers(5, 10)
print(result) # Output: 15
```

![Function Factory Pipeline](/images/function_factory.png)

---

### 💡 Did You Know?
The `return` statement immediately stops the function. Any code written inside the function below `return` will never run!

### ⚠️ Common Errors
- Forgetting parenthesis `()` when calling a function. (e.g., writing `greet` instead of `greet()`).
- Indentation errors inside the `def` block.

### 📝 Quick Recap
- Functions are mini-programs inside your main program.
- Python provides built-in functions, but you can build custom user-defined functions using `def`.
- Arguments allow passing data into the function.
- The `return` keyword sends computed data back to the main program.

---

### 🧪 Lab Activity 2
**Objective:** Create a personalized Greeting function.
**Required Tools:** Python IDLE.
**Step-by-step Procedure:**
1. Open a New File in IDLE.
2. Define a function: `def personalized_greet(name, hobby):`
3. Make it return a message: `return "Hello " + name + ", enjoy " + hobby + "!"`
4. Call it with your details and print the result.
**Expected Output:** "Hello Sarah, enjoy reading!"
**Conclusion:** Students understand arguments and return values.

---

### 🧠 Exercises

**A. Fill in the Blanks**
1. The keyword used to define a function in Python is ________.
2. `print()` is an example of a ________ function.
3. Information passed into a function is called an ________.
4. A function sends a value back using the ________ command.
5. To execute a function, we must ________ it.

**B. True or False**
1. A function can only carry out mathematical operations.
2. User-defined functions are provided by Python automatically.
3. You can call the same function multiple times in a program.
4. Arguments are always mandatory for every function.
5. The code inside a function runs as soon as it is defined.

**C. Answer in One Word**
1. What acts as the input to a function?
2. Which built-in function returns the length of a string?
3. Which keyword stops the execution of a function and exits?
4. What refers to invoking a function to execute it?
5. What type of function is `input()`?

**D. Multiple Choice Questions (MCQs)**
1. How do you create a function in Python? (a) function myFunc(): (b) def myFunc(): (c) create myFunc(): (d) make myFunc():
2. What executes the code within a function? (a) Defining it (b) Returning it (c) Calling it (d) Printing it
3. Which of the following is a built-in function? (a) add_items() (b) max() (c) my_func() (d) calculate_area()
4. Parameters are also known as? (a) Return types (b) Variables (c) Arguments (d) Defs
5. What punctuation ends a `def` statement? (a) `;` (b) `,` (c) `:` (d) `.`

**E. Short Answer Questions**
1. What is the main advantage of using functions?
2. Differentiate between built-in and user-defined functions.
3. Explain the use of the `return` statement with an example.

**F. Programming Exercises**
1. Write a function named `calculate_area` that takes `length` and `width` and returns the area of a rectangle.
2. Write a function that takes a number and prints if it is odd or even.
3. Write a function `find_cube` that returns the cube of a given number.

---
*(Page Break)*
---

## 📖 Chapter 3: Introduction to Simple Models

### 🌍 Real-Life Application
Weather apps don't magic up the forecast! They use computational **models**—programs that take data like humidity and wind patterns to calculate whether it will rain tomorrow. By writing our own simple models, we can simulate real-world behaviors mathematically!

### 📚 3.1 What is a Model?
In computer science, a model is a simple simulation of a real-world system using code. A model takes some starting information (inputs), applies rules (logic/math), and predicts an outcome (output).

### 📚 3.2 Types of Simple Models
1. **Financial Models:** Simulating bank accounts or interest rates.
2. **Mathematical Models:** A calculator or geometry system.
3. **Logic Models:** A quiz program or decision-making bot.

### 📚 3.3 Building a Simple Interest Model
Let's model a savings account.
*Formula:* `Simple Interest = (Principal * Rate * Time) / 100`

```python
def calculate_interest(principal, rate, time):
    interest = (principal * rate * time) / 100
    total_amount = principal + interest
    return total_amount

print("Total money after 3 years:", calculate_interest(1000, 5, 3))
```
![Bank Interest Model](/images/bank_model.png)

### 📚 3.4 Mini-Project: A Python Quiz Model
Let's build a model that simulates a teacher giving a test.
```python
score = 0
print("Q1: What is the capital of France?")
ans1 = input("Answer: ")
if ans1.lower() == "paris":
    score += 1
    
print("Your total score is:", score)
```

---

### 💡 Did You Know?
Scientists use giant Python models running on supercomputers to predict climate change over the next 100 years!

### ⚠️ Common Errors
- Forgetting to convert user `input()` into a `float` or `int` before using it in a mathematical model.
- Logic errors: If you write the formula wrong (e.g., adding instead of multiplying), the code will run without errors but the model will behave badly!

### 📝 Quick Recap
- Models are simplified representations of real-world scenarios.
- Python is excellent for building financial, mathematical, and logic models.
- Building a model requires inputs, logic (formulas/decisions), and outputs.

---

### 🧪 Lab Activity 3
**Objective:** Create a BMI (Body Mass Index) Calculator Model.
**Required Tools:** Python IDLE.
**Step-by-step Procedure:**
1. Define a function `calculate_bmi(weight, height)`.
2. Apply the BMI formula: `bmi = weight / (height * height)`.
3. Return the `bmi`.
4. Add `if` statements to print if the user is "Underweight", "Normal", or "Overweight".
**Expected Output:** Calculates and categorizes health metrics based on weight and height inputs.
**Conclusion:** Students successfully modeled a biomedical metric.

---

### 🧠 Exercises

**A. Fill in the Blanks**
1. A ________ is a program that stimulates real-world systems.
2. To calculate simple interest, we need Principal, ________, and Time.
3. In a quiz model, assigning points is part of the application's ________.
4. Inputting text into a numerical model requires type ________.
5. Weather prediction relies on complex computational ________.

**B. True or False**
1. Models can perfectly predict the future with 100% accuracy.
2. Mathematical formulas are heavily used in modeling.
3. You can use Python functions to organize different parts of a model.
4. `input()` automatically gives us an integer data type.
5. A simple calculator is an example of a computational model.

**C. Answer in One Word**
1. What represents the real-world behavior in computer science?
2. What calculates the extra money earned in a bank savings model?
3. What data type should weight typically be in a BMI model?
4. What function is used to convert user input to lowercase in a quiz model?
5. The starting data given to a model is known as?

**D. Multiple Choice Questions (MCQs)**
1. What is the process of building a representation of a real-world system? (a) Modeling (b) Painting (c) Erasing (d) Debugging
2. Which formula is correct for simple interest? (a) (P+R+T)/100 (b) (P*R*T)/100 (c) P*R*T (d) P/(R*T)
3. What is wrong with `age = input("Age:")` applied in math? (a) Typo (b) Too short (c) Remains a string (d) No error
4. Which of these is a logic model? (a) Calculator (b) Area Finder (c) Multiple Choice Quiz (d) Interest finder
5. A model's outputs directly depend on its? (a) Inputs (b) Visuals (c) Python Version (d) Name

**E. Short Answer Questions**
1. Defina what a computational model is.
2. Explain the inputs necessary for a BMI modeling program.
3. What is the difference between an error in logic and a syntax error in your model?

**F. Programming Exercises**
1. Write a Python model to act as a Temperature Converter (Celsius to Fahrenheit).
2. Create a mini Shopping Cart model that asks for the price of 2 items and calculates the total with a 10% tax.
3. Build a simple "Magic 8 Ball" model using `if-elif` statements based on a chosen number input.

---
*(Page Break)*
---

# ☕ SECTION 2: JAVA PROGRAMMING

---

## 📖 Chapter 4: Introduction to Java & Basic Syntax
*(Color scheme: Crimson Red headings with Teal callout boxes)*

### 🌍 Real-Life Application
When you play a video game on your mobile phone or use a banking app, there is a very high chance it was built using Java! Java's motto is "Write Once, Run Anywhere," meaning the Java code you write on your Windows laptop can easily run on a Mac or Android phone.

### 🔧 Software Usage: Programiz Online Java Compiler
To avoid complex installations, we will use an online tool called Programiz to run our Java programs!
> **Steps to use Programiz Online Compiler:**
> 1. Open your web browser and search for **Programiz Java Online Compiler**.
> 2. You will see an online text editor on the left with some default `class Main` code.
> 3. The black box on the right is the **Console** where the output will appear.
> 4. Type your Java code inside the editor, and hit the blue **Run** button!
> ![Programiz Javascript Compiler Mockup](/images/java_compiler.png)

### 📚 4.1 Features of Java
- **Object-Oriented**: Everything in Java is treated as an "Object".
- **Platform-Independent**: It can run across different operating systems!
- **Secure and Robust**: Strongly handles errors and protects memory.

### 📚 4.2 Structure of a Java Program
Every Java program MUST be inside a `class`. The starting point of the execution is ALWAYS the `main` method.
```java
// Our First Java Program!
class Application {
    public static void main(String[] args) {
        System.out.println("Hello, Grade 9!");
    }
}
```

### 📚 4.3 Variables and Data Types in Java
Java is strictly typed. You must declare the box type *before* placing data inside it.
- `int number = 10;`
- `double decimal = 10.5;`  // Java uses 'double' for large decimal numbers
- `char letter = 'A';`      // Single character in single quotes
- `String word = "Hello";`  // Text string in double quotes
- `boolean flag = true;`

### 📚 4.4 Input and Output
For output, we use `System.out.println()`.
For input, we use a special tool called `Scanner`.
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

---

### 💡 Did You Know?
Java was originally called "Oak" after an oak tree that stood outside the creator's office!

### ⚠️ Common Errors
- Forgetting the semicolon (`;`) at the end of each statement. Java will crash!
- Using `string` instead of `String` (capital 'S'). Java is case-sensitive!

### 📝 Quick Recap
- Java applications span web, mobile, and enterprise platforms.
- `class` and `public static void main(String[] args)` are mandatory structures.
- Variables must have explicit data types (`int`, `double`, `boolean`, `String`).
- `Scanner` is used to get user input from the console.

---

### 🧪 Lab Activity 4
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
1. The moto of Java is "Write once, run ________".
2. Every Java program must have a ________ class.
3. The main starting point of execution in Java is the ________ method.
4. We use the ________ class to read input from a user.
5. In Java, simple text must be wrapped in ________ quotes.

**B. True or False**
1. Java code requires strict data type assignments.
2. `system.out.println()` is the exact correct syntax.
3. Variables in Java do not require a semicolon at the end of declaration.
4. `double` is used to store decimal numbers in Java.
5. Programiz is an offline installed software.

**C. Answer in One Word**
1. What Java keyword creates a blueprint/container for the program?
2. What punctuation marks the end of a regular Java statement?
3. Which single letter data type is wrapped in single quotes?
4. What library/tool is imported to help with inputs?
5. The entry method for every Java program is called?

**D. Multiple Choice Questions (MCQs)**
1. Who developed Java? (a) Apple (b) Sun Microsystems (c) Microsoft (d) Google
2. Which data type is used for true/false? (a) Boolean (b) boolean (c) TrueFalse (d) bool
3. What is the correct way to output "Hello" in Java? (a) print("Hello"); (b) Console.writeline("Hello"); (c) System.out.println("Hello"); (d) echo "Hello";
4. Which error occurs when a semicolon is missed? (a) Logic Error (b) Syntax Error (c) Runtime Error (d) OS Error
5. Which statement reads an integer? (a) nextInt() (b) nextInteger() (c) readInt() (d) getInt()

**E. Short Answer Questions**
1. Why is Java referred to as "Platform Independent"?
2. What is the role of `public static void main`?
3. Describe the difference between `System.out.println()` and `System.out.print()`.

**F. Programming Exercises**
1. Write a Java program that declares three variables (`int`, `double`, `String`) and prints them.
2. Write a program using `Scanner` that asks for two numbers and prints their sum.
3. Write a Java program to print the area of a square using hard-coded side values.

---
*(Page Break)*
---

## 📖 Chapter 5: Control Statements in Java

### 🌍 Real-Life Application
Think about a traffic light system! "IF the light is red, STOP. ELSE IF the light is green, GO." Without control statements, a Java application would just run every single line of code from top to bottom without thinking. Control statements create intelligence!

### 📚 5.1 Conditional Statements (`if-else`)
Java's `if-else` syntax uses curly braces `{}` to define blocks of code.
```java
int speed = 70;
if (speed > 60) {
    System.out.println("Overspeeding!");
} else {
    System.out.println("Safe driving.");
}
```

### 📚 5.2 The `switch` Statement
Instead of a long chain of `if-else` blocks, `switch` makes it elegant when checking the same variable.
```java
int day = 3;
switch (day) {
    case 1: System.out.println("Monday"); break;
    case 2: System.out.println("Tuesday"); break;
    case 3: System.out.println("Wednesday"); break; // Output!
    default: System.out.println("Invalid day");
}
```
![Switch Statement Train Tracks](/images/switch_tracks.png)

### 📚 5.3 Loops in Java
Java uses slightly different loop syntax than Python.
**1. The `while` loop:** 
Checks the condition *before* entering the loop.
```java
int count = 1;
while (count <= 3) {
    System.out.println("Hello");
    count++; // count++ means increase count by 1!
}
```

**2. The `do-while` loop:** 
Will execute the code *at least once*, even if the condition is false!
```java
int count = 5;
do {
    System.out.println("Runs at least once!");
} while (count < 2);
```

**3. The `for` loop:** 
Puts everything (start, condition, increase) on one line!
```java
// start; condition; increase
for (int i = 1; i <= 5; i++) { 
    System.out.println(i);
}
```

---

### 💡 Did You Know?
The `break` word in a switch statement is super important! If you forget it, the code will accidentally execute all the cases below it. This is called "Fall-through"!

### ⚠️ Common Errors
- Typing `if (x = 10)` instead of `if (x == 10)`. Remember, `==` is for comparison!
- Forgetting to increase the counting variable in a `while` loop, leading to an Infinite Loop that freezes your computer!

### 📝 Quick Recap
- `if-else` executes code blocks conditionally.
- `switch` neatly organizes multiple conditions based on one changing value.
- `for` loops are compact when iterations are known.
- `do-while` ensures a loop runs minimally one time.

---

### 🧪 Lab Activity 5
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

**B. True or False**
1. A switch case can operate on string values in modern Java.
2. A `for` loop requires exactly 3 parameters defined in its parenthesis.
3. Curly braces are optional if an `if` statement has multiple lines of code.
4. A `while` loop checks the condition at the very end of the loop.
5. Infinite loops happen when loop conditions never evaluate to false.

**C. Answer in One Word**
1. Which keyword acts as a catch-all if no cases match in a switch statement?
2. What loop combines initialization, condition, and incrementing on one line?
3. What operator checks if two variables are equal?
4. What happens when a loop has no update condition? (It becomes...)
5. Which statement guarantees minimum one execution?

**D. Multiple Choice Questions (MCQs)**
1. What evaluates conditions conditionally? (a) Classes (b) Variables (c) if-else (d) Scanners
2. How do you denote 'Not Equal' in Java? (a) != (b) =! (c) !! (d) <>
3. A switch works best as an alternative to: (a) loops (b) variables (c) long if-else-if chains (d) importing
4. What runs conditionally *while* a condition is active? (a) while loop (b) var loop (c) switch (d) if loop
5. In `for(int i=0; i<5; i++)`, what does `i++` do? (a) decreases by 2 (b) increases by 1 (c) increases by i (d) resets

**E. Short Answer Questions**
1. Explain the "Fall-through" effect in a switch statement.
2. Compare a `while` loop to a `do-while` loop.
3. Correct this code: `if age > 18 System.out.println("Adult");`

**F. Programming Exercises**
1. Write a Java program that takes a number and uses `if-else` to print if it is positive or negative.
2. Use a `for` loop to print numbers from 10 down to 1.
3. Build a "Discount Calculator": Using an `if-else` chain, apply a 20% discount if spending > 1000, 10% if > 500.

---
*(Page Break)*
---

## 📖 Chapter 6: Basic Java Programming

### 🌍 Real-Life Application
When you log into your school portal, there are systems managing hundreds of student names at once, and mini-systems to calculate grades! Java manages collections of data using **Arrays** and organizes actions using **Methods** (Java's version of functions). 

### 📚 6.1 Methods in Java
We learned about functions in Python. In Java, when functions live inside a `class`, we call them **Methods**.
```java
class Calculator {
    // A method to multiply numbers
    static int multiply(int a, int b) {
        return a * b;
    }

    public static void main(String[] args) {
        int result = multiply(5, 4); // Calling the method!
        System.out.println("Result: " + result);
    }
}
```
*Note: We use `static` so we can call the method directly inside our main program without creating complex objects.*

### 📚 6.2 Basic Introduction to Arrays
Imagine trying to store the scores of 50 students. Creating 50 variables (`score1`, `score2`...) is terrible! Instead, we use an **Array**: a single variable that holds a list of items of the *same data type*.

**Creating an Array:**
```java
// Create an integer array holding 4 specific values
int[] scores = {90, 85, 95, 80}; 
```
![Array Indexing Lockers](/images/array_lockers.png)

### 📚 6.3 Accessing Array Elements
In Java (and Python!), indexing starts at **0**, not 1!
```java
int[] scores = {90, 85, 95, 80}; 
System.out.println(scores[0]); // Prints 90 (the first item!)
scores[1] = 88; // Changes the second item from 85 to 88
```

### 📚 6.4 Loops and Arrays together
The easiest way to read all items in an array is using a `for` loop alongside the `.length` property.
```java
String[] cars = {"Volvo", "BMW", "Ford"};
for (int i = 0; i < cars.length; i++) {
    System.out.println(cars[i]);
}
```

---

### 💡 Did You Know?
Arrays in Java are fixed in size. Once you declare an array to hold 5 items, you cannot magically make it hold 6. You'd have to create an entirely new array!

### ⚠️ Common Errors
- `ArrayIndexOutOfBoundsException`: This scary error happens if an array has 3 items (indexes 0, 1, 2) and you try to ask Java to print index 5!
- Forgetting the square brackets `[]` when declaring an array: `int scores = {1, 2};` is wrong!

### 📝 Quick Recap
- Methods break your Java code into reusable manageable blocks.
- The `return` keyword is used in methods to pass values back.
- Arrays store multiple variables of the same type under one name.
- Indexing an array starts precisely at 0.
- Loops are the best companion to process data through an array efficiently.

---

### 🧪 Lab Activity 6
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

**B. True or False**
1. You can store both Strings and Integrs inside the same standard integer array.
2. Java array sizes can be expanded after they are created.
3. `a * b` is a valid instruction to return early out of a method.
4. `scores[3]` accesses the 4th element in an array.
5. In Java, a method must specify its return data type in its header.

**C. Answer in One Word**
1. What marks the parameter space in a Java method?
2. What brackets are used in array declaration?
3. What exception is thrown when accessing a non-existent index?
4. What is the indexing starting number in Java?
5. The keyword telling a method to execute without object creation? 

**D. Multiple Choice Questions (MCQs)**
1. What defines an array? (a) int nums[] (b) int nums{} (c) arr num () (d) double = []
2. Which index points to the 3rd item? (a) 3 (b) 2 (c) 1 (d) 4
3. How do you find an array's size? (a) size() (b) cap() (c) length (d) items
4. What replaces functions in Java? (a) Objects (b) Classes (c) Methods (d) Variances
5. A void method returns: (a) String (b) Int (c) Null (d) Nothing

**E. Short Answer Questions**
1. What is the benefit of using an array instead of variables?
2. Write a method outline that returns a decimal sum of two double parameters.
3. What causes an `ArrayIndexOutOfBoundsException`?

**F. Programming Exercises**
1. Write a Java method `isEven(int number)` that returns `true` if even, and `false` if odd.
2. Create a string array holding 3 of your friends' names and print them using a `for` loop.
3. Write a Java program that creates an array `{5, 10, 15, 20}`, updates the '10' to '12', and then prints the whole array.

---
*End of Textbook*
