var fs = require('fs');

/// สร้างตัวแปรเก็บ user, tweet, and follow
var users = new Map();
var tweets = new Map();
var follows = new Map();

loadData = () => {
    // load all users
        // user_id name
    fs.readFile('user.txt', function (err, filedata) {
        if(err) throw err;

        let user_data = filedata.toString();
        let user_lines = user_data.split('\n');

        user_lines.forEach((line) => {
            let dat = line.split(' ');
            users.set(dat[0], dat[1]);
        })
        users.forEach((value, key) => {
            console.log('User ' + key + ' name is ' + value);
        })
    });

    // load all tweets
        // tweet_id user_id source_tweet_id message
    fs.readFile('tweet.txt', function (err, filedata) {
        if(err) throw err;

        let tweet_data = filedata.toString();
        let tweet_lines = tweet_data.split('\n');

        tweet_lines.forEach((line) => {
            let dat = line.split(' ');
            let message = ''
            for(let i = 3;dat[i]!=null;i++){
                message += dat[i] + ' '
            }
            tweets.set(dat[0], [dat[1],dat[2],message])
        })

        tweets.forEach((value,key) => {
            console.log(`Tweet ${key} (User:${value[0]}, Source:${value[1]}), Message: ${value[2]}`)
        })
    });

    // load following list
        // user_id follow_user_id
    fs.readFile('follow.txt', function (err, filedata) {
        if(err) throw err;

        let follow_data = filedata.toString();
        let follow_lines = follow_data.split('\n');

        follow_lines.forEach((line) => {
            let dat = line.split(' ');
            follows.set(dat[0], [dat[1],dat[2].charAt(0)])
        })
        follows.forEach((value, key) => {
            console.log(value[0],value[1])
            console.log(`${key}: User ${users.get(value[0])} follows ${users.get(value[1])}`)
        })
    });

};

saveTweet = () => {
    let buffer = ''
    tweets.forEach((value,key)=>{
        buffer += key + ' ' + value[0] + ' ' + value[1] + ' ' + value[2] + '\n'
    })
    fs.writeFile('tweet.txt', buffer,function(err){
        if(err) throw err
    })
}

saveFollow = () => {
    let buffer = ''
    follows.forEach((value,key)=>{
        buffer += key + ' ' + value[0] + ' ' + value[1] + '\n'
    })
    fs.writeFile('follow.txt', buffer,function(err) {
        if(err) throw err
    })
}

timeline = (user_id) => {
    let following = new Array()

    follows.forEach((value)=>{
        if(value[0]==user_id){
            following.push(value[1])
        }
    })

    let result = new Array()

    tweets.forEach((value)=>{
        for(let i = 0;i<following.length;i++){
            if(value[0]===following[i]){
                result.push(value)
            }
        }
    })

    return result.toString()
}

feed = (user_id) => {
    let result = new Array()

    if(user_id!=null){
        tweets.forEach((value) => {
            if(value[0]===user_id){
                result.push(value[2])
            }
        })
    }else{
        tweets.forEach((value)=>{
            result.push(value[2])
        })
    }
    
    return result.toString()
}

create_tweet = (user_id, source_id, message) => {
    tweets.set(tweets.size+1,[user_id,source_id,message])
    saveTweet()
    return `[${user_id},${source_id},${message}]`
}

follow = (user_id, follow_user_id) => {
    let gate = true 
    follows.forEach((value)=>{
        if(value[0]===user_id&&value[1]===follow_user_id){
            gate = false
        }
    })
    
    if(gate){
        follows.set(follows.size+1,[user_id,follow_user_id])
        saveFollow()
        return 'Followed'
    }else{
        return 'Already followed'
    }
}

module.exports = {
    loadData: loadData,
    timeline: timeline,
    feed: feed,
    create_tweet: create_tweet,
    follow: follow,
};