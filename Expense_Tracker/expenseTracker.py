# here our goal is to create a simple expense tracker that allows users to add, view, and delete expenses.

#firstly we need to create a menu for the user to interact with the program
def display_menu():
    print("Welcome to the Expense Tracker!")
    print("1. Add Expense")
    print("2. View Expenses")
    print("3. Delete Expense")
    print("4. Exit")

# Function to add an expense
def add_expense(expenses):
    description = input("Enter expense description: ")
    amount = float(input("Enter expense amount: "))
    expenses.append({"description": description, "amount": amount})
    print("Expense added successfully!")


# Function to view all expenses
def view_expenses(expenses):
    if not expenses:
        print("No expenses to display.")
        return
    print("\nExpenses:")
    for i, expense in enumerate(expenses, start=1):
        print(f"{i}. {expense['description']} - Rs.{expense['amount']:.2f}")
    print()  # For better readability

# Function to delete an expense
def delete_expense(expenses):
    if not expenses:
        print("No expenses to delete.")
        return
    view_expenses(expenses)
    try:
        index = int(input("Enter the number of the expense to delete: ")) - 1
        if 0 <= index < len(expenses):
            removed_expense = expenses.pop(index)
            print(f"Deleted expense: {removed_expense['description']} - Rs.{removed_expense['amount']:.2f}")
        else:
            print("Invalid expense number.")
    except ValueError:
        print("Please enter a valid number.")

# Main function to run the expense tracker
def main():
    expenses = []
    while True:
        display_menu()
        choice = input("Choose an option (1-4): ")
        
        if choice == '1':
            add_expense(expenses)
        elif choice == '2':
            view_expenses(expenses)
        elif choice == '3':
            delete_expense(expenses)
        elif choice == '4':
            print("Exiting the Expense Tracker. Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()

# This code implements a simple command-line expense tracker that allows users to add, view, and delete expenses.
# It uses a list to store expenses, where each expense is represented as a dictionary with a description and amount.    
# The program runs in a loop, displaying a menu and prompting the user for input until they choose to exit.
# The user can add expenses with a description and amount, view all expenses, and delete specific expenses by their index.
# The code handles invalid inputs gracefully, ensuring a smooth user experience.
# The program is designed to be simple and user-friendly, making it easy for anyone to track their expenses.
# The code is structured with functions for each operation, promoting modularity and readability.
