## 📖 Chapter 1: Revision of Python Basics

### 🌍 Real-Life Application
Imagine you are the manager of an amusement park. You need to check if a person is tall enough for a ride (Conditions) and let 50 people in, one by one (Loops). Python helps us give these logical instructions to a computer!

### 🔧 Software Usage: Python IDLE
We will use **IDLE** to run our Python programs.
> **Steps to use IDLE:**
> 1. Open Python IDLE on your computer.
> 2. The **Interactive Shell** (`>>>`) opens first. It's a great place to test 1-line codes!
> 3. To write a proper program, click `File > New File`.
> 4. Type your program, click `Run > Run Module` (or press F5), and see the magic!
> 
> ![Python IDLE Interface](/images/python_idle.png)

### 📚 1.1 Data Types and Variables

Variables are like labeled boxes that store data. In Python, every value you work with belongs to a **data type** — this tells Python how to store and process that value. Unlike many other languages, Python is smart enough to automatically detect the type of data you place in a variable (this is called **dynamic typing**).

**Think of it this way:** If you put a book in a bag, the bag becomes a "book bag". If you put water in a bottle, it becomes a "water bottle". Similarly, when you store a number in a variable, it takes on that number's data type!

| Data Type | Keyword | Description | Example |
|---|---|---|---|
| **Integer** | `int` | Whole numbers, positive or negative | `age = 14` |
| **Float** | `float` | Decimal/fractional numbers | `height = 5.5` |
| **String** | `str` | Text, wrapped in quotes | `name = "Alice"` |
| **Boolean** | `bool` | True or False values only | `is_student = True` |

![Variable memory box](/images/variable_box.png)

**How to check a variable's data type:**
Use Python's built-in `type()` function to find out what kind of data a variable holds.

**Program 1 – Declaring and Printing Variables**
```python
# Declaring variables of different types
name = "Alex"
age = 14
height = 5.6
is_enrolled = True

print(name)
print(age)
print(height)
print(is_enrolled)
```
**Output:**
```
Alex
14
5.6
True
```

**Program 2 – Checking Data Types with type()**
```python
x = 42
y = 3.14
z = "Hello"
flag = False

print(type(x))
print(type(y))
print(type(z))
print(type(flag))
```
**Output:**
```
<class 'int'>
<class 'float'>
<class 'str'>
<class 'bool'>
```

**Program 3 – Type Conversion (Casting)**
```python
# Converting between types
num_str = "25"          # This is a string
num_int = int(num_str)  # Now it's an integer
num_float = float(num_str)  # Now it's a float

print(num_int + 5)      # 30
print(num_float + 0.5)  # 25.5
print(str(100) + " marks")  # "100 marks"
```
**Output:**
```
30
25.5
100 marks
```

**Program 4 – Multiple Assignment in One Line**
```python
# Assigning multiple variables at once
a, b, c = 10, 20, 30
print(a, b, c)

# Swapping two variables (no temp variable needed!)
x, y = 5, 10
x, y = y, x
print("x =", x, "y =", y)
```
**Output:**
```
10 20 30
x = 10 y = 5
```

**Program 5 – Student Profile with All Data Types**
```python
student_name = "Priya"      # str
student_age = 14            # int
student_gpa = 3.85          # float
has_scholarship = True      # bool

print("=== Student Profile ===")
print("Name:", student_name)
print("Age:", student_age)
print("GPA:", student_gpa)
print("Scholarship:", has_scholarship)
```
**Output:**
```
=== Student Profile ===
Name: Priya
Age: 14
GPA: 3.85
Scholarship: True
```

### 📚 1.2 Operators

Operators are special symbols used to perform operations on data. They are the building blocks of logic in any program. Python has three main categories of operators you need to master.

**Arithmetic Operators** perform mathematical calculations:

| Operator | Symbol | Example | Result |
|---|---|---|---|
| **Addition** | `+` | `5 + 3` | `8` |
| **Subtraction** | `-` | `10 - 4` | `6` |
| **Multiplication** | `*` | `4 * 3` | `12` |
| **Division** | `/` | `10 / 4` | `2.5` |
| **Floor Division** | `//` | `10 // 4` | `2` |
| **Modulus (Remainder)** | `%` | `10 % 3` | `1` |
| **Exponent (Power)** | `**` | `2 ** 3` | `8` |

**Relational/Comparison Operators** compare two values and return True or False:

| Type | Examples | What it does |
|---|---|---|
| **Arithmetic** | `+`, `-`, `*`, `/` | Solves math problems (e.g., `5 + 3 = 8`) |
| **Relational** | `>`, `<`, `==`, `!=` | Compares values (e.g., `5 > 3` is True) |
| **Logical** | `and`, `or`, `not` | Combines conditions |

