# HW 7: Quizlet-ish (Part 2): Connect your API to a Database

Let's make your flashcards app **better**. You're going to connect a database to the API so that you can **persist flashcard data**.

This is the finished product:

<video width="100%" controls>
  <source src="/assets/hw7/finished-app.mp4" type="video/mp4">
</video>

## Part 1: Set up your project
Since you've already downloaded Node.js in the last homework, we're just going to set up a project with an existing package.json.

_[Download the skeleton here.](assets/hw7/fa23-hw7-skeleton.zip)_

Extract the skeleton .zip. Open the VS Code terminal by going to Terminal->New Terminal at the very top of your screen. Alternatively, open the default Mac or Windows terminal and change directories (eg. cd Desktop) into the fa23-hw7-skeleton folder. Run the command:
```bash
npm install
```

Your folder should look like this:

<img src="/assets/hw7/folder-setup.PNG" style="width: 50%; padding: 20px 0;"/>

## Part 2: Set up your MongoDB Cluster
Go to [MongoDB](https://www.mongodb.com/cloud/atlas/register) and register for an account.

Choose the shared free cluster here:
<img src="/assets/hw7/shared-cluster.PNG" style="width: 70%; padding: 20px 0;"/>

Then, just click on all the recommended regions:
<img src="/assets/hw7/cluster_set_up.PNG" style="width: 70%; padding: 20px 0;"/>

This will take you to a dashboard page. Along the sidepanel, under "Security", click "Quickstart".
<img src="/assets/hw7/security-quickstart.PNG" style="width: 70%; padding: 20px 0;"/>

Add a username and password. Remember the password; we'll need it later.
<img src="/assets/hw7/password-qs.PNG" style="width: 70%; padding: 20px 0;"/>

Add your IP address. You can find it [here (Click me!)](https://whatismyipaddress.com/) under **IPv4**.
<img src="/assets/hw7/ip-qs.PNG" style="width: 70%; padding: 20px 0;"/>

Now, you can see your database under "Deployment" -> "Database" on the side panel. 
<img src="/assets/hw7/database-deployments.PNG" style="width: 70%; padding: 20px 0;"/>

Click "Browse Collections" to see your empty database. Later on, it'll look something like this:
<img src="/assets/hw7/add_flashcard.PNG" style="width: 70%; padding: 20px 0;"/>

**Nice! You've set up MongoDB!**

## Part 3: Connecting API to MongoDB
Go to your cluster and click "Connect". 
<img src="/assets/hw7/connect-mongodb.png" style="width: 70%; padding: 20px 0;"/>

Click "Connect using VSCode". Ensure that your connection security and method are set up correctly, then **you'll see your special MongoDB url. You'll need this later.**
<img src="/assets/hw7/connect-vscode.png" style="width: 70%; padding: 20px 0;"/>
<img src="/assets/hw7/mongo-url.png" style="width: 70%; padding: 20px 0;"/>

_**Remember to copy this url for later!**_

## Part 4: Writing Code

_Get started on the homework skeleton! You will only be editing **index.js**._

Use the url from above to connect your project to your MongoDB database. Take a look at the lecture slides if you are stuck!

## Part 5: Testing
Remember to run **node index.js** every time you update and save your file, to run the server. We can only listen to requests if we start the server. It will look like this:

<img src="/assets/hw7/node_indexjs.PNG" style="width: 100%; padding: 20px 0;"/>

Use Postman like we did in HW 6 to test your endpoints!

Create 3 flashcards by making POST requests to the "/new" endpoint. Make sure the "mode" in blue, is set to JSON and the request type is set to POST. Here is an example.

<img src="/assets/hw7/postman-testing-post.PNG" style="width: 100%; padding: 20px 0;"/>

Make a GET request to the "/cards" endpoint. Make sure to set the request type to GET.

<img src="/assets/hw7/postman-testing.PNG" style="width: 100%; padding: 20px 0;"/>

Check MongoDB to make sure that your flashcards are being stored in the database. Hit **Refresh** to see the newest data.

<img src="/assets/hw7/refresh-database.png" style="width: 100%; padding: 20px 0;"/>


## Final Application
Run **node index.js** and open **index.html** in your browser to try out your working application!

**Even if you restart the server and index.html, the data will remain in your database!**

# Submission
For this homework, **only submit your index.js file**.

**To zip a folder/file:**
_**Windows:** Right-click the folder, select (or point to) Send to, and then select Compressed (zipped) folder._
_**macOS:** Control-click the folder  or tap it using two fingers, then choose Compress from the shortcut menu._

Upload the .zip file to [Gradescope](https://www.gradescope.com) :)

