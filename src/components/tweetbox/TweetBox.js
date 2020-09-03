import React, {useState} from 'react';
import './TweetBox.scss';
import {Avatar, Button} from '@material-ui/core';
import db from '../../firebase';


function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');
    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'beren',
            username: 'bbbbberne',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://lh3.googleusercontent.com/a-/AOh14GimYSKcIDvRTS1KpZvv3z_YvLt4nmELp4_D9FHaRA=s88-c-k-c0x00ffffff-no-rj-mo'
        });

        setTweetMessage('');
        setTweetImage('');
    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://lh3.googleusercontent.com/a-/AOh14GimYSKcIDvRTS1KpZvv3z_YvLt4nmELp4_D9FHaRA=s88-c-k-c0x00ffffff-no-rj-mo"></Avatar>
                    <input onChange= {e => setTweetMessage(e.target.value)}value={tweetMessage} placeholder="What's happening?" />
                </div>
                <input value={tweetImage} onChange={e => setTweetImage(e.target.value)} className="tweetBox__imageInput" placeholder="Enter image URL..." type="text"/>
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetBtn">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
