import useGetMessges from "../../hooks/useGetMessges";
import useListenMessages from "../../hooks/useListenMessages ";
import MessageSkeleton from "../../skeletons/MessageSkeletons";
import Message from "./Message";
import { useEffect, useRef } from "react";

const Messages = () => {
  const { messages, loading } = useGetMessges();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message, index) => (
          <div key={index} ref={index === messages.length - 1 ? lastMessageRef : null}>
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center text-red-200">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
