# Quizlet-ish (Part 2): Connect your API to a Database

## A sneaky project
You've decided to steal Ddoski's idea from right under his nose. But, execution is everything. You're going to make a flashcards app but **better**. To improve Ddoski's project, you're going to connect a database to the API so that you can **persist flashcard data**.

## Part 1: Set up your project
Since you've already downloaded Node.js in the last homework, we're just going to set up a project with an existing package.json.

_[Download the skeleton here.](assets/hw7/hw7-skeleton.zip)_

Extract the skeleton .zip. Go to your terminal in your hw7-skeleton folder and run the command:
```bash
npm install
```
Check that all the dependencies are successfully installed (a node_modules folder is created) and you should be good to go!

Your folder should look like this:

<img src="/assets/hw7/folder-setup.PNG" style="width: 70%; padding: 20px 0;"/>


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
Now, you can use this in your index.js and get started on the homework skeleton!

## Testing
Remember to do 
```bash
node index.js
```
every time you update and save your file, to run the server. We can only listen to requests if we start the server. It will look like this:

<img src="/assets/hw7/node_indexjs.PNG" style="width: 100%; padding: 20px 0;"/>

Something going wrong? You should use Postman like we did in the last homework to test your routes!

This is an example of how we test the "/cards" endpoint with a GET request.

<img src="/assets/hw7/postman-testing.PNG" style="width: 100%; padding: 20px 0;"/>

This is an example of how we test the "/new" endpoint with a POST request. (Make sure the "mode" in blue, is set to JSON.)

<img src="/assets/hw7/postman-testing-post.PNG" style="width: 100%; padding: 20px 0;"/>

You can also check your database to see if any entries are being stored there. Make sure to hit **Refresh** to refresh the database to see the newest data.

<img src="/assets/hw7/refresh-database.png" style="width: 100%; padding: 20px 0;"/>


## Final Application
If you successfully get everything working, you can open **index.html** in your browser to try out our working application!

**Even if you restart the server and index.html, the data will remain in your database!**

<div style="position: relative; padding-bottom: 53.59375000000001%; height: 0;"><iframe src="assets/hw7/finished-app.mp4" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

**Good job!**

# Submission
To submit the homework folder, you have to zip it first. Make sure **not to include the "node_modules" folder**. You can do this by moving all your other files for submission into a separate folder and then zipping that folder.

**To zip a folder:**
_**Windows:** Right-click the folder, select (or point to) Send to, and then select Compressed (zipped) folder._
_**macOS:** Control-click the folder  or tap it using two fingers, then choose Compress from the shortcut menu._

Upload the .zip file to [Gradescope](https://www.gradescope.com/courses/437611) :)

