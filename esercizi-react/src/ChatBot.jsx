import { useEffect, useState } from "react";
import useBotResponse from "./useBotResponse";

export default function ChatBot({ messages, onSendMessage }) {
  const [input, setInput] = useState(""); //messaggi utente
  const [botMessages, setBotMessages] = useState([]); //messaggi bot

  const { response, isLoading, isError } = useBotResponse(null);

  useEffect(() => {
    if (response) {
      setBotMessages((prev) => [...prev, { sender: "bot", text: response }]); //a ogni nuova response, aggiornando i messaggi del bot
    }
  }, [response]);

  const handleSubmit = (x) => {
    x.preventDefault();
    onSendMessage(input); //Invia il messaggio dell’utente a handleSendMessage
    setInput("");
  };

  return (
    <div>
      <div>
        <p value={messages} style={{ textAlign: "right" }}>
          You: {msg.text}
        </p>

        <p value={botMessages} style={{ textAlign: "left" }}>
          Bot: {msg.text}
        </p>

        {isLoading && <p>Loading...</p>}
        {isError && <p>ERROR!</p>}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(X) => setInput(X.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
