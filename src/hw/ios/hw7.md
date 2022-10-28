# HW7: NewsFeed

# Introduction👋

Hello Hello! It’s Week 7 of Cubstart. This week, your HW will be focusing on integrating API’s into SwiftUI. The project we will be building is called NewsFeed. We will be using a news API to load in real time news articles into an app of your creation. Just FYI, there is a lot of code here and lot of it is stubs (as in, its the same code across the board in apps) so most of the time I will give you the code and explain what each piece does. When you create your own apps, if you are using API’s, you should be able to use these stubs and change them to fit your needs. Most of this homework will be copying code and reading for understanding.

Project adapted from @tundsDev on YouTube

## Setup🛠

For this project, you will be using some skeleton code that I wrote up to get you started. For this project, there are a lot of different files and code that may seem confusing. However, a lot of that code is just setup stuff that has less to do with actually using API’s so a good amount of this project will be just me walking you through what each file does and how it ties into using API’s.

```jsx
git clone https://github.com/jy73/newsfeedskeleton
```

# Part 1: Concept Overview

No real tasks here. Just give this a read to get a quick rundown of what we will be working with today. 

## What is an API?

**API** - Application Programming Interface

An API is an interface exposed by a service that allows other services to interact with it. Essentially API’s allow for interaction between different parties. Imagine you work at the National Weather Service, and you have a system that stores weather data. Other software developers are writing weather apps that need access to NWS data. **How do you serve these apps the data they need?**