**Program 1 – Arithmetic Operators in Action**
```python
a = 17
b = 5

print("Addition:", a + b)
print("Subtraction:", a - b)
print("Multiplication:", a * b)
print("Division:", a / b)
print("Floor Division:", a // b)
print("Remainder:", a % b)
print("Power:", a ** 2)
```
**Output:**
```
Addition: 22
Subtraction: 12
Multiplication: 85
Division: 3.4
Floor Division: 3
Remainder: 2
Power: 289
```

**Program 2 – Relational Operators**
```python
x = 10
y = 20

print(x > y)    # Is x greater than y?
print(x < y)    # Is x less than y?
print(x == y)   # Are they equal?
print(x != y)   # Are they NOT equal?
print(x >= 10)  # Is x greater than or equal to 10?
print(y <= 15)  # Is y less than or equal to 15?
```
**Output:**
```
False
True
False
True
True
False
```

**Program 3 – Logical Operators**
```python
age = 16
has_id = True

# 'and' = BOTH conditions must be True
print(age >= 16 and has_id)     # True

# 'or' = AT LEAST ONE must be True
print(age >= 18 or has_id)      # True

# 'not' = FLIPS the result
print(not has_id)               # False
print(not (age < 10))           # True
```
**Output:**
```
True
True
False
True
```

**Program 4 – Operator Precedence (BODMAS in Python)**
```python
# Python follows mathematical order: () > ** > * / // % > + -
result1 = 2 + 3 * 4
result2 = (2 + 3) * 4
result3 = 10 - 4 / 2 + 1

print("2 + 3 * 4 =", result1)
print("(2 + 3) * 4 =", result2)
print("10 - 4 / 2 + 1 =", result3)
```
**Output:**
```
2 + 3 * 4 = 14
(2 + 3) * 4 = 20
10 - 4 / 2 + 1 = 9.0
```

**Program 5 – Simple Calculator Using Operators**
```python
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

print("Sum =", num1 + num2)
print("Difference =", num1 - num2)
print("Product =", num1 * num2)
if num2 != 0:
    print("Quotient =", num1 / num2)
else:
    print("Cannot divide by zero!")
```
**Output (when user enters 15 and 4):**
```
Enter first number: 15
Enter second number: 4
Sum = 19.0
Difference = 11.0
Product = 60.0
Quotient = 3.75
```

### 📚 1.3 Conditional Constructs

We use `if`, `elif`, and `else` when the program needs to make a **decision** — choose a different path based on whether a condition is true or false. This is the most important concept in programming because it gives the computer the ability to **think**.

**How it works:**
- `if` → The program first tests this condition. If True, runs the block.
- `elif` → Short for "else if". Tested only when the previous `if` was False.
- `else` → Runs when no `if` or `elif` was True. It's the default fallback.

**Indentation is critical!** Python uses spaces (usually 4) to define what code belongs inside each block. If you mess up the indentation, Python will give you an `IndentationError`.

**Program 1 – Simple If-Else: Voting Eligibility**
```python
age = int(input("Enter your age: "))

if age >= 18:
    print("You are eligible to vote!")
else:
    print("Sorry, you are too young to vote.")
```
**Output (when 20 is entered):**
```
Enter your age: 20
You are eligible to vote!
```

**Program 2 – If-Elif-Else Chain: Grade Calculator**
```python
marks = 85

if marks >= 90:
    print("Grade A - Excellent!")
elif marks >= 80:
    print("Grade B - Very Good!")   # This will print
elif marks >= 70:
    print("Grade C - Good")
elif marks >= 60:
    print("Grade D - Average")
else:
    print("Grade F - Needs Improvement")
```
**Output:**
```
Grade B - Very Good!
```

**Program 3 – Nested If: Amusement Park Ticket**
```python
height = int(input("Enter your height in cm: "))
age = int(input("Enter your age: "))

if height >= 120:
    if age >= 5:
        print("Welcome! You can enjoy all rides.")
    else:
        print("You must be at least 5 years old.")
else:
    print("Sorry, minimum height is 120 cm for safety.")
```
**Output (when 130 cm, age 10):**
```
Enter your height in cm: 130
Enter your age: 10
Welcome! You can enjoy all rides.
```

**Program 4 – Checking Multiple Conditions with Logical Operators**
```python
username = input("Enter username: ")
password = input("Enter password: ")

if username == "admin" and password == "secret123":
    print("Login successful! Welcome, Admin.")
elif username == "admin" and password != "secret123":
    print("Wrong password. Try again.")
else:
    print("Username not found.")
```
**Output (correct credentials):**
```
Enter username: admin
Enter password: secret123
Login successful! Welcome, Admin.
```

**Program 5 – Temperature Advisor**
```python
temp = float(input("Enter today's temperature (°C): "))

if temp >= 38:
    print("It's very hot! Stay hydrated and avoid going out.")
elif temp >= 28:
    print("It's warm outside. Light clothing recommended.")
elif temp >= 18:
    print("Pleasant weather! Great day for a walk.")
elif temp >= 8:
    print("It's cool. Consider wearing a jacket.")
else:
    print("Very cold! Bundle up with warm clothes.")
```
**Output (when 32 is entered):**
```
Enter today's temperature (°C): 32
It's warm outside. Light clothing recommended.
```

