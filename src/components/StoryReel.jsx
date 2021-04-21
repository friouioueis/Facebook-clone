import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://images-na.ssl-images-amazon.com/images/I/91V8vGmZj8L.jpg"
        profileSrc="https://avatars.githubusercontent.com/u/43782909?s=400&u=3a45027c5ce90e27ba32fff08ac58523cf856614&v=4"
        title="Oueis"
      />
      <Story
        image="https://img.freepik.com/free-vector/programming-code-coding-hacker-background-programming-code-icon-made-with-binary-code_127544-815.jpg?size=626&ext=jpg"
        profileSrc="https://i.pinimg.com/236x/dc/ef/3a/dcef3abedf0e0761203aaeb85886a6f3--jedi-knight-open-source.jpg"
        title="Eminem"
      />
      <Story
        image="https://lokeshdhakar.com/projects/lightbox2/images/image-4.jpg"
        profileSrc="https://www.clipartkey.com/mpngs/m/205-2059469_github-octocat.png"
        title="Youcef"
      />
      <Story
        image="https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg"
        profileSrc="https://www.pngkit.com/png/detail/178-1787354_http-octodex-github-v2-github-octocat.png"
        title="Messi"
      />
      <Story
        image="https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg"
        profileSrc="https://s3.amazonaws.com/media.eremedia.com/uploads/2017/01/23143044/github4.jpg"
        title="Ronaldo"
      />
    </div>
  );
}

export default StoryReel;
