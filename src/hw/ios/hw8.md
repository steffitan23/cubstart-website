# Quizlet-ish💯
# Introduction👋

OKAY LAST PROJECT YO. This is your final assignment for this class (other than your final team project of course). You will be building Quizlet-ish - an app that allows you to make flashcards for study use. In this project, we will be incorporating Google Firebase and Firestore to add persistence to the app.

Adapted from raywenderlich.com

## Setup🛠

For this project, I won’t be providing a skeleton code file for you to clone. You will be starting from scratch because I want you to be able to go through the full setup of Firebase and Firestore. Don’t worry. I will still be providing most of the code and will also link my GitHub link to the solutions at the end of the project.

1. Open up Xcode 
2. Click on File > New > Project
3. Select App
4. Name the product “Quizlet-ish”
5. Put com.YOURNAME as the organization id
6. Interface should be SwiftUI and the language should be Swift. Leave the boxes unchecked. (see below) Write down the bundle identifier somewhere. You will need it in a later part.
7. Hit Next and then on the next page, make sure the selected folder at the top is your cubstart directory that you normally clone into. This is important. Otherwise, you won’t be able to push your code to GitHub and submit to Gradescope. Check the git repo option. See below
8. Click create
9. Now we want to add a remote repo to your project. Click on the Source Control navigator on the top left (see below for the icon). Open up the Quizlet-ish drop down. Right click Remotes. Select “New “Quizlet-ish” remote”. Hit create.

<img width="736" alt="hw1" src="https://user-images.githubusercontent.com/71753465/199916578-dfc11e57-7c4c-40cf-9edf-e0b3df9e317c.png">
<img width="736" alt="hw2" src="https://user-images.githubusercontent.com/71753465/199916607-74607cd8-20b8-4491-8297-465dc77c1218.png">
<img width="268" alt="hw3" src="https://user-images.githubusercontent.com/71753465/199916630-40e9a782-106e-4752-bf8a-6038f9e716f3.png">


# Part 1: Setting up Firebase and Firestore

## Firebase

To get started with this project, you are going to need to create a Firebase account. The following steps will walk you through how to do this:

**Setting Up Account**

