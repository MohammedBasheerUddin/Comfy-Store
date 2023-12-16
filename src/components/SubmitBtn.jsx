import { useNavigation } from "react-router-dom";

function SubmitBtn({ text }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <button type="submit" className="btn btn-primary btn-block capitalize" disabled={isSubmitting}>
      {
        isSubmitting ? <>
          <span className="loading loading-dots">getting things ready</span>
        </> : text || 'submit'
      }
    </button>
  );
}

export default SubmitBtn;
