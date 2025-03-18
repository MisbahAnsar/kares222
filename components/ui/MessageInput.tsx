import React, { forwardRef, useState } from "react";

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
  inputRef: React.RefObject<HTMLInputElement>; // Add ref prop
}

export const MessageInput = forwardRef<HTMLInputElement, MessageInputProps>(
  ({ onSendMessage, disabled = false, inputRef }, ref) => {
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (message.trim() && !disabled) {
        onSendMessage(message.trim());
        setMessage("");
      }
    };

    return (
      <form onSubmit={handleSubmit} className="flex items-center rounded-lg gap-2 p-4 bg-black border-t border-gray-800">
        {/* Input Container */}
        <div className="flex-1 flex items-center overflow-hidden">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={disabled ? "Select a character" : "Enter message..."}
            disabled={disabled}
            className="flex-1 px-4 py-2 bg-transparent text-white placeholder-gray-500 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            ref={inputRef} // Attach the ref here
          />
        </div>

        {/* Send Button */}
        <button
          title="Send"
          type="submit"
          disabled={disabled || !message.trim()}
          className="border border-gray-600 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors px-3 py-1 rounded-lg"
        >
          Send
        </button>
      </form>
    );
  }
);

MessageInput.displayName = "MessageInput"; // Add display name for forwardRef