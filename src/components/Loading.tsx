import { SpinnerDotted } from "spinners-react";

export default function Loading() {
  return (
    <div className="h-screen fixed bottom-0 top-0 bg-white/80 w-full z-50 flex justify-center items-center">
      <SpinnerDotted color="#202020" />
    </div>
  );
}