1. Go to the Firebase website: [https://firebase.google.com/](https://firebase.google.com/)
2. At the top right, click on go to console and log in with your Google Account ***Use your personal account, NOT YOUR BERKELEY ACCOUNT***

**Creating a Project**

1. Click on “Add Project”
2. Type in “Quizlet-ish” for the name of the project
3. Disable Google Analytics (we will not be using this in this project)
4. Click continue and you should be at the dashboard

**Adding Your App**

1. Select the iOS circle above “Add an app to get started”
2. For the iOS bundle ID field, enter the bundle ID you wrote down earlier
3. Follow the instructions provided on downloading “GoogleService-Info.plist” and adding it to the project. Check “Copy Items if needed”
4. Follow the instructions on adding the Firebase SDK to your iOS App
5. Skip the initialization code instructions that are provided. Instead add the following code to your “Quizlet-ishApp” file and import Firebase. It should look like the following. Click next until you are back at the dashboard.

```jsx
init() {
        FirebaseApp.configure()
      }
```

<img width="303" alt="hw4" src="https://user-images.githubusercontent.com/71753465/199916701-92a6fc75-6fba-455b-8a75-6b1a3ed838ec.png">



## Firestore

Now to set up Firestore Database!

1. In the console on the left, under Build, select Firestore Database
2. Click on Create Database
3. Follow the instructions provided: Select “test mode” and "nam5(us-central)” when prompted

Okay, that should be all the setup! Now, for the actual coding.

# Part 2: MVVM and Database Basics

## MVVM SetUp

Once again, we will be using a MVVM app set up. For this project, we will have Model, Views, View Model, and Repository

**Model** - hold the app data

**Views** - display the app data

**View Model** - transform the data from the models to the views

**Repository** - handle data source communication

Follow the image below and create the Groups and Files exactly how it is shown.

<img width="259" alt="hw5" src="https://user-images.githubusercontent.com/71753465/199916738-c73d5888-5a67-4ba4-908d-c5963e109a88.png">


## Cloud Firestore Database

A quick overview on Firestore...

Cloud Firestore is a NoSQL database that uses collections and documents to structure data.

**Collections** - hold the documents

**Documents** - have fields that constitute the entities of the app

In our case, a card will be a document and a group of cards will be the collection. We will be writing queries to manipulate the data from the collections.

# Part 3: Playing with Cards

### **Creating the Card Model**

In the Card.swift file under Models, add the following code:

This is just setting up the Card model. Nothing complicated.

```swift
import FirebaseFirestoreSwift

struct Card: Identifiable, Codable {
  @DocumentID var id: String?
  var question: String
  var answer: String
  var successful: Bool = true
  var userId: String?
}
```

### **Adding New Cards w/ the Repository**

Navigate to your Repository file and add the following code:

```swift

import FirebaseFirestore
import FirebaseFirestoreSwift
import Combine 

class CardRepository: ObservableObject {
  private let path: String = "cards"
  private let store = Firestore.firestore()
  func add(_ card: Card) {
    do {
      _ = try store.collection(path).addDocument(from: card)
    } catch {
      fatalError("Unable to add card: \(error.localizedDescription).")
    }
  }
}
```

This code is doing several things:

1. You are importing all of those things in order to get access to the Firestore API and the commands needed to use it
    1. FirebaseFirestore - access to the API
    2. FirebaseFirestoreSwift - lets you convert Cards into documents and back
    3. Combine - set of declarative APIs for Swift
2. Define `CardRepository` . Then, declare `path` and assigned the value `card` which is the collection name in Firestore.
3. Declare `store` and assign a reference to the `Firestore` instance.
4. Next, you define `add(_:)` and use a do-catch block to capture any errors thrown by the code
5. Create a reference to the cards collection using `path`, and then pass `card` to `addDocument(from:encoder:completion:)`. This adds a new card to the collection.

### Connecting the Model w/ the Views

Go to CardListViewModel.swift in your ViewModels group and add the following code:

```swift
import Combine

class CardListViewModel: ObservableObject {
  @Published var cardRepository = CardRepository()

  func add(_ card: Card) {
    cardRepository.add(card)
  }
}
```

Open up NewCardForm.swift and add the following code:

```swift
import SwiftUI

struct NewCardForm: View {
  @State var question: String = ""
  @State var answer: String = ""
  @Environment(\.presentationMode) var presentationMode
  @ObservedObject var cardListViewModel: CardListViewModel

  var body: some View {
    VStack(alignment: .center, spacing: 30) {
      VStack(alignment: .leading, spacing: 10) {
        Text("Question")
          .foregroundColor(.gray)
        TextField("Enter the question", text: $question)
          .textFieldStyle(RoundedBorderTextFieldStyle())
      }
      VStack(alignment: .leading, spacing: 10) {
        Text("Answer")
          .foregroundColor(.gray)
        TextField("Enter the answer", text: $answer)
          .textFieldStyle(RoundedBorderTextFieldStyle())
      }
      Button(action: addCard) {
        Text("Add New Card")
          .foregroundColor(.blue)
      }
      Spacer()
    }
    .padding(EdgeInsets(top: 80, leading: 40, bottom: 0, trailing: 40))
  }
}

private func addCard() {
    let card = Card(question: question, answer: answer)
    cardListViewModel.add(card)
    presentationMode.wrappedValue.dismiss()
  }
}

struct NewCardForm_Previews: PreviewProvider {
  static var previews: some View {
    NewCardForm(cardListViewModel: CardListViewModel())
  }
}
```

This code creates a `Card` using the `question` and `answer` properties already declared at the top, adds the new `card` using the view model, and then dismisses the current view.

Finally, go to CardListView.swift and add in the following code:

```swift
import SwiftUI

struct CardListView: View {
  var cards: [Card] = []
  @State var showForm = false

  var body: some View {
    NavigationView {
      VStack {
        Spacer()
        VStack {
          GeometryReader { geometry in
            ScrollView(.horizontal) {
              HStack(spacing: 10) {
                ForEach(cards, id: \.id) { card in
                  CardView(card: card)
                    .padding([.leading, .trailing])
                }
              }.frame(height: geometry.size.height)
            }
          }
        }
        Spacer()
      }
      .sheet(isPresented: $showForm) {
        NewCardForm(cardListViewModel: CardListViewModel())
      }
      .navigationBarTitle("💯 Quizlet-ish")
        .navigationBarItems(trailing: Button(action: { showForm.toggle() }) {
          Image(systemName: "plus")
            .font(.title)
        })
    }
    .navigationViewStyle(StackNavigationViewStyle())
  }
}

struct CardListView_Previews: PreviewProvider {
  static var previews: some View {
    CardListView(cards: testData)
  }
}
```

### Displaying Cards

**Setting up the CardViewModel**

In your CardViewModel.swift add the following code:

```swift
import Combine

class CardViewModel: ObservableObject, Identifiable {
  private let cardRepository = CardRepository()
  @Published var card: Card
  private var cancellables: Set<AnyCancellable> = []
  var id = ""

  init(card: Card) {
    self.card = card
    $card
      .compactMap { $0.id }
      .assign(to: \.id, on: self)
      .store(in: &cancellables)
  }
}
```

Here you are declaring `CardViewModel` . `Cancellables` is used to store subscriptions so you can cancel them later. The code at the end is binding for card between the id of the card and the view model’s id and then storing it in cancellables.

**Setting up the Repository**

Navigate to your CardRepository.swift file and add the following code below the property definitions from before:

```swift
@Published var cards: [Card] = []

init() {
  get()
}

func get() {
  store.collection(path)
    .addSnapshotListener { querySnapshot, error in
      if let error = error {
        print("Error getting cards: \(error.localizedDescription)")
        return
      }

        self.cards = querySnapshot?.documents.compactMap { document in
        try? document.data(as: Card.self)
      } ?? []
    }
}
```

This code is essentially grabbing the data from Firestore and mapping the documents to Cards that you can use.

**Setting up CardListViewModel**

Open up CardListViewModel and add the following code:

```swift
@Published var cardViewModels: [CardViewModel] = []
private var cancellables: Set<AnyCancellable> = []

init() {
  cardRepository.$cards.map { cards in
    cards.map(CardViewModel.init)
  }
  .assign(to: \.cardViewModels, on: self)
  .store(in: &cancellables)
}
```

This code listens to cards and creates an array of CardViewModel’s by mapping each Card element into an array. It then assigns the results to cardViewModels and stores into cancellables so that the cards are cancelled when they are deinitialized.

**Setting up CardView**

Add the following code to CardView.swift:

```swift
import SwiftUI

struct CardView: View {

	var cardViewModel: CardViewModel  @State var showContent: Bool = false
  @State var viewState = CGSize.zero
  @State var showAlert = false

  var body: some View {
    ZStack(alignment: .center) {
      backView.opacity(showContent ? 1 : 0)
      frontView.opacity(showContent ? 0 : 1)
    }
    .frame(width: 250, height: 400)
    .background(Color.orange)
    .cornerRadius(20)
    .shadow(color: Color(.blue).opacity(0.3), radius: 5, x: 10, y: 10)
    .rotation3DEffect(.degrees(showContent ? 180.0 : 0.0), axis: (x: 0, y: -1, z: 0))
    .offset(x: viewState.width, y: viewState.height)
    .animation(.spring(response: 0.6, dampingFraction: 0.8, blendDuration: 0))
    .onTapGesture {
      withAnimation {
        showContent.toggle()
      }
    }
    .gesture(
      DragGesture()
        .onChanged { value in
          viewState = value.translation
        }
      .onEnded { value in
        if value.location.y < value.startLocation.y - 40.0 {
          self.showAlert.toggle()
        }
        viewState = .zero
      }
    )
      .alert(isPresented: $showAlert) {
        Alert(
          title: Text("Remove Card"),
          message: Text("Are you sure you want to remove this card?"),
          primaryButton: .destructive(Text("Remove")) {
          },
          secondaryButton: .cancel()
        )
      }
  }

  var frontView: some View {
    VStack(alignment: .center) {
      Spacer()
			Text(cardViewModel.card.question)        
				.foregroundColor(.white)
        .font(.system(size: 20))
        .fontWeight(.bold)
        .multilineTextAlignment(.center)
        .padding(20.0)
      Spacer()
    }
  }

  var backView: some View {
    VStack(alignment: .center) {
      Spacer()
      Text(cardViewModel.card.answer)
        .foregroundColor(.white)
        .font(.body)
        .padding(20.0)
        .multilineTextAlignment(.center)
        .animation(.easeInOut)
      Spacer()
    }
    .rotation3DEffect(.degrees(180), axis: (x: 0.0, y: 1.0, z: 0.0))
  }
}
```

This is the UI for the CardView and also sets up your code to pull from the View Model rather than the Card model.

**Setting up CardListView**

Replace your code in CardListView with this:

```swift
import SwiftUI

struct CardListView: View {
  @ObservedObject var cardListViewModel = CardListViewModel()
  @State var showForm = false

  var body: some View {
    NavigationView {
      VStack {
        Spacer()
        VStack {
          GeometryReader { geometry in
            ScrollView(.horizontal) {
              HStack(spacing: 10) {
                ForEach(cardListViewModel.cardViewModels) { cardViewModel in
                  CardView(cardViewModel: cardViewModel)
                    .padding([.leading, .trailing])
                }
              }.frame(height: geometry.size.height)
            }
          }
        }
        Spacer()
      }
      .sheet(isPresented: $showForm) {
        NewCardForm(cardListViewModel: CardListViewModel())
      }
      .navigationBarTitle("💯 Quizlet-ish")
        // swiftlint:disable multiple_closures_with_trailing_closure
        .navigationBarItems(trailing: Button(action: { showForm.toggle() }) {
          Image(systemName: "plus")
            .font(.title)
        })
    }
    .navigationViewStyle(StackNavigationViewStyle())
  }
}
```

Here you are changing the wrapping list view so that it’ll work with the Card View Model now instead of just the Card View. The ForEach statement is iterating over the array of CardViewModels and creating a CardView for each one so that they are displayed in your view.

# Part 4: Updating Cards

Another aspect of this app that we want to put in place is the ability to mark if you got an answer right or wrong. This way you can see if your studying is working!

**Card ID**

Change Card.swift to look like this:

```swift
import Foundation
import FirebaseFirestoreSwift

struct Card: Identifiable, Codable {
  @DocumentID var id: String?
  var question: String
  var answer: String
  var successful: Bool = true
  var userId: String?
}
```

This code just makes sure that, when we convert documents to Cards, we map the id from the Cloud Firestore to an id in our code.

**Updating Cards**

In CardRepository.swift add in the following function:

```swift
func update(_ card: Card) {
    guard let cardId = card.id else { return }

    do {
      try store.collection(path).document(cardId).setData(from: card)
    } catch {
      fatalError("Unable to update card: \(error.localizedDescription).")
    }
  }
```

This function first checks that `card.id` has a value. Then using `path` and `cardId`, it gets a reference to the document in the cards collection, then updates the fields by passing `card` to `setData(from:encoder:completion:)`

You also need to update the view model now. Go to CardViewModel.swift and add the method below:

```swift
func update(card: Card) {
    cardRepository.update(card)
  }
```

**Updating CardView**

In CardView, add in the following code after the second Spacer() in frontView:

```swift
if !cardViewModel.card.successful {
        Text("You answered this one incorrectly before")
          .foregroundColor(.white)
          .font(.system(size: 11.0))
          .fontWeight(.bold)
          .padding()
      }
```

Add the following methods to CardView as well:

```swift
private func markCardAsUnsuccesful() {
    var updatedCard = cardViewModel.card
    updatedCard.successful = false
    update(card: updatedCard)
  }

  private func markCardAsSuccesful() {
    var updatedCard = cardViewModel.card
    updatedCard.successful = true
    update(card: updatedCard)
  }

  func update(card: Card) {
    cardViewModel.update(card: card)
    showContent.toggle()
  }
```

This methods take care of successful answer cases, unsuccessful answer cases, and updating the card.

Now, replace the backView with the following:

```swift
var backView: some View {
    VStack {
      // 1
      Spacer()
      Text(cardViewModel.card.answer)
        .foregroundColor(.white)
        .font(.body)
        .padding(20.0)
        .multilineTextAlignment(.center)
        .animation(.easeInOut)
      Spacer()
      // 2
      HStack(spacing: 40) {
        Button(action: markCardAsSuccesful) {
          Image(systemName: "hand.thumbsup.fill")
            .padding()
            .background(Color.green)
            .font(.title)
            .foregroundColor(.white)
            .clipShape(Circle())
        }
        Button(action: markCardAsUnsuccesful) {
          Image(systemName: "hand.thumbsdown.fill")
            .padding()
            .background(Color.blue)
            .font(.title)
            .foregroundColor(.white)
            .clipShape(Circle())
        }
      }
      .padding()
    }
    .rotation3DEffect(.degrees(180), axis: (x: 0.0, y: 1.0, z: 0.0))
  }
```

# Part 5: Removing Cards

We will cover the process of removing a card here.

**Deleting the Card from Firestore**

Go to CardRepository.swift and add in the remove method at the bottom (within the CardRepository class):

```swift
func remove(_ card: Card) {
    guard let cardId = card.id else { return }

    store.collection(path).document(cardId).delete { error in
      if let error = error {
        print("Unable to remove card: \(error.localizedDescription)")
      }
    }
  }
```

This method accesses the collection in our Firestore database by the path passed in. It then finds the card with the cardID and attempts to delete the document associated with it, printing an error if it can’t.

In your CardViewModel.swift, add in the remove method:

```swift
func remove() {
    cardRepository.remove(card)
  }
```

Finally, update the Alert in CardView.swift so it looks like this:

```swift
Alert(
          title: Text("Remove Card"),
          message: Text("Are you sure you want to remove this card?"),
          primaryButton: .destructive(Text("Remove")) {
            cardViewModel.remove()
          },
          secondaryButton: .cancel())
```

Together, this code calls the remove method on the cardViewModel and executes the logic to remove the card from the Firestore database. The cards are removed by dragging them to the top of the screen and clicking remove when the alert pops up.

# Part 6: Security and Authentication

## Anonymous Authentication

To provide security to our app, we will take advantage of Firebase’s Anonymous Authentication which lets users authenticate into the app.

**Activating Authentication Mode**

1. Go to Firebase Console
2. Select Authentication on the side bar
3. Select Sign-in method
4. Go to the bottom of the Providers List
5. Select Anonymous and enable it
6. Click Save

## Creating an Authentication Service

In AuthenticationService.swift add the following code:

```swift
import Foundation
import Firebase

class AuthenticationService: ObservableObject {
  @Published var user: User?
  private var authenticationStateHandler: AuthStateDidChangeListenerHandle?

  init() {
    addListeners()
  }

  static func signIn() {
    if Auth.auth().currentUser == nil {
      Auth.auth().signInAnonymously()
    }
  }

  private func addListeners() {
    if let handle = authenticationStateHandler {
      Auth.auth().removeStateDidChangeListener(handle)
    }

    authenticationStateHandler = Auth.auth()
      .addStateDidChangeListener { _, user in
        self.user = user
      }
  }
}
```

In “Quizlet-ishApp” file, after FIrebaseApp.configure(), add:

```swift
AuthenticationService.signIn()
```

In CardRepository.swift, at the top of the class, add the following properties:

```swift
var userId = ""
private let authenticationService = AuthenticationService()
private var cancellables: Set<AnyCancellable> = []
```

Change init() and add() to the following:

```swift
init() {
    authenticationService.$user
      .compactMap { user in
        user?.uid
      }
      .assign(to: \.userId, on: self)
      .store(in: &cancellables)

    authenticationService.$user
      .receive(on: DispatchQueue.main)
      .sink { [weak self] _ in
        self?.get()
      }
      .store(in: &cancellables)
  }
```

```swift
func add(_ card: Card) {
    do {
      var newCard = card
      newCard.userId = userId
      _ = try store.collection(path).addDocument(from: newCard)
    } catch {
      fatalError("Unable to add card: \(error.localizedDescription).")
    }
  }
```

Finally, before .addSnapshotListener in get(), add the following:

```swift
.whereField("userId", isEqualTo: userId)
```

## Security Rules

1. Go to Firebase console
2. Go to Cloud Firestore
3. Click Rules
4. Replace the code with the following:

```swift
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

Click Publish. That’s it! All done! Now you can demo the project. The screenshots below show what the workflow should look like. Check your Firestore Database to make sure that you are storing the data as shown below and that the data is removed when you remove a card.

# Part 7: Demo Screenshots

Here are the solutions: [https://github.com/jy73/quizlet-ish](https://github.com/jy73/quizlet-ish)

# Submission:

To submit your homework. Go back to your terminal and navigate to your “Cubstart-iOS” directory using these commands:

```bash
cd Desktop
cd Cubstart-iOS
```

Then type in these commands to push your code onto your personal repository:

```bash
git add .
git commit -m "completed homework 8"
git push
```

You can also type `git status` to verify which files you are pushing.

Upload your code onto gradescope for HW 8 like so. Choose your personal repository we created in the beginning of the homework under “repository” and choose “main/master” under branch.

![image](https://user-images.githubusercontent.com/64179036/191868700-7a68570a-bf24-403a-9fbf-89dc57cf9d1b.png)
