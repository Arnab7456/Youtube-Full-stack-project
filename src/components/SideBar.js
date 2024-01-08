import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import homeIcon from "../assets/home.svg";
import shortsIcon from "../assets/shorts.svg";
import subscriptionsIcon from "../assets/subscriptions.svg";
import libraryIcon from "../assets/library.svg";
import historyIcon from "../assets/history.svg";
import yourVideosIcon from "../assets/yourVideos.svg";
import watchLaterIcon from "../assets/watchLater.svg";
import likedVideosIcon from "../assets/likedVideos.svg";
import showMoreIcon from "../assets/showMore.svg";
import redLiveIcon from "../assets/red-live.svg";
import trendingIcon from "../assets/trending.svg";
import shoppingIcon from "../assets/shopping.svg";
import musicIcon from "../assets/music.svg";
import moviesIcon from "../assets/movies.svg";
import liveIcon from "../assets/live.svg";
import gamingIcon from "../assets/gaming.svg";
import newsIcon from "../assets/news.svg";
import sportsIcon from "../assets/sports.svg";
import learningIcon from "../assets/learning.svg";
import fashionAndBeautyIcon from "../assets/fashionAndBeauty.svg";
import ytPremiumIcon from "../assets/yt-premium.svg";
import ytStudioIcon from "../assets/yt-studio.svg";
import ytMusicIcon from "../assets/yt-music.svg";
import ytKidsIcon from "../assets/yt-kids.svg";
import settingsIcon from "../assets/settings.svg";
import reportHistoryIcon from "../assets/reportHistory.svg";
import helpIcon from "../assets/help.svg";
import sendFeedbackIcon from "../assets/sendFeedback.svg";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.nav.isMenuOpen);

  if (!isMenuOpen) return null;

  const buttons = [
    { icon: homeIcon, name: "Home", to: "/" },
    { icon: shortsIcon, name: "Shorts", to: "/" },
    { icon: subscriptionsIcon, name: "Subscriptions", to: "/" },
    { icon: libraryIcon, name: "Library", to: "/" },
    { icon: historyIcon, name: "History", to: "/" },
    { icon: yourVideosIcon, name: "Your Videos", to: "/" },
    { icon: watchLaterIcon, name: "Watch Later", to: "/" },
    { icon: likedVideosIcon, name: "Liked Videos", to: "/" },
    { icon: showMoreIcon, name: "Show More", to: "/" },
    { icon: redLiveIcon, name: "Scary Fun", to: "/" },
    { icon: redLiveIcon, name: "Crime Tak", to: "/" },
    { icon: showMoreIcon, name: "Show More...", to: "/" },
    { icon: trendingIcon, name: "Trending", to: "/" },
    { icon: shoppingIcon, name: "Shopping", to: "/" },
    { icon: musicIcon, name: "Music", to: "/" },
    { icon: moviesIcon, name: "Movies", to: "/" },
    { icon: liveIcon, name: "Live", to: "/" },
    { icon: gamingIcon, name: "Gaming", to: "/" },
    { icon: newsIcon, name: "News", to: "/" },
    { icon: sportsIcon, name: "Sports", to: "/" },
    { icon: learningIcon, name: "Learning", to: "/" },
    { icon: fashionAndBeautyIcon, name: "Fashion & Beauty", to: "/" },
    { icon: ytPremiumIcon, name: "Youtube Premium", to: "/" },
    { icon: ytStudioIcon, name: "Youtube Studio", to: "/" },
    { icon: ytMusicIcon, name: "Youtube Music", to: "/" },
    { icon: ytKidsIcon, name: "Youtube Kids", to: "/" },
    { icon: settingsIcon, name: "Settings", to: "/" },
    { icon: reportHistoryIcon, name: "Report History", to: "/" },
    { icon: helpIcon, name: "Help", to: "/" },
    { icon: sendFeedbackIcon, name: "Send Feedback", to: "/" },
  ];

  return (
    <div className='flex flex-col items-center p-1 px-5  hover:bg-gray-100 rounded-lg bg-white border-r border-gray-600'>
      {buttons.map((button, index) => (
        <NavLink key={index} to={button.to}>
          <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'>
            <img className='inline-block align-bottom mr-3' src={button.icon} alt={button.name} /> {button.name}
          </li>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
