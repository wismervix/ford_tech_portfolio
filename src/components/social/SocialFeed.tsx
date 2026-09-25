import { useState } from "react";
import { CommentModal } from "./CommentModal";
import { PostCard } from "./PostCard";

export const SocialFeed = () => {
  const [commentsOpen, setCommentsOpen] = useState(false);

  return (
    <>
      <main className="min-h-screen bg-slate-100 px-4 py-8 md:px-8 md:py-12">
        <div className="mx-auto max-w-2xl">
          {/* Feed heading */}
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0E1629]/60">
              Community
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#0E1629]">
              Latest conversations
            </h1>
          </div>

          {/* Feed */}
          <div className="space-y-5">
            <PostCard onComment={() => setCommentsOpen(true)} />

            {/* Background content intentionally exists */}
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="h-4 w-32 animate-pulse rounded bg-slate-200" />

              <div className="mt-4 space-y-2">
                <div className="h-3 w-full rounded bg-slate-100" />
                <div className="h-3 w-5/6 rounded bg-slate-100" />
                <div className="h-3 w-2/3 rounded bg-slate-100" />
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="h-4 w-40 animate-pulse rounded bg-slate-200" />

              <div className="mt-4 space-y-2">
                <div className="h-3 w-full rounded bg-slate-100" />
                <div className="h-3 w-4/5 rounded bg-slate-100" />
              </div>
            </article>
          </div>
        </div>
      </main>

      <CommentModal
        isOpen={commentsOpen}
        onClose={() => setCommentsOpen(false)}
      />
    </>
  );
};
