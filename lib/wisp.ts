import {
  buildWispClient,
  GetPostsResult,
  GetPostResult,
} from "@wisp-cms/client";

export const wisp = buildWispClient({
  blogId: "cm75nlyt80000h2x1o1qc3psb",
});

export type { GetPostsResult, GetPostResult };
export type FullPost = GetPostResult["post"];
export type Post = NonNullable<GetPostsResult["posts"][number]>;