### 📚 1.4 Iterative Constructs (Loops)

Loops let us **repeat** a block of code automatically without writing the same lines over and over. Imagine needing to print "Good Morning!" 100 times — with a loop, it's just 2 lines of code!

**`for` loop**: Used when you know **exactly how many times** to repeat something. It works with a `range()` or over a collection of items.

**`while` loop**: Used when you want to repeat **until a condition becomes false**. It keeps going as long as something is True.

![While Loop Flowchart](/images/while_loop_flowchart.png)

**Program 1 – For Loop with range(): Counting**
```python
# range(1, 6) generates: 1, 2, 3, 4, 5
for i in range(1, 6):
    print("Count:", i)
```
**Output:**
```
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5
```

**Program 2 – For Loop: Multiplication Table**
```python
num = 7
print(f"Multiplication Table of {num}:")
for i in range(1, 11):
    print(f"{num} x {i} = {num * i}")
```
**Output:**
```
Multiplication Table of 7:
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
```

**Program 3 – While Loop: Countdown Timer**
```python
count = 5
print("Countdown begins!")
while count > 0:
    print(count)
    count -= 1   # Decreases count by 1 each time
print("🚀 Blast Off!")
```
**Output:**
```
Countdown begins!
5
4
3
2
1
🚀 Blast Off!
```

**Program 4 – Loop with a Sum Accumulator**
```python
total = 0
for num in range(1, 11):  # Adds 1 through 10
    total += num
print("Sum of 1 to 10 is:", total)
```
**Output:**
```
Sum of 1 to 10 is: 55
```

**Program 5 – While Loop: Guessing Game**
```python
secret = 7
guess = 0

while guess != secret:
    guess = int(input("Guess the number (1-10): "))
    if guess < secret:
        print("Too low! Try higher.")
    elif guess > secret:
        print("Too high! Try lower.")

print("🎉 Correct! You guessed it!")
```
**Output (sample run):**
```
Guess the number (1-10): 3
Too low! Try higher.
Guess the number (1-10): 9
Too high! Try lower.
Guess the number (1-10): 7
🎉 Correct! You guessed it!
```

---

### 💡 Did You Know?
Python is named after a comedy television show called "Monty Python's Flying Circus", not the snake!

### ⚠️ Common Errors
- Forgetting the colon (`:`) at the end of an `if` or `for` statement.
- Messing up **indentation** (spacing). Python gets very angry if blocks of code aren't aligned properly!
- Using `=` instead of `==` in a condition — `=` assigns a value, `==` compares!
- Creating an infinite `while` loop by forgetting to update the loop variable.

### 📝 Quick Recap
- Variables store data types like integers, strings, floats, and booleans.
- Operators compare values or perform arithmetic — arithmetic, relational, and logical.
- Conditions (`if-elif-else`) help computers make branching decisions.
- Loops (`for`, `while`) help repeat tasks efficiently without code duplication.
- `for` loops iterate a fixed number of times; `while` loops iterate conditionally.

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
6. The keyword `not` is an example of a ________ operator.
7. `type()` is a ________ function used to check the data type of a variable.
8. The `%` operator returns the ________ after division.
9. The `**` operator is used to raise a number to a ________.
10. `range(1, 5)` generates the numbers ________, ________, ________, ________.

**B. True or False**
1. Python IDLE requires an internet connection to run basic code.
2. `5.7` is an integer data type.
3. The `else` statement must always be paired with an `if` statement.
4. Variables can change their values during program execution.
5. `and` is an arithmetic operator.
6. Python automatically detects the data type of a variable (dynamic typing).
7. `10 // 3` gives `3.33` in Python.
8. An `elif` statement can exist without an `if` statement before it.
9. A `for` loop in Python can iterate over a list of items.
10. Indentation errors are caught at runtime, not before execution begins.

**C. Answer in One Word**
1. What symbol is used at the end of an `if` statement?
2. Which loop repeats as long as a condition is true?
3. Name the data type for `True` or `False`.
4. What symbol assigns a value to a variable?
5. The keyboard shortcut to run a program in IDLE?
6. What function is used to display output on screen?
7. Which function converts a string to a floating-point number?
8. What operator is used to find the remainder of division?
9. The keyword used to start a conditional block is?
10. Name the operator that checks if two values are NOT equal.

