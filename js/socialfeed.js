    $(document).ready(function(){
        $('.social-feed-container').socialfeed({
        	// FACEBOOK
		    facebook:{
		        accounts: ['@alcaldiamoca','!alcaldiamoca'],  //Array: Specify a list of accounts from which to pull wall posts
		        limit: 2,                                   //Integer: max number of posts to load
		        access_token: '188173785042942|177400cca39746072af86504da224913'  //String: "APP_ID|APP_SECRET"
		    },
		    // TWITTER
		    twitter:{
		        accounts: ['@municipiomoca'],                      //Array: Specify a list of accounts from which to pull tweets
		        limit: 2,                                   //Integer: max number of tweets to load
		        consumer_key: 'qzRXgkI7enflNJH1lWFvujT2P',          //String: consumer key. make sure to have your app read-only
		        consumer_secret: '8e7E7gHuTwyDHw9lGQFO73FcUwz9YozT37lEvZulMq8FXaPl8O' //String: consumer secret key. make sure to have your app read-only
		     },

            // GENERAL SETTINGS
            length:400                                    //Integer: For posts with text longer than this length, show an ellipsis.
        });
    });