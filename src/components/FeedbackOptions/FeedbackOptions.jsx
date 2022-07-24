export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <button
        title={option}
        key={option}
        type="button"
        onClick={() => {
          onLeaveFeedback(option);
        }}
      >
        {option}
      </button>
    ))}
  </div>
);
