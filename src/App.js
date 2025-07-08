import React, { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulated API Response
    setTimeout(() => {
      const simulatedResponse = {
        answer:
          "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
        citations: [
          {
            text: "As the age of the deceased at the time of accident was held to be about 54–55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects. (Para 7 of the document)",
            source: "Dani_Devi_v_Pritam_Singh.pdf",
            link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
          },
        ],
      };
      setResponse(simulatedResponse);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Lexi Legal Assistant</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-md rounded p-6"
      >
        <textarea
          className="w-full border border-gray-300 rounded p-3 mb-4"
          rows="4"
          placeholder="Enter your legal question..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        ></textarea>
        <button
          type="submit"
          className={`w-full py-2 px-4 rounded text-white ${
            loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
          }`}
          disabled={loading}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>

      {response && (
        <div className="w-full max-w-lg mt-6 bg-white shadow-md rounded p-6">
          <h2 className="text-xl font-semibold mb-2">Answer</h2>
          <p className="mb-4">{response.answer}</p>
          <h3 className="font-semibold mb-1">Citation</h3>
          <a
            href={response.citations[0].link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {response.citations[0].text}
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