**D. Multiple Choice Questions (MCQs)**
1. Which is not a valid Python data type? (a) int (b) float (c) decimal (d) string
2. What does `4 != 5` evaluate to? (a) True (b) False (c) Error (d) 9
3. Which function converts string to an integer? (a) str() (b) float() (c) int() (d) convert()
4. Python was named after: (a) A snake (b) A TV show (c) A scientist (d) A planet
5. What will `print("Hello" * 2)` output? (a) Hello 2 (b) HelloHello (c) Error (d) Hello
6. What does `10 // 3` evaluate to? (a) 3.33 (b) 1 (c) 3 (d) 30
7. Which operator checks equality? (a) = (b) === (c) == (d) :=
8. What does `range(0, 5)` produce? (a) 1,2,3,4,5 (b) 0,1,2,3,4 (c) 0,1,2,3,4,5 (d) 1,2,3,4
9. Which loop runs at least once guaranteed? (a) for (b) while (c) do-while (d) None in Python
10. What keyword is used after `if` for additional conditions? (a) else (b) elif (c) elseif (d) otherwise

**E. Short Answer Questions**
1. Differentiate between the `=` and `==` operators.
2. Explain the purpose of a `while` loop with a real-life example.
3. Why is indentation important in Python?
4. What is the difference between a `for` loop and a `while` loop?
5. Describe what happens when you use `and` vs `or` in a condition.
6. What does the `%` (modulus) operator do? Give an example.
7. How can you check the data type of a variable in Python?
8. Explain with an example how `int()` conversion can be useful.

**F. Programming Exercises**
1. Write a Python program to print the first 10 even numbers.
2. Write a program to take a user's marks and print "Pass" if marks > 40, else "Fail".
3. Write a program to print the multiplication table of 7 using a `for` loop.
4. Write a program that asks the user for a number and prints whether it is positive, negative, or zero.
5. Write a program using a `while` loop that keeps asking the user to enter a password until they type "open sesame".
6. Write a program that prints the sum of all numbers from 1 to 100.
7. Create a program that uses a `for` loop to print all odd numbers from 1 to 20.
8. Write a program that takes two numbers as input and prints the larger of the two.


## 📖 Chapter 2: Functions in Python

### 🌍 Real-Life Application
Think of a function like a juice machine. You put in fruits (Input/Arguments), the machine processes it (Function Body), and it gives you juice (Default Return Value). By creating a "Juicer" function, you don't have to rebuild the machine every time you want a drink!

### 📚 2.1 What are Functions?

A **function** is a reusable, named block of code that performs a specific task. The key idea is: write the code **once**, and use it as **many times** as needed by simply calling the function's name.

**Why Use Functions?**
- **Avoid Repetition**: Instead of copy-pasting code, just call the function.
- **Organisation**: Break a large program into smaller, manageable pieces.
- **Debugging Made Easy**: If there's a bug, fix it once inside the function — it's fixed everywhere.
- **Readability**: Code becomes easier to read and understand.

**The basic structure of a function:**
```
def function_name(parameters):
    # body of the function
    return result
```

### 📚 2.2 Types of Functions

**1. Built-in Functions:** Pre-made functions provided by Python that are always available. You don't need to define them — just use them!

Examples: `print()`, `input()`, `len()`, `type()`, `int()`, `float()`, `str()`, `max()`, `min()`, `sum()`, `abs()`

**2. User-defined Functions:** Custom functions built by the programmer to solve a specific problem. You create them using the `def` keyword.

### 📚 2.3 Creating User-Defined Functions
We use the `def` keyword to define a function. The function body must be indented.

**Program 1 – Simplest Function (No Parameters, No Return)**
```python
def greet():
    print("Welcome to Grade 9 CS!")
    print("Let's learn Python together!")

# Calling the function twice
greet()
greet()
```
**Output:**
```
Welcome to Grade 9 CS!
Let's learn Python together!
Welcome to Grade 9 CS!
Let's learn Python together!
```

**Program 2 – Function That Displays a Border**
```python
def draw_line():
    print("=" * 30)

def show_title(title):
    draw_line()
    print(title)
    draw_line()

show_title("My Python Program")
```
**Output:**
```
==============================
My Python Program
==============================
```

### 📚 2.4 Arguments and Return Values

Functions can take **inputs** called **Arguments** (or Parameters), and they can give back data to the main program using the **`return`** statement.

- **Parameter**: The variable listed inside the function definition (the "placeholder").
- **Argument**: The actual value you pass when calling the function.
- **Return Value**: The data the function sends back after processing.

![Function Factory Pipeline](/images/function_factory.png)

**Program 3 – Function with Parameters and Return Value**
```python
def add_numbers(num1, num2):    # num1 and num2 are parameters
    total = num1 + num2
    return total                # Sends the result back

result = add_numbers(5, 10)    # 5 and 10 are arguments
print("Sum is:", result)

# Can also use the function directly in print
print("Direct call:", add_numbers(100, 200))
```
**Output:**
```
Sum is: 15
Direct call: 300
```

**Program 4 – Function to Check Even or Odd**
```python
def check_even_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"

# Testing the function
print(check_even_odd(8))
print(check_even_odd(15))
print(check_even_odd(0))
```
**Output:**
```
Even
Odd
Even
```

