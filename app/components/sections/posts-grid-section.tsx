import type { MdxListItem } from "types";
import { H2 } from "~/components/typography";
import { Grid } from "~/components/grid";
import { PostCard } from "~/components/post-card";
import clsx from "clsx";

interface PostGridProps {
    posts: Array<MdxListItem>;
    title: string;
    subTitle: string;
}

export function PostSection({ posts, title, subTitle }: PostGridProps) {
    return (
        <>
            {posts.length > 0 && (
                <section className="max-w-[1620px] w-full mx-auto px-[5vw] md:px-20 mt-40 md:mt-60">
                    <H2>{title}</H2>
                    <H2 variant="secondary" as="p">
                        {subTitle}
                    </H2>

                    <Grid className="mt-16" rowGap={true}>
                        {posts.slice(0, 3).map((post, idx) => (
                            <div
                                key={post.slug}
                                className={clsx("col-span-4", {
                                    "hidden lg:block": idx >= 2,
                                })}
                            >
                                <PostCard post={post} />
                            </div>
                        ))}
                    </Grid>
                </section>
            )}
        </>
    );
}
