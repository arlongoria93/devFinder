<script>
  // @ts-nocheck
  import searchIcon from "$lib/assets/icon-search.svg";
  export let data;
  const { octoCat } = data;
  const { avatar_url, name, login, created_at, bio } = octoCat;
  //convert the date to a readable format
  const date = new Date(created_at);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const readableDate = date.toLocaleDateString("en-US", options);
</script>

<div
  class="bg-[#F6F8FF] min-h-screen flex flex-col items-center transform-all justify-center space-y-8"
>
  <!-- search bar -->
  <div
    class="w-[730px] bg-white flex flex-row shadow-md justify-between p-4 rounded-lg"
  >
    <div class="flex flex-row items-center space-x-4 w-full">
      <img src={searchIcon} alt="search" class="w-4 h-4" />
      <input
        type="text"
        placeholder="Search Github username..."
        class="outline-none caret-[#0079FF] w-full opacity-100 text-[18px] font-space-mono  text-[#4B6A9B]"
      />
    </div>
    <h4 />
    <button>search</button>
  </div>

  <div
    class="w-[730px] rounded-lg shadow-md bg-white flex flex-row justify-start h-96"
  >
    <div class=" flex flex-col items-center p-8 ">
      <img src={avatar_url} alt="octocat" class="w-32 rounded-full" />
    </div>
    <div class="flex flex-col space-y-4 items-start w-full p-8">
      <div class="w-full">
        <div class="flex flex-row w-full justify-between">
          <h1
            class="font-space-mono font-bold text-[26px] leading-space-heading text-[#2B3442]"
          >
            {name}
          </h1>

          <p
            class="text-[13px] font-space-mono leading-space-h4 text-[#697C9A]"
          >
            {readableDate}
          </p>
        </div>
        <h3 class="text-[16px] text-[#0079FF] font-space-mono">@{login}</h3>
      </div>
      <p
        class="font-space-mono leading-space-paragraph text-[15px] text-[#697C9A]"
      >
        {bio === null ? "This profile has no bio" : bio}
      </p>
    </div>
  </div>
</div>
