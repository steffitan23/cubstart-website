# HW 7: Quizlet-ish (Part 2): Connect your API to MongoDB

Ddoski has been working on the flashcards app since last time! He's built a nice frontend and is now working on connecting the API to a database to **persist flashcard data**. Help him out!

This will be the finished product:

<video width="100%" controls>
  <source src="/assets/hw7/finished-app.mp4" type="video/mp4">
</video>

## Part 1: Set up your project

Since you've already downloaded Node.js in the last homework, we're just going to set up a project with an existing package.json.

_[Download the skeleton here.](assets/hw7/sp24-hw7-skeleton.zip)_

Extract the skeleton .zip. Open the VS Code terminal by going to Terminal -> New Terminal at the very top of your screen. Alternatively, open the default Mac or Windows terminal and change directories (eg. `cd Desktop`) into the `sp24-hw7-skeleton` folder. Run the command:

```bash
npm install
```

Your folder should look like this:

<img src="/assets/hw7/folder-setup.PNG" style="width: 50%; padding: 20px 0;"/>

## Part 2: Set up your MongoDB Atlas Cluster

_**Important**: The instructions and screenshots included below are from an older version of MongoDB's website and may differ from the current setup flow. We walked through setting up MongoDB during Lab 7, so please review the [recording](https://drive.google.com/file/d/1fQ2CaSu0pTaxhmKsPsujK31fjlAD1_jx/view?usp=drive_link) and screenshots on the [slides](https://docs.google.com/presentation/d/1kIfvftMkEyDe6ZvmdvbD7dao4Bhizy9MHgD8ZKU0RnQ/edit#slide=id.g2c2ac1d3b60_1_67) to see the current steps if you did not set up your database during lab._

<details>
<summary>See Instructions</summary>

Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) and register for an account.

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

Nice! You've set up MongoDB!

### Get the MongoDB connection URL

Go to your cluster and click "Connect".
<img src="/assets/hw7/connect-mongodb.png" style="width: 70%; padding: 20px 0;"/>

Click "Connect using VS Code". Ensure that your connection security and method are set up correctly, then **you'll see your special MongoDB url. You'll need this later.**
<img src="/assets/hw7/connect-vscode.png" style="width: 70%; padding: 20px 0;"/>
<img src="/assets/hw7/mongo-url.png" style="width: 70%; padding: 20px 0;"/>

</details>

_Make sure you have a DB connection URL!_


## Part 3: Write code

You will use the URL from above to connect your project to your MongoDB database. Then, you will write a mongoose schema and model, followed by express route handlers for the API.

_Get started on the homework skeleton! Begin by completing **database.js**. Then, finish **server.js**._

Take a look at lecture or lab slides if you are stuck! Feel free to post on Ed if you have any questions or need help.

## Part 4: Test the API

We can only listen to requests if we start the server. Remember to run **node server.js** every time you edit and save your code in order to restart the server. To quit the running server, you can press Ctrl-C in the terminal window when it is focused and the command prompt will return. It will look something like this:

<img src="/assets/hw7/node-server-terminal.png" style="width: 100%; padding: 20px 0;"/>

Use Postman like we did in HW 6 to test your endpoints!

Create 3 flashcards by making POST requests to the "/new" endpoint. Make sure the "mode" in blue, is set to JSON and the request type is set to POST. Here is an example.

<img src="/assets/hw7/postman-testing-post.PNG" style="width: 100%; padding: 20px 0;"/>

Make a GET request to the "/cards" endpoint. Make sure to set the request type to GET.

<img src="/assets/hw7/postman-testing.PNG" style="width: 100%; padding: 20px 0;"/>

Check MongoDB to make sure that your flashcards are being stored in the database. Hit **Refresh** to see the newest data.

<img src="/assets/hw7/refresh-database.png" style="width: 100%; padding: 20px 0;"/>


## Part 5: Run the Frontend

Once your server is working, you can test the frontend! Note the use of the middleware **express.static** in server.js to serve static files (i.e. HTML/CSS/JS/images/etc.) inside the folder "public". Start the server with **node server.js** and navigate to <http://localhost:3000> to try out your working application!

**Even if you restart the server, the data will remain in your database!**

# Submission

For this homework, **please submit your database.js and server.js files**.

**To zip a folder/file:**
_**Windows:** Right-click the folder, select (or point to) Send to, and then select Compressed (zipped) folder._
_**macOS:** Control-click the folder  or tap it using two fingers, then choose Compress from the shortcut menu._

Upload the .zip file to [Gradescope](https://www.gradescope.com) :)

