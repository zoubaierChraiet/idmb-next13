import React from "react";

interface IProps {}

const About: React.FC<IProps> = (props) => {
  return (
    <>
      <h2 className="text-2xl font-bold">About</h2>
      <p>
        Launched online in 1990 and a subsidiary of Amazon.com since 1998, IMDb
        is the worlds most popular and authoritative source for movie, TV and
        celebrity content, designed to help fans explore the world of movies and
        shows and decide what to watch. Our searchable database includes
        millions of movies, TV and entertainment programs and cast and crew
        members. IMDb can help you: Jog your memory about a movie, show, or
        person on the tip of your tongue Find the best movie or show to watch
        next Empower you to share your entertainment knowledge and opinions with
        the world’s largest community of fans For fans deciding what to watch
        and where to watch it.
      </p>
    </>
  );
};

export default About;
