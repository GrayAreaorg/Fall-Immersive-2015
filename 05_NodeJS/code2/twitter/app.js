//Import Twitter module
var Twitter = require('twitter')


// Authenticates with Twitter using the (unofficial) twitter
// package on npm. This is required for using the interesting parts
// of the API, e.g. streaming or posting tweets.
var client = new Twitter({
    consumer_key: 'H7WE4DmlhgyqhJtJXKVVeSCxd',
    consumer_secret: '5v5e1RrQOspeUzLm7XqoLny8PPoPCnTakIgR2Qc3K1JHURNCWn',
    access_token_key: '3035181914-VdvXFCCouAD5BN7brkmMnv95U842QhljYTSj9x6',
    access_token_secret: '4XtCCHgqnDu6WWJ7aC0qjV24xDbzhAaEYvI6ZjUuqZwgv'
})

// Creates a realtime streaming connection to the Twitter
// API, letting you "track" a particular keyword or hashtag
// and recieve a notification instantly as soon as a tweet is posted.
//
// Documentation, including additional parameters you can use, may
// be found here:
// https://dev.twitter.com/streaming/reference/post/statuses/filter
//
// Note that you can also stream tweets from particular users, or
// tweets posted from around a particular location

client.stream('statuses/filter', {
//track a word
        track: 'Donald Trump'

    }, function(tweetStream) {
        // `tweetStream` will emit a "data" event whenever
        // a new tweet is posted. These will be in the same format
        // as seen in the first example.
        tweetStream.on('data', function(tweet) {
            //log tweet to the console
            console.log(tweet.text);
        })
});

