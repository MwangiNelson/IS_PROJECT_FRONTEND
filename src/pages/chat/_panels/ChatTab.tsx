import { FormEvent, useRef } from "react";
import { IconButton } from "../../../recyclables/buttons";
import { BotBubble, UserBubble } from "./ChatBubble";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { RiTelegramFill } from "react-icons/ri";

const ChatPanel: React.FC = () => {
  const promptRef = useRef<HTMLInputElement>(null);

  async function postDataToServer(data: object): Promise<any> {
    const url = "/api/generate"; // Your Flask app URL
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data), // Convert the data object to a JSON string
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Assuming the response is also JSON
      return await response.json();
    } catch (error) {
      console.error("There was an error sending the post request:", error);
    }
  }

  const sendPrompt = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const promptObject = {
      prompt: promptRef.current?.value,
    };

    postDataToServer(promptObject)
      .then((response) => {
        // Handle the response here
        console.log("Data submitted successfully:", response);
      })
      .catch((error) => {
        // Handle any errors here
        console.error("Error submitting form:", error);
      });
  };

  return (
    <div className="w-full h-full relative px-4 flex flex-col justify-start">
      <div className="w-full bg-white rounded-[2vh] p-4 flex flex-row justify-between">
        <div className="w-fit flex flex-row gap-4">
          <img
            src="/images/bot.png"
            className="w-[3vw] bg-cream h-[3vw] rounded-full object-cover"
            alt=""
          />

          <div className="flex flex-col h-full justify-between">
            <span className="text-lg font-bold text-black">NutriBot AI</span>
            <span className="bg-green-200 text-green-800 text-xs font-medium me-2 px-2.5 text-center py-1 rounded dark:bg-green-900 dark:text-green-300">
              Active
            </span>
          </div>
        </div>
      </div>

      {/* Chat Section */}
      <div className="flex flex-col w-full pt-10">
        <BotBubble text_author={""} text_time={""} text_id={0} />
        <UserBubble text_author={""} text_time={""} text_id={0} />
      </div>

      <form
        onSubmit={sendPrompt}
        className="absolute w-full flex flex-row bottom-0 items-center"
      >
        <div className="relative w-full my-2">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <FaWandMagicSparkles />
          </div>
          <input
            type="text"
            id="voice-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type your message here"
            ref={promptRef}
            required
          />
          <button
            type="button"
            className="absolute inset-y-0 end-0 flex items-center pe-3"
          >
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
              />
            </svg>
          </button>
        </div>
        <IconButton
          backgroundColor={"w-fit btn-animated mx-10 h-fit"}
          Icon={RiTelegramFill}
          text={"Send"}
        />
      </form>
    </div>
  );
};

export default ChatPanel;
