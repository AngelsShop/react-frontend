import type { ToastContentProps } from "react-toastify";
import "../style.css";

export function SplitButtons({ isPaused, closeToast }: ToastContentProps) {
  return (
    <div className="w-full">
      <h3 className="text-[#E0BEA2]">Авторизация</h3>
      <p>Для доступа к данным необходимо зарегистрироваться</p>
      <div className="mt-3 h-1 w-full bg-gray-400 overflow-hidden rounded">
        <div
          className={`h-full bg-[#E0BEA2] ${
            isPaused ? "animate-none" : "animate-progress"
          }`}
          onAnimationEnd={() => closeToast()}
        ></div>
      </div>
    </div>
  );
}
