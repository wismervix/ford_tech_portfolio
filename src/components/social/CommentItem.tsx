import { useState } from "react";
import { Heart, MessageCircle } from "lucide-react";

export interface Comment {
  id: number;
  author: string;
  avatar: string;
  text: string;
  time: string;
  likes: number;
  liked?: boolean;
  replies?: Comment[];
}

interface CommentItemProps {
  comment: Comment;
  depth?: number;
  onReply: (commentId: number, text: string) => void;
  onLike: (commentId: number) => void;
}

export const CommentItem = ({
  comment,
  depth = 0,
  onReply,
  onLike,
}: CommentItemProps) => {
  const [replyOpen, setReplyOpen] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleReply = () => {
    const trimmed = replyText.trim();

    if (!trimmed) return;

    onReply(comment.id, trimmed);

    setReplyText("");
    setReplyOpen(false);
  };

  return (
    <div className={depth > 0 ? "ml-10" : ""}>
      <div className="flex gap-3">
        {/* Avatar */}
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-200 text-sm font-bold text-slate-700">
          {comment.avatar}
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <div className="inline-block max-w-full rounded-2xl bg-slate-100 px-4 py-2.5">
            <p className="text-sm font-semibold text-slate-900">
              {comment.author}
            </p>

            <p className="mt-0.5 whitespace-pre-wrap text-sm leading-relaxed text-slate-700">
              {comment.text}
            </p>
          </div>

          {/* Comment actions */}
          <div className="mt-1 flex items-center gap-4 px-2 text-xs font-semibold text-slate-500">
            <button
              type="button"
              onClick={() => onLike(comment.id)}
              className={`flex items-center gap-1 transition-colors ${
                comment.liked ? "text-red-500" : "hover:text-slate-900"
              }`}
            >
              <Heart
                className="h-3.5 w-3.5"
                fill={comment.liked ? "currentColor" : "none"}
              />

              {comment.likes > 0 && comment.likes}
            </button>

            <button
              type="button"
              onClick={() => setReplyOpen((value) => !value)}
              className="flex items-center gap-1 hover:text-slate-900"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Reply
            </button>

            <span>{comment.time}</span>
          </div>

          {/* Reply input */}
          {replyOpen && (
            <div className="mt-3 flex gap-2">
              <input
                value={replyText}
                onChange={(event) => setReplyText(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    handleReply();
                  }
                }}
                placeholder={`Reply to ${comment.author}...`}
                className="min-w-0 flex-1 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm outline-none transition focus:border-[#0E1629] focus:ring-2 focus:ring-[#0E1629]/10"
                autoFocus
              />

              <button
                type="button"
                onClick={handleReply}
                disabled={!replyText.trim()}
                className="rounded-full bg-[#0E1629] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#080D19] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Reply
              </button>
            </div>
          )}

          {/* Replies */}
          {comment.replies && comment.replies.length > 0 && (
            <div className="mt-3 space-y-4">
              {comment.replies.map((reply) => (
                <CommentItem
                  key={reply.id}
                  comment={reply}
                  depth={depth + 1}
                  onReply={onReply}
                  onLike={onLike}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
