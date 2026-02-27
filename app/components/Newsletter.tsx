export default function Newsletter() {
  return (
    <div className="flex flex-col items-center w-150">
      <h2 className="mb-12">Узнайте первым о новинках</h2>
      <div className="flex flex-col gap-5 mb-5 w-full">
        <input
          type="text"
          placeholder="Ваш e-mail*"
          required
          className="border-[0.5px] text-center py-4"
        />
        <button
          type="submit"
          className="text-white uppercase py-4 border-[0.5px] bg-[#E0BEA2]"
        >
          Подписаться
        </button>
      </div>
      <p className="text-center">
        Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих
        персональных данных и ознакомлен(а) с условиями конфиденциальности.
      </p>
    </div>
  );
}