**Program 5 – Function with Default Parameters**
```python
def greet_student(name, subject="Computer Science"):
    print(f"Hello {name}! Welcome to {subject} class.")

greet_student("Sara")               # Uses default subject
greet_student("Raj", "Mathematics") # Overrides default
```
**Output:**
```
Hello Sara! Welcome to Computer Science class.
Hello Raj! Welcome to Mathematics class.
```

**Program 6 – Calling Multiple Functions Together**
```python
def square(n):
    return n * n

def cube(n):
    return n * n * n

def power_summary(n):
    print(f"Number: {n}")
    print(f"Square: {square(n)}")
    print(f"Cube:   {cube(n)}")

power_summary(4)
print("---")
power_summary(3)
```
**Output:**
```
Number: 4
Square: 16
Cube:   64
---
Number: 3
Square: 9
Cube:   27
```

**Program 7 – Temperature Converter Function**
```python
def celsius_to_fahrenheit(celsius):
    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit

def fahrenheit_to_celsius(fahrenheit):
    celsius = (fahrenheit - 32) * 5/9
    return celsius

print("25°C =", celsius_to_fahrenheit(25), "°F")
print("98.6°F =", fahrenheit_to_celsius(98.6), "°C")
```
**Output:**
```
25°C = 77.0 °F
98.6°F = 37.0 °C
```

---

### 💡 Did You Know?
The `return` statement immediately stops the function. Any code written inside the function below `return` will never run!

### ⚠️ Common Errors
- Forgetting parenthesis `()` when calling a function. (e.g., writing `greet` instead of `greet()`).
- Indentation errors inside the `def` block.
- Calling a function before it is defined (Python reads code top to bottom!).
- Confusing parameters (in the definition) with arguments (in the call).

### 📝 Quick Recap
- Functions are mini-programs inside your main program.
- Python provides built-in functions, but you can build custom user-defined functions using `def`.
- Arguments allow passing data into the function.
- The `return` keyword sends computed data back to the main program.
- Functions can have default parameter values.

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
6. The variable inside a function's definition is called a ________.
7. `len()`, `max()`, and `min()` are examples of ________ functions.
8. A function with no `return` statement returns ________ by default.
9. Default parameter values are set using the ________ symbol in the function definition.
10. If a function is defined but never called, its code will ________ execute.

**B. True or False**
1. A function can only carry out mathematical operations.
2. User-defined functions are provided by Python automatically.
3. You can call the same function multiple times in a program.
4. Arguments are always mandatory for every function.
5. The code inside a function runs as soon as it is defined.
6. A function can return more than one value at a time in Python.
7. The `def` keyword stands for "definition".
8. Functions can call other functions inside themselves.
9. Parameters and arguments always refer to the same thing.
10. A function without parameters cannot produce useful output.

**C. Answer in One Word**
1. What acts as the input to a function?
2. Which built-in function returns the length of a string?
3. Which keyword stops the execution of a function and exits?
4. What refers to invoking a function to execute it?
5. What type of function is `input()`?
6. What keyword is used to create a user-defined function?
7. What is the name of a function's input variable called?
8. Which built-in function returns the largest value from a list?
9. What do you call a function that calls itself?
10. Name one built-in mathematical function in Python.

**D. Multiple Choice Questions (MCQs)**
1. How do you create a function in Python? (a) function myFunc(): (b) def myFunc(): (c) create myFunc(): (d) make myFunc():
2. What executes the code within a function? (a) Defining it (b) Returning it (c) Calling it (d) Printing it
3. Which of the following is a built-in function? (a) add_items() (b) max() (c) my_func() (d) calculate_area()
4. Parameters are also known as? (a) Return types (b) Variables (c) Arguments (d) Defs
5. What punctuation ends a `def` statement? (a) `;` (b) `,` (c) `:` (d) `.`
6. A function with a default value for a parameter allows the parameter to be? (a) Required (b) Optional (c) Ignored (d) Deleted
7. What does a function return if no `return` statement is used? (a) 0 (b) False (c) None (d) Error
8. Which is the correct way to call a function `greet` with argument "Ali"? (a) greet["Ali"] (b) greet{"Ali"} (c) greet("Ali") (d) call greet("Ali")
9. How many values can a Python function return? (a) Only 1 (b) Only 2 (c) None (d) Multiple (as a tuple)
10. What is the scope of a variable defined inside a function? (a) Global (b) Local (c) Universal (d) None

**E. Short Answer Questions**
1. What is the main advantage of using functions?
2. Differentiate between built-in and user-defined functions.
3. Explain the use of the `return` statement with an example.
4. What is the difference between a parameter and an argument?
5. Why would you use a default parameter value? Give an example scenario.
6. What happens if you define a function but never call it?
7. Can a Python function call another function? Give a brief example.
8. What does "DRY" stand for in programming and how do functions help achieve it?

