import ghpages from "gh-pages";

ghpages.publish(
  "dist",
  { branch: "prod" },
  function (err) {
    console.log("err: ", err);
  }
);
