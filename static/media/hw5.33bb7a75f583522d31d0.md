# ****HW5: Shopping List Part 1****

# ****Introduction****

Today we will be implementing a static shopping list app! This homework builds off of the knowledge from the lecture, but we will recap the basic concepts so don't worry if you forgot anything. This project would essentially display a list of items that we need to buy and how many of each item we should buy. We'll be using lists and custom cells to display what we want with some dummy data. For this homework we'll be using dummy data but for next week's homework we'll be taking input from the user and displaying it on the screen!

# ****Project Set-up****

To pull the skeleton code for shopping list, type this command below into your terminal on the directory you want the folder in. To open the project, open Xcode → Open a Project or File → Navigate to Shopping List

To fetch the skeleton, you will git clone the skeleton repository into your `cubstart`
 directory. While at your `cubstart`
 directory, run the following bash command:

```markdown
git clone --depth=1 --branch=master https://github.com/tonyhong007/shopping_list_part1 hw5 && rm -rf ./hw5/.git
```

You should now see a new `hw5`
 folder in the directory. Accessing it includes all the contents of the project.

# ****Part 1: Setting up the Content View****

## ****What are Lists?****

Lists are a UI element in SwiftUI that allows you to display a table of data that a user can scroll through. A good example is the settings app on your phone! For this app we'll be taking advantage of the list element to display the items we need to buy.

## ****Creating a List****

We can initialize a list element with "List{}". The list will display any element that is placed within the brackets. Let's display one text element to have your code now look like this:

![Untitled](https://user-images.githubusercontent.com/71753465/195767003-0c2ec00e-ceb6-446c-8520-e3abd85376d4.png)


Run it and see what it looks like!

## ****Exercise 1A: Creating an Object****

A nice implementation would require creating an object for each entry in the shopping list. This is ultimately better than hard coding entries into a list because we could easily create new entries if we ever needed to and we can clearly see what attributes each entry should have. But first, what's an object? On a high level you can think of an object as something that has its own attributes and functions associated with it. Note that an object can be defined as a class in swift. Take a look at this example:

![Untitled-2](https://user-images.githubusercontent.com/71753465/195767087-f5ceb087-04fe-48cd-baec-86d15a42dfdd.png)


In this example we have a fruit class which means that we can create fruit objects. Note that in the class there is a name attribute and a color attribute. This means that each fruit object will have its own name and color attribute associated with it. I could create a fruit object with: let fruit = Fruit("apple", "red") which would initially call the init() function the class and return a new object! We could access the color attribute of this fruit with dot notation. Dot notation looks like this: fruit.color -> returns "red" and [fruit.name](http://fruit.name/) -> returns "apple"!

Now we can start creating a class for our shopping list entries which I will leave as an exercise for you. Create a class for each entry in the shopping list called "Items". The class should have 3 attributes: imageName (String), itemName (String), and quantity (String) and an init() function to initialize all 3 attributes, You can create the class above the content view struct and they must be separate from one another. Hint: The structure of this class is identical to the fruit class shown above!

## ****Exercise 1B: Displaying the Shopping List Entries****

For our shopping list we want to generate each item one by one on top of each other. This sounds like a great opportunity to put each item into an array and iterate through each item in the array to display it on the screen. Let's first create this array in the content view and create 3 item objects inside it.

![Untitled-3](https://user-images.githubusercontent.com/71753465/195767189-2606b52d-52c0-4be3-a13a-2a1b8c7ee12c.png)


Note: please don't make changes to the image name String or else you won't be able to retrieve the right image from the "Assets" folder.

Your code should now look something like this excluding the Items class.

![Untitled-4](https://user-images.githubusercontent.com/71753465/195767259-3cda4a21-22c0-43c7-8dbe-33d5e40e5e15.png)


We can now start placing each item of the array into List{}. Our goal is to iterate through each item of the array with something similar to a ForEach() statement. In this case we can take advantage of our List{} element to iterate through each item of the array.

![Untitled-5](https://user-images.githubusercontent.com/71753465/195767309-de791594-445c-407a-b2dd-ca1cc238e73d.png)


This block of code essentially tells swiftUI to iterate through each item in "list" and set each item at hand to "i". We can then use "i" to reference each item when displaying them individually. The question now is what UI elements will we use for each item?

Note: You might see this error: "Initializer 'init(_:rowContent:)' requires that 'Items' conform to 'Identifiable'" This means that we need to call "Identifiable" in the Items class in order for SwiftUI to uniquely identify every item when referencing it inside the list.

![Untitled-6](https://user-images.githubusercontent.com/71753465/195767339-ae0dac3a-ce99-4501-9da2-29d798077843.png)


Notice how each entry of the shopping list would be structured very similarly. The only difference between each entry are the texts and images of each item. This means that we can use a custom cell that we can repeatedly call on each item in the array. This would ultimately allow us to efficiently add more entries to the shopping list when needed and we don't have to hard code anything!

For now you can call Custom Cell with the arguments "imageName", "itemName", and "quantity”

![Untitled-7](https://user-images.githubusercontent.com/71753465/195767446-50f5cd71-a458-4a94-b29f-34ae9a29dcf2.png)


This new line of code tells SwiftUI that we want to display whatever UI elements are returned from the CustomCell struct on the arguments provided. Note that we are passing in the arguments using dot notation. The code might also be erroring but this is fine because we haven't finished building the CustomCell struct!

# ****Part 2: Creating the CustomCell Struct****

In order to not clump up our different structs and classes too much, we should build our CustomCell struct in our CustomCell file. The code in the CustomCell file should initially look like this:

![Untitled-8](https://user-images.githubusercontent.com/71753465/195767516-ebc0c1e2-b627-4ca6-bad4-684e5560d498.png)


Before we start adding code to the CustomCell file, let's quickly review what custom cells are. Custom cells aren't necessarily built into the swiftUI framework but are instead built by the user. They are super useful when you are building an application where you are displaying multiple elements that might be structured exactly the same but just with different contents. Just like any struct in swift, you can call a custom cell struct in a different struct (content view). In this case we are calling the CustomCell struct inside the ContentView struct so the custom cells can ultimately be displayed on the screen.

Now that we know what custom cells really are we can get started with coding up the CustomCell struct! Notice that when calling CustomCell we passed in 3 arguments. We need to make sure that these 3 arguments can be initialized inside CustomCell. We can do this by simply declaring the three variables above the body.

![Untitled-9](https://user-images.githubusercontent.com/71753465/195767564-6842efca-56ef-42e1-96a2-b50b1e35b140.png)


This will allow us to now use imageName, itemName, and quantity inside CustomCell!

We can now add UI elements to the body of CustomCell to create something like this:

![Untitled-10](https://user-images.githubusercontent.com/71753465/195767608-d83881ab-61f2-4f58-b5a3-10f3c64f1471.png)


If you run the code as is you should just see "Hello World" in each cell. How can we change CustomCell to match the image above? I'll leave this exercise to you!

Now that we have the structure down we can mess around a little bit. Let's try adding a title to this list. To do this we can wrap the List{} element inside a NavigationView{}. We can then use the property ".navigationTitle("Shopping List") on the List{} to display a title Your code should now look like this:

![Untitled-11](https://user-images.githubusercontent.com/71753465/195767670-3bebea56-701d-4e8a-a646-b1b4c19ee618.png)


Your app should now look like this:

![Untitled-12](https://user-images.githubusercontent.com/71753465/195767865-06782935-c6f0-4c32-a93f-4afa183e8bff.png)


Note that we're not really doing anything with the NavigationView besides using the property, but it might be useful if we were to expand the app later on!

# ****Part 3: Expanding the Shopping List****

Our shopping list looks a little plain. Let's expand it to make the shopping trip more worth it! Your last task is to add at least 4 more items to the shopping list. BUT!! There's a twist because suddenly you feel the urge to want the app to split your shopping list into different categories (fruits, vegetables, etc.)

Add at least 4 more items to the shopping list and sort all items into at least 3 sections by wrapping elements within a List{} with Section(header: Text("category name")){}.

Here is an example:

![Untitled-13](https://user-images.githubusercontent.com/71753465/195767944-69e6d88e-9fb3-4a11-8770-242304272d6d.png)

Note that this code looks a little different from the code used previously in that I'm now using a ForEach statement inside the list. I would recommend creating an array for each individual section and iterating through each section's array separately.

The code above looks like this:

![Untitled-14](https://user-images.githubusercontent.com/71753465/195767991-6192784e-fc28-465f-a5c7-41565281a5bd.png)


That's it for homework 5!! Great job for finishing :DD

# Submission:

To submit your homework. Go back to your terminal and navigate to your “Cubstart-iOS” directory using these commands:

```swift
cd Desktop
cd Cubstart-iOS
```

Then type in these commands to push your code onto your personal repository:

```swift
git add .
git commit -m "completed homework 5"
git push
```

You can also type `git status` to verify which files you are pushing.

Upload your code onto gradescope for HW 4 like so. Choose your personal repository we created in the beginning of the homework under “repository” and choose “main/master” under branch.

![image](https://user-images.githubusercontent.com/64179036/191868700-7a68570a-bf24-403a-9fbf-89dc57cf9d1b.png)