**F. Programming Exercises**
1. Write a function named `calculate_area` that takes `length` and `width` and returns the area of a rectangle.
2. Write a function that takes a number and prints if it is odd or even.
3. Write a function `find_cube` that returns the cube of a given number.
4. Write a function `is_vowel(letter)` that returns True if the letter is a vowel (a, e, i, o, u), otherwise False.
5. Create a function `calculate_grade(marks)` that returns "A", "B", "C", "D", or "F" based on the marks.
6. Write a function `repeat_greeting(name, times)` that prints "Hello, [name]!" a given number of times.
7. Create a function that takes three numbers and returns the largest of the three.
8. Write a function `is_prime(n)` that returns True if n is a prime number, otherwise False.



## 📖 Chapter 3: Introduction to Simple Models

### 🌍 Real-Life Application
Weather apps don't magic up the forecast! They use computational **models**—programs that take data like humidity and wind patterns to calculate whether it will rain tomorrow. By writing our own simple models, we can simulate real-world behaviors mathematically!

### 📚 3.1 What is a Model?

In computer science, a **model** is a simplified representation (simulation) of a real-world system using code. A model takes some starting information (inputs), applies rules (logic/formulas), and produces an outcome (output).

**Real-World Analogy:** A map is a model of a city. It doesn't show every detail (every leaf on every tree!), but it captures the information that matters — roads, buildings, and distances. Similarly, a computational model focuses on the key variables of a system.

**Three core components of every model:**
1. **Inputs** – The data fed into the model (e.g., weight, height, principal amount)
2. **Processing** – The rules, formulas, or logic applied
3. **Outputs** – The result or prediction produced

### 📚 3.2 Types of Simple Models

1. **Financial Models:** Simulating bank accounts, interest rates, or budgets.
2. **Mathematical Models:** A calculator, unit converter, or geometry system.
3. **Logic Models:** A quiz program or a decision-making bot.
4. **Scientific Models:** A BMI calculator, temperature simulator.

### 📚 3.3 Building a Simple Interest Model

**Simple Interest** is the extra money earned on a saved amount in a bank. The formula is:

`Simple Interest = (Principal × Rate × Time) / 100`
`Total Amount = Principal + Simple Interest`

**Program 1 – Basic Simple Interest Calculator**
```python
def calculate_interest(principal, rate, time):
    interest = (principal * rate * time) / 100
    total_amount = principal + interest
    return total_amount

print("Total money after 3 years:", calculate_interest(1000, 5, 3))
```
**Output:**
```
Total money after 3 years: 1150.0
```

![Bank Interest Model](/images/bank_model.png)

**Program 2 – Interactive Bank Interest Model**
```python
def simple_interest_model(principal, rate, time):
    si = (principal * rate * time) / 100
    total = principal + si
    return si, total

p = float(input("Enter Principal amount: "))
r = float(input("Enter Rate of interest (%): "))
t = float(input("Enter Time period (years): "))

interest, amount = simple_interest_model(p, r, t)
print(f"\n--- Bank Statement ---")
print(f"Principal:        ₹{p:.2f}")
print(f"Interest Earned:  ₹{interest:.2f}")
print(f"Total Amount:     ₹{amount:.2f}")
```
**Output (when 5000, 8, 2 are entered):**
```
Enter Principal amount: 5000
Enter Rate of interest (%): 8
Enter Time period (years): 2

--- Bank Statement ---
Principal:        ₹5000.00
Interest Earned:  ₹800.00
Total Amount:     ₹5800.00
```

### 📚 3.4 Mini-Project: A Python Quiz Model

**Program 3 – Multi-Question Quiz Model**
```python
score = 0
total_questions = 3

print("=== Python Knowledge Quiz ===")
print()

# Question 1
ans1 = input("Q1: What is the capital of France? ").strip().lower()
if ans1 == "paris":
    score += 1
    print("✓ Correct!")
else:
    print("✗ Wrong! Answer: Paris")

# Question 2
ans2 = input("Q2: What is 7 x 8? ").strip()
if ans2 == "56":
    score += 1
    print("✓ Correct!")
else:
    print("✗ Wrong! Answer: 56")

# Question 3
ans3 = input("Q3: Who invented Python? ").strip().lower()
if "guido" in ans3:
    score += 1
    print("✓ Correct!")
else:
    print("✗ Wrong! Answer: Guido van Rossum")

print(f"\nYour Score: {score}/{total_questions}")
```
**Output (sample run):**
```
=== Python Knowledge Quiz ===

Q1: What is the capital of France? paris
✓ Correct!
Q2: What is 7 x 8? 56
✓ Correct!
Q3: Who invented Python? Guido van Rossum
✓ Correct!

Your Score: 3/3
```

