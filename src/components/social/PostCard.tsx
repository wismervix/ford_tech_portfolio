import { Heart, MessageCircle, MoreHorizontal, Share2 } from "lucide-react";

interface PostCardProps {
  onComment: () => void;
}

export const PostCard = ({ onComment }: PostCardProps) => {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Post header */}
      <div className="flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0E1629] font-bold text-white">
            F
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900">Ford Tech</h3>

            <p className="text-xs text-slate-500">2 hours ago · 🌎</p>
          </div>
        </div>

        <button
          type="button"
          className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
          aria-label="More options"
        >
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>

      {/* Content */}
      <div className="px-5 pb-5">
        <p className="text-[15px] leading-7 text-slate-700">
          Building thoughtful digital experiences isn't just about writing code.
          It's about understanding the people who will actually use what you
          build.
        </p>

        <p className="mt-3 text-[15px] leading-7 text-slate-700">
          What's one small UX detail that makes a website feel significantly
          better to you?
        </p>
      </div>

      {/* Fake engagement summary */}
      <div className="flex items-center justify-between border-t border-slate-100 px-5 py-3 text-xs text-slate-500">
        <span>❤️ 24</span>
        <span>8 comments</span>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-3 border-t border-slate-100">
        <button
          type="button"
          className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-[#0E1629]"
        >
          <Heart className="h-4 w-4" />
          Like
        </button>

        <button
          type="button"
          onClick={onComment}
          className="flex items-center justify-center gap-2 border-x border-slate-100 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-[#0E1629]"
        >
          <MessageCircle className="h-4 w-4" />
          Comment
        </button>

        <button
          type="button"
          className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-[#0E1629]"
        >
          <Share2 className="h-4 w-4" />
          Share
        </button>
      </div>
    </article>
  );
};
