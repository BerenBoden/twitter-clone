import React from 'react';
import './Widgets.scss';
import SearchIcon from '@material-ui/icons/Search';
import {TwitterTimelineEmbed,TwitterShareButton,TwitterTweetEmbed,} from 'react-twitter-embed';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1300470390213365761"} />
                <TwitterTimelineEmbed sourceType="profile" screenName="codeunloaders" options={{height: 400}} />
                <TwitterShareButton url={"https://twitter.com/codeunloaders"} options={{text: "jjj", via: "ddd"}}/>
            </div>
        </div>
    )
}

export default Widgets
