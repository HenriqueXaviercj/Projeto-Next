"use client";

import { useUser } from "@/context/user-contents";
import styles from "./photo-comments.module.css";
import { useEffect, useRef, useState } from "react";
import PhotoCommentsForm from "./photo-comments-form";
import { Comment } from "@/actions/photo-get";

export default function PhotoComments(props: {
  single: boolean;
  id: number;
  comments: Comment[];
}) {
  const [comments, setComments] = useState(() => props.comments);
  const commentsSection = useRef<HTMLUListElement | null>(null);
  const { user } = useUser();

  useEffect(() => {
    if (commentsSection.current) {
      commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${props.single ? styles.single : ""}`}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {user && (
        <PhotoCommentsForm
          single={props.single}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  );
}