![Screen%20Shot%202022-03-27%20at%2011 27 52%20AM](https://user-images.githubusercontent.com/71753465/198494927-1c5031ee-488c-4496-8fa8-a8e97f660a14.png)


## Tools for API Use

**Postman** - [https://www.postman.com](http://www.postman.com)

A collaboration platform for API development, but mainly we use it as a tool for making API requests. With Postman, you can make requests of API’s to see what the queries may look like.

**Quicktype** - [https://app.quicktype.io](http://app.quicktype.io) 

Application for creating code able objects from JSON. This is helpful in figuring out what your structs look like for handling the API requests

## MVVM Architecture

**Model-View-ViewModel** - A way to structure and organize an app so that you can separate logic from layout

Model - A representation of data

View - A display of data

ViewModel - A representation of the state of model data

![MVVMPattern](https://user-images.githubusercontent.com/71753465/198495056-8f76bc4d-7cc3-455a-9201-f23a53ee4134.png)


## Setup of NewsFeed

**Models** 

Article - structure of the JSON article AKA all the important info you can get from the API request

**Views**

Article - displaying the actual article information

Error - displaying an error if cannot pull article information

Feed - displaying the feed of articles

Settings - displaying the settings

**ViewModels**

Article - controls the state of the Article

## Packages / API

**Packages**

In this project, you will be introduced to the Swift Package Manager. This allows you to add in outside packages and libraries to use in your project

We will be using the following packages:

SwiftUI - the normal package for UI elements

Foundation - the basic Swift package

Combine - Apple package allowing for processing over time

URLImage - third party package for processing remote images (going to be useful for grabbing images from articles)

**API**

[https://lil.software/api/](https://lil.software/api/)

This will be the API source we will be using. It’s a very minimal one with options of different API’s you can request from. For this project, we will be using the News API.

# Part 2: Setting up the Model

## Using Postman and QuickType

In order to set up the model, we need to see what the API request will look like. To do this, we will use Postman and QuickType.

**Postman**

1. Sign in to Postman with your Berkeley account
2. Add in the API url ([https://api.lil.software/news](https://api.lil.software/news)) and select GET
3. Send the request and take note of the response


<img width="1440" alt="Screen%20Shot%202022-03-27%20at%203 48 24%20PM" src="https://user-images.githubusercontent.com/71753465/198495192-89991f39-416d-4942-8803-8d4ac391ecf9.png">

**QuickType**

1. Go to the QuickType site ^^ link above
2. Copy the entire JSON code from the Postman request and paste it into the QuickType
3. It should spit out the structure of the Article that you will use in setting up your model


<img width="1440" alt="Screen%20Shot%202022-03-27%20at%203 57 35%20PM" src="https://user-images.githubusercontent.com/71753465/198495815-b885d08b-381c-45be-bb58-85ed8f83f7fc.png">


## **Creating the Article Model**

Some things to go over...

- Codable allows for the JSON data to be converted to a struct which is why this type is assigned to the struct pushed out by QuickType
- Identifiable is a protocol that allows an object to be assigned a unique id. This is helpful when we are reusing a model multiple times like here since we will have multiple articles.

1. In the provided Models folder, create a Swift File “Article”
2. Copy and Paste the struct code from the QuickType response
    1. You’re going to want to change Welcome to something else just for the sake of notation. I suggest you change it to Response or NewsResponse
3. We want to make the Article struct identifiable. To do this, add the “Identifiable” protocol to the header of the Article struct and add in an “id” parameter to the struct using UUID()

Your Article.swift file should look a little something like this:

<img width="626" alt="Screen%20Shot%202022-03-27%20at%204 20 42%20PM" src="https://user-images.githubusercontent.com/71753465/198495861-6430c0bf-901a-43a3-861d-906b311bcbd4.png">


# Part 3: Setting up the Endpoint & Errors

## What is an Endpoint?

An API endpoint is the point where the API connects with the program you are running. The endpoint is what makes the request of the API through code. An effective endpoint must provide the URL, a method, a list of headers, and a body.

## Creating our Article Endpoint

We will create out Endpoint here. I will provide the code and walk you through what each thing is. What we are essentially doing is just building the path of the API calls we want to request.

1. In the provided Endpoint folder, create a Swift file called “ArticleEndpoint”
2. Copy in the following code
    
<img width="643" alt="Screen%20Shot%202022-03-27%20at%204 34 32%20PM" src="https://user-images.githubusercontent.com/71753465/198495894-70e8b66e-5ead-4a67-ae04-b0b990a4889e.png">



**APIBuilder Protocol**

This protocol is what builds the API request. We are creating a protocol purely out of good practice in case we want to add in any other API’s. If we were to add in other API’s, we can reuse the protocol to build those requests as well. 

**ArticleAPI Enum**

This is the actual defined API. The case getNews is there because we are getting the NewsAPI

**ArticleAPI Extension**

This part is pretty self explanatory. Here we are just building the API. The base url is the url of the website we are pulling from. The path is the news path because we want to use the News API and not the weather or flights one. urlRequest is simply putting the base and path together.

## Handling Errors

This is just the basic handling of error cases. I’m not going to go in depth on this, but just add in the following code to the NetworkError swift file in Enum folder.

<img width="546" alt="Screen%20Shot%202022-03-27%20at%204 50 44%20PM" src="https://user-images.githubusercontent.com/71753465/198495960-9a789969-aaeb-4e03-b933-0abb41c71ed3.png">



# Part 4: Creating the Service to Trigger the API Request

Now we will be creating the Service that actually makes the call for the API Request. This will involve the use of the Combine package to handle the asynchronous changes in time. 

**URLSession**  - This is what is used to send API calls in iOS development so we will be using this to make the actual call to the API

- .dataTaskPublisher listens to the result of the service and allows you to use what the service returns. You want to pass into here the urlRequest that you create from endpoint.
- .receive specifies where you want to receive the information. URLSession works asynchronously on background threads so that the information will always be up to date while the app is running. However, you want to make sure that the information gets put into the app so you want to specify here that the information should be received on the main thread.
- .mapError takes care of errors by mapping the error to the unknown enum
- .flatMap takes in all of the necessary information and condenses it into a flattened array that can be used to pull data from. We will use this to return the publisher. In this, we are going to handle the errors and decoding the object.
    - First, we check if it is a valid response. If it is nil, we return an unknown error. If not, we continue. Whenever we create a Failure object, we also return a blank publisher.
    - Then, check if the response falls within the valid codes. If it does, then we decode the object using the created decoder. If it does not, return the error code.


<img width="662" alt="Screen%20Shot%202022-03-27%20at%205 15 16%20PM" src="https://user-images.githubusercontent.com/71753465/198495988-3d49f3e8-a0f1-47ca-8f55-5059b152853b.png">


# Part 5: Controlling States w/ ViewModel

The Article View is going to change based on the state it is in and we will be using a ViewModel to control this. Based on whether the article is loading, successful in loading, or failed loading, the view of the Article will be different. In order to do this, we want to create a Swift file in the ViewModel folder called ArticleViewModel. 

1. Create the ResultState enum which has the different possible cases for the state of the Article View
2. Create the ArticleViewModel protocol with the getArticles function (once again this is just good practice to use a protocol to take care of dependencies)
3. Create an ArticleViewModel class and make it an ObservableObject so that you can observe the changes that happen in the class and reflect them in the View
4. Now, we add in the getArticles function to do the following
    1. Get the news request
    2. If the request errors, set the state to failed
    3. If the request finishes, set the state to success
    4. The default state should be loading since the article must load to get the API request

Note: The set stuff above the function is there to communicate with the View and give the View something to check to get the state and display the correct information

<img width="898" alt="Screen%20Shot%202022-03-27%20at%206 20 41%20PM" src="https://user-images.githubusercontent.com/71753465/198496024-75fb7920-fa70-4a80-af0f-5fb6c2034634.png">



# Part 6: UI

## Using the Swift Package Manager

We are going to use the Swift Package Manager today to add in a third party package!

1. Visit this link: [https://github.com/dmytro-anokhin/url-image](https://github.com/dmytro-anokhin/url-image)
2. Follow the installation instructions in the README

## Building the UI

For the sake of time and energy, I’m going to just give you the code for the UI and not explain every little bit since this project is more to focus on the API requests and less on UI elements you should already know.  Read through the code as you type it in just to make sure you understand the SwiftUI and what it is doing.

In the Views folder, make the following Views:

- ArticleView
- ErrorView
- FeedView
- SettingsView

### ArticleView

<img width="643" alt="Screen%20Shot%202022-03-27%20at%207 00 06%20PM" src="https://user-images.githubusercontent.com/71753465/198496501-a385df30-3c02-414c-9558-4ba85fd38e56.png">
<img width="629" alt="Screen%20Shot%202022-03-27%20at%207 00 24%20PM" src="https://user-images.githubusercontent.com/71753465/198496060-8a333b70-0dfd-4d3b-840d-e726dfc38f06.png">



### ErrorView
<img width="621" alt="Screen%20Shot%202022-03-27%20at%207 01 21%20PM" src="https://user-images.githubusercontent.com/71753465/198496095-dd6b9843-2c4b-4899-92a6-5f54bcff7ce6.png">


### FeedView

<img width="621" alt="Screen%20Shot%202022-03-27%20at%207 01 59%20PM" src="https://user-images.githubusercontent.com/71753465/198496268-fbdd7f69-c699-4186-98cf-bf1c06c5a835.png">



### SettingsView

<img width="447" alt="Screen%20Shot%202022-03-27%20at%207 02 39%20PM" src="https://user-images.githubusercontent.com/71753465/198496274-8e3185fa-4b92-4175-bd73-5344f3c5c5e5.png">


### ContentView

Edit the ContentView with the following to put together the Views you already made.

<img width="738" alt="Screen%20Shot%202022-03-27%20at%2010 21 41%20PM" src="https://user-images.githubusercontent.com/71753465/198496295-7eb975d5-f8cb-4300-99d5-8a670c888f10.png">

# Submission:

To submit your homework. Go back to your terminal and navigate to your “Cubstart-iOS” directory using these commands:

```bash
cd Desktop
cd Cubstart-iOS
```

Then type in these commands to push your code onto your personal repository:

```bash
git add .
git commit -m "completed homework 7"
git push
```

You can also type `git status` to verify which files you are pushing.

Upload your code onto gradescope for HW 7 like so. Choose your personal repository we created in the beginning of the homework under “repository” and choose “main/master” under branch.

![image](https://user-images.githubusercontent.com/64179036/191868700-7a68570a-bf24-403a-9fbf-89dc57cf9d1b.png)
