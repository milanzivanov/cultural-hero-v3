import Loader from "@/components/Loader";

function loading() {
  return (
    <div className="h-dvh w-full flex justify-center items-center">
      <Loader size="lg" className="text-center" />
    </div>
  );
}
export default loading;
