<script>
  // @ts-nocheck
  import searchIcon from "$lib/assets/icon-search.svg";
  import twitterIcon from "$lib/assets/icon-twitter.svg";
  import locationIcon from "$lib/assets/icon-location.svg";
  import companyIcon from "$lib/assets/icon-company.svg";
  import websiteIcon from "$lib/assets/icon-website.svg";
  export let data;
  let searchedUser;
  let results = ""
const {octoCat} = data; 
  const {
    avatar_url,
    name,
    login,
    created_at,
    bio,
    followers,
    following,
    public_repos,
    twitter_username,
    blog,
    location,
    company
  } = octoCat;
  //convert the date to a readable format
  const date = new Date(created_at);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const readableDate = date.toLocaleDateString("en-US", options);
  let userSearch = "";
  //search github for user
  const searchUser = async () => {
    const response = await fetch(
      `https://api.github.com/users/${userSearch}`
    );
    const result = await response.json();
    searchedUser = result;
    if (result.message === "Not Found") {
      console.log("user not found");

    } else {
     results="No Results" 
      console.log(searchedUser);
    }
  };
</script>

<div
  class="bg-[#F6F8FF] min-h-screen flex flex-col items-center transform-all justify-center space-y-8"
>
  <!-- search bar -->
  <div
    class="w-[730px] bg-white flex flex-row shadow-md justify-between p-4 rounded-lg items-center"
  >
    <div class="flex flex-row items-center space-x-4 pl-4  w-[348px] ">
      <img src={searchIcon} alt="search" />
      <input
      bind:value={userSearch}
        type="text"
        placeholder="Search Github username..."
        class="outline-none caret-[#0079FF] w-full opacity-100 text-[18px] font-space-mono  text-[#4B6A9B]"
      />
    </div>
    <div class="flex flex-row items-center space-x-4">
      <h4 class="text-red text-[15px] font-space-mono text-red-600">{results}</h4>
      <button
      on:click={searchUser}
        class="bg-[#60ABFF] rounded-md p-4 text-white text-[16px] w-[106px]"
        >Search</button
      >
    </div>
  </div>

  <div
    class="w-[730px] rounded-lg shadow-md bg-white flex flex-row justify-start h-[444px]"
  >
    <div class=" flex flex-col items-center p-8 ">
      <img src={avatar_url? avatar_url:""} alt="octocat" class="w-32 rounded-full" />
    </div>
    <div class="flex flex-col space-y-4 items-start w-full p-8">
      <div class="w-full">
        <div class="flex flex-row w-full justify-between">
          <h1
            class="font-space-mono font-bold text-[26px] leading-space-heading text-[#2B3442]"
          >
            {name && name}
          </h1>

          <p
            class="text-[13px] font-space-mono leading-space-h4 text-[#697C9A]"
          >
            {readableDate && readableDate}
          </p>
        </div>
        <h3 class="text-[16px] text-[#0079FF] font-space-mono">@{login? login:""}</h3>
      </div>
      <p
        class="font-space-mono leading-space-paragraph text-[15px] text-[#697C9A]"
      >
        {bio === null ? "This profile has no bio" : bio}
      </p>
      <div
        class="w-full h-[84px] rounded bg-[#F6F8FF] flex flex-row justify-around align-center items-center "
      >
        <div class="flex flex-col items-start">
          <h4 class="text-[13px] text-[#4B6A9B] font-space-mono">Repos</h4>
          <h1 class="text-[#2B3442] font-space-mono font-bold text-[22px]">
            {public_repos&& public_repos}
          </h1>
        </div>

        <div class="flex flex-col items-start">
          <h4 class="text-[13px] text-[#4B6A9B] font-space-mono">Followers</h4>
          <h1 class="text-[#2B3442] font-space-mono font-bold text-[22px]">
            {followers}
          </h1>
        </div>

        <div class="flex flex-col items-start">
          <h4 class="text-[13px] text-[#4B6A9B] font-space-mono">Following</h4>
          <h1 class="text-[#2B3442] font-space-mono font-bold text-[22px]">
            {following}
          </h1>
        </div>
      </div>
      <div
        class="w-full flex flex-row justify-around items-center h-[120px] leading-[22px] "
      >
        <div class="flex flex-col items-center justify-center h-full font-space-mono leading-[22px] space-y-8 font-normal text-[#4B6A9B] text-[15px]">
          <div class="flex flex-row justify-start w-full space-x-4 ">
            <img src={locationIcon} alt="location" />
            <h4>
              {location === null ? "No location" : location}
            </h4>
          </div>
          <div
            class="flex flex-row justify-start align-center w-full space-x-4"
          >
            <img src={websiteIcon} alt="website" />
            <a href={`${blog}`} class="ease-in-out duration-300 transition-all 	">
            <h4 class="hover:cursor-pointer hover:underline transition-all ease-in-out duration-300">
              {blog === null ? "No website" : blog}
            </h4>
           </a>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center h-full font-space-mono space-y-8 font-normal text-[#4B6A9B] text-[15px]">
          <div class="flex flex-row justify-start align-center w-full space-x-4">
            <img src={twitterIcon} alt="twitter" />
            <h4 class="opacity-50">
              {twitter_username === null
                ? "Not Available"
                : `@${twitter_username}`}
          </div>
          <div class="flex flex-row justify-start align-center w-full space-x-4">
            <img src={companyIcon} alt="company" />
            <h4>
              {company === null ? "Not Available" : company}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