**Program 4 – BMI Health Model**
```python
def calculate_bmi(weight_kg, height_m):
    bmi = weight_kg / (height_m ** 2)
    return round(bmi, 2)

def bmi_category(bmi):
    if bmi < 18.5:
        return "Underweight"
    elif bmi < 25.0:
        return "Normal weight"
    elif bmi < 30.0:
        return "Overweight"
    else:
        return "Obese"

weight = float(input("Enter weight in kg: "))
height = float(input("Enter height in meters: "))

bmi = calculate_bmi(weight, height)
category = bmi_category(bmi)

print(f"\n=== Health Report ===")
print(f"BMI: {bmi}")
print(f"Category: {category}")
```
**Output (when 65 kg, 1.72 m):**
```
Enter weight in kg: 65
Enter height in meters: 1.72

=== Health Report ===
BMI: 21.97
Category: Normal weight
```

**Program 5 – Shopping Cart Financial Model**
```python
def calculate_bill(item1_price, item2_price, item3_price, tax_percent=10):
    subtotal = item1_price + item2_price + item3_price
    tax_amount = (subtotal * tax_percent) / 100
    total = subtotal + tax_amount
    return subtotal, tax_amount, total

p1 = float(input("Enter price of item 1: "))
p2 = float(input("Enter price of item 2: "))
p3 = float(input("Enter price of item 3: "))

sub, tax, total = calculate_bill(p1, p2, p3)
print(f"\n=== Shopping Receipt ===")
print(f"Subtotal:  ₹{sub:.2f}")
print(f"Tax (10%): ₹{tax:.2f}")
print(f"TOTAL:     ₹{total:.2f}")
```
**Output (when 200, 350, 150):**
```
Enter price of item 1: 200
Enter price of item 2: 350
Enter price of item 3: 150

=== Shopping Receipt ===
Subtotal:  ₹700.00
Tax (10%): ₹70.00
TOTAL:     ₹770.00
```

**Program 6 – Speed, Distance & Time Model**
```python
def calculate_speed(distance, time):
    if time == 0:
        return "Time cannot be zero!"
    return distance / time

def calculate_time(distance, speed):
    if speed == 0:
        return "Speed cannot be zero!"
    return distance / speed

d = float(input("Enter distance (km): "))
t = float(input("Enter time (hours): "))

speed = calculate_speed(d, t)

if type(speed) == str:
    print(speed)
else:
    print(f"Speed: {speed:.2f} km/h")
    
    # Predict time for different distances
    print("\nTravel predictions at this speed:")
    for dist in [100, 250, 500]:
        t_pred = calculate_time(dist, speed)
        print(f"  {dist} km → {t_pred:.2f} hours")
```
**Output (when 120, 2):**
```
Enter distance (km): 120
Enter time (hours): 2
Speed: 60.00 km/h

Travel predictions at this speed:
  100 km → 1.67 hours
  250 km → 4.17 hours
  500 km → 8.33 hours
```

---

### 💡 Did You Know?
Scientists use giant Python models running on supercomputers to predict climate change over the next 100 years!

### ⚠️ Common Errors
- Forgetting to convert user `input()` into a `float` or `int` before using it in a mathematical model.
- Logic errors: If you write the formula wrong (e.g., adding instead of multiplying), the code will run without errors but the model will behave badly!
- Dividing by zero — always check that the denominator is not zero before dividing.

### 📝 Quick Recap
- Models are simplified representations of real-world scenarios using code.
- Python is excellent for building financial, mathematical, and logic models.
- Building a model requires inputs, logic (formulas/decisions), and outputs.
- Functions are perfect for organizing model code into reusable parts.

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
1. A ________ is a program that simulates real-world systems.
2. To calculate simple interest, we need Principal, ________, and Time.
3. In a quiz model, assigning points is part of the application's ________.
4. Inputting text into a numerical model requires type ________.
5. Weather prediction relies on complex computational ________.
6. The three core parts of a model are Input, ________, and Output.
7. `round(3.14159, 2)` returns ________.
8. BMI stands for Body Mass ________.
9. A quiz model is an example of a ________ model.
10. In a simple interest model, the formula uses Principal multiplied by Rate multiplied by ________.

**B. True or False**
1. Models can perfectly predict the future with 100% accuracy.
2. Mathematical formulas are heavily used in modeling.
3. You can use Python functions to organize different parts of a model.
4. `input()` automatically gives us an integer data type.
5. A simple calculator is an example of a computational model.
6. A BMI model requires both weight and height as inputs.
7. Logic errors will cause Python to display an error message.
8. `float()` is used to convert a string to a decimal number.
9. A shopping cart model is an example of a financial model.
10. Python is used in scientific research to build climate prediction models.

**C. Answer in One Word**
1. What represents real-world behavior in computer science?
2. What calculates the extra money earned in a bank savings model?
3. What data type should weight typically be in a BMI model?
4. What function is used to convert user input to lowercase in a quiz model?
5. The starting data given to a model is known as?
6. What Python function rounds a number to a given number of decimal places?
7. In the quiz model, what variable keeps track of the player's score?
8. Which type of model simulates earning and spending money?
9. Which type of error produces wrong output without crashing the program?
10. What keyword returns a value from a function in a model?

