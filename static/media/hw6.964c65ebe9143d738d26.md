# ****Shopping List Part 2****
# ****Introduction****

Today we will be building on shopping list part 1! This homework builds off of the knowledge from the lecture, but we will recap the basic concepts so don't worry if you forgot anything. In the previous project we built a static shopping list app where the user wasn't able to add or delete items. In this project, we'll be implementing functionality for users to add or delete items in order to build a fully usable app!

# ****Project Set-up****

To pull the skeleton code for shopping list, type this command below into your terminal on the directory you want the folder in. To open the project, open Xcode → Open a Project or File → Navigate to Shopping List

To fetch the skeleton, you will git clone the skeleton repository into your `cubstart`
 directory. While at your `cubstart`
 directory, run the following bash command:

```bash
git clone --depth=1 --branch=master https://github.com/tonyhong007/shopping_list_part2 hw6 && rm -rf ./hw6/.git
```

You should now see a new `hw6`
 folder in the directory. Accessing it includes all the contents of the project.

# ****Part 1: Setting up the Content View****

## ****Exercise 1A: Understanding the Skeleton Code****

The skeleton code is based off of part 1, but there are a few noticeable changes.

![image](https://user-images.githubusercontent.com/71753465/197104374-949666d9-f473-4103-8734-4b4cfd291c89.png)

We will still be using the Items class but we will no longer be using an item name because to have a user input an image is out of scope for this project. Both the Content View and Custom Cell files have been changed to accommodate for this. Also note that the quantity attribute has been redeclared as a String to make the code cleaner and easier to implement.

Let's run our skeleton code on some mock data to see what our app initially looks like!

![image](https://user-images.githubusercontent.com/71753465/197104421-4f1c2db4-cdd0-43c6-b9e7-2e10bb34e489.png)

We can write up a quick ForEach statement to initialize custom cells with the data provided in "list". Your app should look like this:

![image](https://user-images.githubusercontent.com/71753465/197104442-eefbb599-67d2-4836-a52e-9c7f7615e24f.png)

Notice how the name and quantity of each item is separated by empty space. Make sure to check out the CustomCell file to understand why this is happening!

## ****Exercise 1B: Implementing the UI****

Our goal in this section is to build the UI for the user to input a new item. We will figure out how to start adding multiple items to the shopping list later.

We want the user to be able to input the name of the item and also the amount they need to buy. We can use textfields to record user input.

![image](https://user-images.githubusercontent.com/71753465/197104518-f087b202-06dd-4a56-a9b4-6469c00a95ba.png)

To get the data we want we can use two text fields to retrieve the item name and the quantity. I wrapped the two text fields in a HStack and used Spacer() to separate the two text fields within the HStack. Note that a text field element takes in two arguments: the default text that appears in the textfield before a user types in it and the variable where the user's input will be stored. In this case, we want to display "Item Name" and "Quantity" within the text fields before the user types into them so the user can distinguish the two. The input from each text field will be stored in tempItemName and tempQuantity respectively. There is a "$" following each variable to declare that this is a binding variable. A binding variable is essentially a variable that is shared across views. In this case a text field is one view while our content view is another and "tempItemName" is being shared across these two views. If a binding variable is changed within one view, the change will then be reflected in the other view. Let's declare the tempItemName and tempQuantity variables so we can use it within the content view.

![image](https://user-images.githubusercontent.com/71753465/197104537-569da6bc-b517-4388-8759-1bfd8a130e98.png)

Note that we included the @State wrapper because we want the app to update its state while the user is typing in the textfield.

Your app should now look like this:

![image](https://user-images.githubusercontent.com/71753465/197104566-a2bb7536-ea19-4f7f-a487-1aee4e5b6fe2.png)

You can click on the text fields to type in whatever you want. Now the problem is that the user has no way of indicating that they have finished typing and wants to add the item to the shopping list. To solve this problem we can use a button for the user to press to indicate that they want to officially add the item into the shopping list.

![image](https://user-images.githubusercontent.com/71753465/197104579-8eba2d33-841a-4d9e-9147-5d74d1aa5e83.png)

We can add this button right below our text fields. Now all we have to do is trigger something to change the state of the app when the button is pressed!

Your app should look like this:

![image](https://user-images.githubusercontent.com/71753465/197104616-e7235526-d437-4d45-99b8-11ba7b27ee95.png)

# ****Part 2: Updating the Shopping List****

## ****Exercise 2A: Implementing the Helper Function****

The main idea of this section is to trigger a function that adds the new data into "list" when the user presses the "Add Item" button. We want to update the state of the app after we add a new item so we can start by wrapping the list variable with a @State wrapper:

![image](https://user-images.githubusercontent.com/71753465/197104633-8a9e334b-2963-44ab-b1b0-1e20b2ce43d3.png)

If you look at what our code is currently doing at a high level, we can see that every time we add a new element to the list we rerun the body where the ForEach statement is displaying every element in the list including any new elements we just added. We can create a helper function to append any new data to the list when the "Add Item" button is pressed.

![image](https://user-images.githubusercontent.com/71753465/197104651-7959e2b5-13f2-45dd-8104-6b60f511c67b.png)

Note that we also want to clear the tempItemName and tempQuantity variables to empty strings so the user isn't able to spam the button on one piece of data.

![image](https://user-images.githubusercontent.com/71753465/197104676-0ae0b0e2-73ab-4858-bbeb-d5b99001b138.png)

Try running your app and adding multiple items to the shopping list to verify that the implementation works!

## ****Exercise 2B: Implementing an Edge Case****

You might've noticed that when a user clicks the button without writing anything into the text fields the app starts to generate blank cells. Try adding an if statement in the button element that will prevent the user from generating blank cells if either textfield is empty.

_Hint: Both tempItemName and tempQuantity are initialized to "" when the user hasn't typed in anything._

# ****Part 3: Deleting Entries from the Shopping List****

Your last task is to allow the user to delete the most recent entry in the shopping list. For example, if a user adds apples to the shopping list it should reflect this change on the app. If the user immediately presses the delete button, it will remove apples from the list and this change should be reflected on the app. If the user presses delete again, it will remove the entry that was added right before apples.

_Hint: Add another button below the "Add New Item" button that calls a helper function. The helper function should remove the last element inside "list" using removeLast()._

That's it for homework 6!! Great job for finishing :DD

# Submission:

To submit your homework. Go back to your terminal and navigate to your “Cubstart-iOS” directory using these commands:

```bash
cd Desktop
cd Cubstart-iOS
```

Then type in these commands to push your code onto your personal repository:

```bash
git add .
git commit -m "completed homework 6"
git push
```

You can also type `git status` to verify which files you are pushing.

Upload your code onto gradescope for HW 6 like so. Choose your personal repository we created in the beginning of the homework under “repository” and choose “main/master” under branch.

![image](https://user-images.githubusercontent.com/64179036/191868700-7a68570a-bf24-403a-9fbf-89dc57cf9d1b.png)
