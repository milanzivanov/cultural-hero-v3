interface LoaderProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Loader({ size = "md", className = "" }: LoaderProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  };

  return (
    <div
      className={`flex flex-col justify-center items-center gap-4 ${className}`}
    >
      <div
        className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`}
      />
      <p className="text-gray-600 dark:text-gray-300 text-sm">Učitavanje...</p>
    </div>
  );
}
