import {
  ArrowLeft,
//   Heart,
  MessageCircle,
  MoreHorizontal,
  Send,
  Share2,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CommentItem } from "./CommentItem";
import type { Comment } from "./CommentItem";

interface CommentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialComments: Comment[] = [
  {
    id: 1,
    author: "Jane Doe",
    avatar: "J",
    text: "This is such an important point. Small details really do make a huge difference.",
    time: "1h",
    likes: 4,
    replies: [
      {
        id: 11,
        author: "Mike Smith",
        avatar: "M",
        text: "Absolutely agree. Especially on mobile.",
        time: "45m",
        likes: 2,
      },
    ],
  },
  {
    id: 2,
    author: "Alex Williams",
    avatar: "A",
    text: "For me it's definitely good spacing and typography.",
    time: "38m",
    likes: 3,
  },
  {
    id: 3,
    author: "Sarah James",
    avatar: "S",
    text: "Micro-interactions. When they're subtle and intentional, they make an interface feel alive.",
    time: "12m",
    likes: 6,
  },
];

export const CommentModal = ({ isOpen, onClose }: CommentModalProps) => {
  const [comments, setComments] = useState(initialComments);
  const [commentText, setCommentText] = useState("");

  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Lock body scrolling while modal is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  // Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Focus input after modal opens
  useEffect(() => {
    if (!isOpen) return;

    const timer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 350);

    return () => window.clearTimeout(timer);
  }, [isOpen]);

  const handleSubmit = () => {
    const text = commentText.trim();

    if (!text) return;

    const newComment: Comment = {
      id: Date.now(),
      author: "You",
      avatar: "Y",
      text,
      time: "now",
      likes: 0,
    };

    setComments((current) => [newComment, ...current]);
    setCommentText("");
  };

  const handleReply = (commentId: number, text: string) => {
    setComments((current) =>
      current.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: [
              ...(comment.replies ?? []),
              {
                id: Date.now(),
                author: "You",
                avatar: "Y",
                text,
                time: "now",
                likes: 0,
              },
            ],
          };
        }

        return comment;
      }),
    );
  };

  const handleLike = (commentId: number) => {
    const updateComment = (comment: Comment): Comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          liked: !comment.liked,
          likes: comment.liked ? comment.likes - 1 : comment.likes + 1,
        };
      }

      return {
        ...comment,
        replies: comment.replies?.map(updateComment),
      };
    };

    setComments((current) => current.map(updateComment));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="comment-overlay"
          className="fixed inset-0 z-[100] flex items-end justify-center md:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label="Close comments"
            onClick={onClose}
            className="absolute inset-0 cursor-default bg-slate-950/65 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Conversation */}
          <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby="comments-title"
            className="
              relative z-10 flex w-full flex-col overflow-hidden
              bg-white shadow-2xl

              max-h-[96dvh]
              rounded-t-[1.75rem]

              md:h-[min(760px,90vh)]
              md:max-w-2xl
              md:rounded-2xl
            "
            initial={{
              y: "100%",
              opacity: 0.8,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: "100%",
              opacity: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 35,
              mass: 0.8,
            }}
          >
            {/* Mobile grab handle */}
            <div className="flex justify-center pt-2 md:hidden">
              <div className="h-1 w-10 rounded-full bg-slate-300" />
            </div>

            {/* Header */}
            <header className="flex shrink-0 items-center justify-between border-b border-slate-100 px-4 py-4 md:px-5">
              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-2 text-slate-600 transition hover:bg-slate-100 md:hidden"
                aria-label="Close comments"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>

              <div className="flex-1 text-center md:text-left">
                <h2
                  id="comments-title"
                  className="text-base font-bold text-slate-900"
                >
                  Comments
                </h2>

                <p className="text-xs text-slate-500">
                  {comments.length} comments
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-2 text-slate-600 transition hover:bg-slate-100"
                aria-label="Close comments"
              >
                <X className="h-5 w-5" />
              </button>
            </header>

            {/* Post preview */}
            <div className="shrink-0 border-b border-slate-100 px-5 py-4">
              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0E1629] text-sm font-bold text-white">
                  F
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-slate-900">
                      Ford Tech
                    </h3>

                    <span className="text-xs text-slate-400">· 2h</span>
                  </div>

                  <p className="mt-1 line-clamp-3 text-sm leading-6 text-slate-600">
                    Building thoughtful digital experiences isn't just about
                    writing code. It's about understanding the people who will
                    actually use what you build.
                  </p>
                </div>

                <button
                  type="button"
                  className="ml-auto shrink-0 rounded-full p-1.5 text-slate-400 hover:bg-slate-100"
                  aria-label="Post options"
                >
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </div>

              {/* Engagement */}
              <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <span>❤️</span>
                  24
                </span>

                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <MessageCircle className="h-3.5 w-3.5" />
                    {comments.length}
                  </span>

                  <span className="flex items-center gap-1">
                    <Share2 className="h-3.5 w-3.5" />
                    Share
                  </span>
                </div>
              </div>
            </div>

            {/* Comments */}
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-5 md:px-5">
              <div className="space-y-5">
                {comments.map((comment) => (
                  <CommentItem
                    key={comment.id}
                    comment={comment}
                    onReply={handleReply}
                    onLike={handleLike}
                  />
                ))}
              </div>
            </div>

            {/* Composer */}
            <div className="shrink-0 border-t border-slate-200 bg-white p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:p-4">
              <div className="flex items-end gap-2">
                {/* User avatar */}
                <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0E1629] text-xs font-bold text-white sm:flex">
                  Y
                </div>

                <div className="relative flex min-h-[44px] flex-1 items-end rounded-3xl border border-slate-200 bg-slate-50 transition focus-within:border-[#0E1629]/30 focus-within:bg-white focus-within:ring-2 focus-within:ring-[#0E1629]/10">
                  <textarea
                    ref={inputRef}
                    value={commentText}
                    onChange={(event) => setCommentText(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" && !event.shiftKey) {
                        event.preventDefault();
                        handleSubmit();
                      }
                    }}
                    rows={1}
                    placeholder="Write a comment..."
                    className="max-h-32 min-h-[44px] w-full resize-none bg-transparent px-4 py-3 pr-12 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                  />

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!commentText.trim()}
                    className="absolute bottom-1.5 right-1.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#0E1629] text-white transition hover:bg-[#080D19] disabled:cursor-not-allowed disabled:opacity-30"
                    aria-label="Post comment"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <p className="mt-1 hidden px-12 text-[10px] text-slate-400 sm:block">
                Press Enter to comment · Shift + Enter for a new line
              </p>
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
