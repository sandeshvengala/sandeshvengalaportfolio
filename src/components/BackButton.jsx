import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export default function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={handleBack}
      className="inline-flex items-center justify-center rounded-full border border-ink/20 bg-white/80 p-2 transition hover:border-accent hover:bg-accent/10 dark:border-paper/20 dark:bg-ink/30 dark:text-paper dark:hover:border-accent dark:hover:bg-accent/10"
      aria-label="Go back to previous page"
    >
      <FiArrowLeft className="h-5 w-5" />
    </button>
  );
}