**D. Multiple Choice Questions (MCQs)**
1. What is the process of building a representation of a real-world system? (a) Modeling (b) Painting (c) Erasing (d) Debugging
2. Which formula is correct for simple interest? (a) (P+R+T)/100 (b) (P*R*T)/100 (c) P*R*T (d) P/(R*T)
3. What is wrong with `age = input("Age:")` applied in math? (a) Typo (b) Too short (c) Remains a string (d) No error
4. Which of these is a logic model? (a) Calculator (b) Area Finder (c) Multiple Choice Quiz (d) Interest finder
5. A model's outputs directly depend on its? (a) Inputs (b) Visuals (c) Python Version (d) Name
6. What best describes a computational model? (a) A drawing of a system (b) A simplified code representation of a real system (c) A computer game (d) A class diagram
7. In a BMI calculator, `bmi = weight / (height ** 2)`. If height = 0, what happens? (a) Result is 0 (b) Result is error: division by zero (c) Result is bmi (d) None
8. Which model type would simulate monthly savings growth? (a) Logic Model (b) Scientific Model (c) Financial Model (d) Quiz Model
9. What does `float(input("Rate: "))` do? (a) Reads text (b) Reads a decimal number from the user (c) Skips the input (d) Crashes
10. The `.lower()` method in a quiz model is used to? (a) Convert to uppercase (b) Accept answers regardless of case (c) Check spelling (d) Compare numbers

**E. Short Answer Questions**
1. Define what a computational model is.
2. Explain the inputs necessary for a BMI modeling program.
3. What is the difference between a logic error and a syntax error in your model?
4. Why is it important to convert `input()` to `float` or `int` in a mathematics model?
5. Give two real-world examples of computational models used in everyday life.
6. Explain the three components (Input, Processing, Output) with a temperature converter example.
7. Why might the weather forecast model not be 100% accurate?
8. Describe one advantage of using functions when building a model.

**F. Programming Exercises**
1. Write a Python model to act as a Temperature Converter (Celsius to Fahrenheit).
2. Create a mini Shopping Cart model that asks for the price of 2 items and calculates the total with a 10% tax.
3. Build a simple "Magic 8 Ball" model using `if-elif` statements based on a chosen number input.
4. Write a Python program that simulates a basic electricity bill calculator (units used × rate per unit = bill).
5. Create a loan installment model: Given a loan amount, annual interest rate, and number of months, calculate the monthly payment.
6. Build a distance converter model that converts kilometers to miles, feet, and centimeters.
7. Create a simple quiz model with 5 questions and display the percentage score at the end.
8. Write a Python program that models the growth of a savings account over 5 years using a `for` loop.


## 📖 Chapter 4: Introduction to Java & Basic Syntax

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

### 📚 4.1 Features of Java

Java is one of the most widely used programming languages in the world. Here's why it is so powerful and popular:

- **Object-Oriented**: Everything in Java is organized around "Objects" — a concept that mirrors the real world. Even the code we write lives inside a `class`.
- **Platform-Independent**: Java runs on a special engine called the **JVM (Java Virtual Machine)**. The same `.class` file runs on Windows, Mac, Linux, or Android without changes. This is what "Write Once, Run Anywhere" means.
- **Secure and Robust**: Java has built-in mechanisms to catch errors before they cause problems. It also prevents programs from directly accessing memory, making it far more secure.
- **Strongly Typed**: Every variable must have a declared type. You cannot accidentally store text in a number variable.
- **Widely Used in Industry**: Android apps, banking systems, large websites, and enterprise software are all built using Java.

### 📚 4.2 Structure of a Java Program

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

### 📚 4.3 Variables and Data Types in Java

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

### 📚 4.4 Input and Output

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



## 📖 Chapter 5: Control Statements in Java

### 🌍 Real-Life Application
Think about a traffic light system! "IF the light is red, STOP. ELSE IF the light is green, GO." Without control statements, a Java application would just run every single line of code from top to bottom without thinking. Control statements create intelligence!

### 📚 5.1 Conditional Statements (`if-else`)

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

### 📚 5.2 The `switch` Statement

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

### 📚 5.3 Loops in Java

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



## 📖 Chapter 6: Basic Java Programming

### 🌍 Real-Life Application
When you log into your school portal, there are systems managing hundreds of student names at once, and mini-systems to calculate grades! Java manages collections of data using **Arrays** and organizes actions using **Methods** (Java's version of functions). 

### 📚 6.1 Methods in Java

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

### 📚 6.2 Basic Introduction to Arrays

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

### 📚 6.3 Accessing Array Elements

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

### 📚 6.4 Loops and Arrays Together

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
